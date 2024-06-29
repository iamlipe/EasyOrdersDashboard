import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./database-types";

export function supabaseClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY!,
  );
}
