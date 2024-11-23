import { NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validations/auth';
import { getUserByEmail } from '@/lib/db';
import { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = loginSchema.parse(json);

    const user = getUserByEmail(body.email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(body.password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    if (!user.email_verified) {
      return NextResponse.json(
        { error: 'Please verify your email address' },
        { status: 403 }
      );
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}