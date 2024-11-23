import { NextResponse } from 'next/server';
import { verifyEmail } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 400 }
    );
  }

  const result = verifyEmail(token);
  if (!result) {
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'Email verified successfully' });
}