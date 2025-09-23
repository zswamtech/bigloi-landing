import { createClient } from '@supabase/supabase-js';

export function getSupabaseServer() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error('Supabase server env not configured');
  }
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

export const INTAKE_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || 'intake';
