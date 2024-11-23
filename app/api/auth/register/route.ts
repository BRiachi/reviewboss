import { NextResponse } from 'next/server';
import { registerSchema } from '@/lib/validations/auth';
import { createUser } from '@/lib/db';
import { hashPassword, sendVerificationEmail } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = registerSchema.parse(json);

    const hashedPassword = await hashPassword(body.password);
    const { id, verificationToken } = createUser(
      body.email,
      hashedPassword,
      body.name
    );

    await sendVerificationEmail(body.email, verificationToken);

    return NextResponse.json({ 
      message: 'Registration successful. Please check your email to verify your account.' 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}