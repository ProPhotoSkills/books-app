// Anmeldung für PPS Books (v12, Freischaltung je Buch – Eric 14.11.: „Freischaltung … bau mal los“)
// Gleiches Konto wie web (Supabase-Projekt „Web Login“): wer bei Digistore kauft, bekommt dort
// automatisch ein Konto (Einladungs-Mail) – mit E-Mail + Passwort meldet man sich hier an.
// Was man lesen darf, sagt das Tor books-gate (/meine) – die App fragt nicht selbst die Datenbank.
// v13 (Eric 14.11.: „Idee C mit dem Konto … umsetzen“): Beginner gibt es mit kostenlosem Konto –
// Registrieren in der App (E-Mail + Passwort, Bestätigungsmail), Newsletter nur als freiwilliger Haken
// (wird mit Zeitpunkt im Konto gespeichert, user_metadata).
// Google-Play-Regel: hier keine Kauf- oder Produktlinks.
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { createClient, type Session, type SupabaseClient } from "@supabase/supabase-js";

import { gateUrl } from "@/lib/books";

// Öffentliche Werte des Projekts „Web Login“ (stehen genauso im Repo web, src/integrations/supabase/client.ts).
// Der anon-Schlüssel ist öffentlich – geschützt wird über die Datenbank-Regeln (RLS) und das Tor.
const SUPABASE_URL = ((import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? "https://rkgjuqdkwaaymkruyhvy.supabase.co").replace(/\/+$/, "");
const SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZ2p1cWRrd2FheW1rcnV5aHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg3MDEwODksImV4cCI6MjEwNDI3NzA4OX0.nDpLI0L68tTufHueTKWSixOZicIpDzwwxQR3PmtURS4";

let client: SupabaseClient | null = null;
export function supabase(): SupabaseClient | null {
  if (typeof window === "undefined") return null; // nur im Browser
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: "ppsb_auth" },
    });
  }
  return client;
}

export type Rechte = { angemeldet: boolean; buecher: string[]; frei: string[]; konto: string[] };

export type Registrierung = { email: string; passwort: string; newsletter: boolean; sprache: string; weiter?: string };

type AuthCtx = {
  bereit: boolean;
  session: Session | null;
  rechte: Rechte;
  darfLesen: (buch: string) => boolean;
  anmelden: (email: string, passwort: string) => Promise<string | null>;
  /** null = fertig angemeldet · "bestaetigen" = Bestätigungsmail unterwegs · sonst Fehlertext */
  registrieren: (r: Registrierung) => Promise<string | null>;
  abmelden: () => Promise<void>;
  passwortVergessen: (email: string) => Promise<string | null>;
  neuesPasswort: (passwort: string) => Promise<string | null>;
};

const LEER: Rechte = { angemeldet: false, buecher: [], frei: [], konto: ["beginner"] };
const Ctx = createContext<AuthCtx | null>(null);

/** Fetch beim Tor – mit Ausweis, wenn angemeldet. */
export async function gateFetch(pfad: string): Promise<Response> {
  const sb = supabase();
  const token = sb ? (await sb.auth.getSession()).data.session?.access_token : undefined;
  return fetch(gateUrl(pfad), token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [bereit, setBereit] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [rechte, setRechte] = useState<Rechte>(LEER);

  const ladeRechte = useCallback(async () => {
    try {
      const res = await gateFetch("/meine");
      if (res.ok) {
        const d = (await res.json()) as Partial<Rechte>;
        setRechte({ angemeldet: !!d.angemeldet, buecher: d.buecher ?? [], frei: d.frei ?? LEER.frei, konto: d.konto ?? LEER.konto });
        return;
      }
    } catch (err) {
      console.error(err);
    }
    setRechte(LEER);
  }, []);

  useEffect(() => {
    const sb = supabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setBereit(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const token = session?.access_token ?? null;
  useEffect(() => {
    if (bereit) void ladeRechte();
  }, [bereit, token, ladeRechte]);

  const wert = useMemo<AuthCtx>(
    () => ({
      bereit,
      session,
      rechte,
      darfLesen: (buch) => {
        const b = buch.toLowerCase();
        if (rechte.frei.includes(b)) return true;
        if (!rechte.angemeldet) return false;
        return rechte.konto.includes(b) || rechte.buecher.includes("*") || rechte.buecher.includes(b);
      },
      anmelden: async (email, passwort) => {
        const sb = supabase();
        if (!sb) return "offline";
        const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password: passwort });
        return error ? error.message : null;
      },
      registrieren: async ({ email, passwort, newsletter, sprache, weiter }) => {
        const sb = supabase();
        if (!sb) return "offline";
        const { data, error } = await sb.auth.signUp({
          email: email.trim(),
          password: passwort,
          options: {
            emailRedirectTo: `${window.location.origin}${weiter ?? "/"}`,
            data: {
              quelle: "pps-books",
              sprache,
              newsletter,
              newsletter_at: newsletter ? new Date().toISOString() : null,
            },
          },
        });
        if (error) return error.message;
        return data.session ? null : "bestaetigen";
      },
      abmelden: async () => {
        await supabase()?.auth.signOut();
        setSession(null);
      },
      passwortVergessen: async (email) => {
        const sb = supabase();
        if (!sb) return "offline";
        const { error } = await sb.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/passwort` });
        return error ? error.message : null;
      },
      neuesPasswort: async (passwort) => {
        const sb = supabase();
        if (!sb) return "offline";
        const { error } = await sb.auth.updateUser({ password: passwort });
        return error ? error.message : null;
      },
    }),
    [bereit, session, rechte],
  );

  return <Ctx.Provider value={wert}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth außerhalb von AuthProvider");
  return c;
}
