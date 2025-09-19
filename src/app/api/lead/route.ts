import { NextResponse } from 'next/server';

// Simple in-memory store (placeholder). In producción usar DB / webhook.
const leads: any[] = [];

export async function POST(request: Request) {
  try {
    const { email, role, orgType } = await request.json();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }
    leads.push({ email, role, orgType, ts: Date.now() });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
