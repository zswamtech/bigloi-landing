import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
import { getSupabaseServer, INTAKE_BUCKET } from '../../../../lib/supabaseServer';

export async function GET() {
  try {
    const supabase = getSupabaseServer();

    // Return empty data if Supabase is not configured
    if (!supabase) {
      return NextResponse.json({
        hospital: [],
        feedback: [],
        message: 'Supabase not configured - feature disabled'
      });
    }

    const hospital = await supabase.storage.from(INTAKE_BUCKET).list('hospital', { limit: 20, sortBy: { column: 'created_at', order: 'desc' } as any });
    const feedback = await supabase.storage.from(INTAKE_BUCKET).list('feedback', { limit: 20, sortBy: { column: 'created_at', order: 'desc' } as any });

    return NextResponse.json({ hospital: hospital.data || [], feedback: feedback.data || [] });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'Error status' }, { status: 500 });
  }
}
