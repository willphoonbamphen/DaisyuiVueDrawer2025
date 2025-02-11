import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Use environment variable
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Use environment variable

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
