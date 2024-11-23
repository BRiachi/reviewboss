import { NextResponse } from 'next/server';
import { getUserByEmail, setResetToken } from '@/lib/db';
import { sendPasswordResetEmail } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const user = getUserByEmail(email);
    if (user) {
      const resetToken = crypto.randomUUID();
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      setResetToken(email, resetToken, expires);
      await sendPasswordResetEmail(email, resetToken);
    }

    return NextResponse.json({
      message: 'If an account exists, you will receive a password reset email'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}