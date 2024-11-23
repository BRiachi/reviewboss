import { NextResponse } from 'next/server';
import { resetPasswordSchema } from '@/lib/validations/auth';
import { resetPassword } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = resetPasswordSchema.parse(json);

    const hashedPassword = await hashPassword(body.password);
    const result = resetPassword(body.token, hashedPassword);

    if (!result) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: 'Password reset successful' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}