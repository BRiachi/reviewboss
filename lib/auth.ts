import { compare, hash } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const SMTP_FROM = process.env.SMTP_FROM || 'noreply@example.com';

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword);
}

export function generateToken(payload: any): string {
  return sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
    return verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: 'Verify your email address',
    html: `
      <p>Please click the link below to verify your email address:</p>
      <p><a href="${verificationUrl}">${verificationUrl}</a></p>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: 'Reset your password',
    html: `
      <p>Please click the link below to reset your password:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
    `,
  });
}