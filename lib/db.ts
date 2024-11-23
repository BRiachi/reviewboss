import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'data.db'));

// Initialize database with tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    role TEXT CHECK(role IN ('admin', 'manager', 'member')) DEFAULT 'member',
    email_verified BOOLEAN DEFAULT FALSE,
    verification_token TEXT,
    reset_token TEXT,
    reset_token_expires DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    author_id TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
  );
`);

export function createUser(
  email: string,
  password: string,
  name?: string,
  role: string = 'member'
) {
  const stmt = db.prepare(
    'INSERT INTO users (id, email, password, name, role, verification_token) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const id = crypto.randomUUID();
  const verificationToken = crypto.randomUUID();
  stmt.run(id, email, password, name, role, verificationToken);
  return { id, verificationToken };
}

export function getUserByEmail(email: string) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}

export function getUserById(id: string) {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  return stmt.get(id);
}

export function verifyEmail(token: string) {
  const stmt = db.prepare(
    'UPDATE users SET email_verified = TRUE, verification_token = NULL WHERE verification_token = ? RETURNING id'
  );
  return stmt.get(token);
}

export function setResetToken(email: string, token: string, expires: Date) {
  const stmt = db.prepare(
    'UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE email = ? RETURNING id'
  );
  return stmt.get(token, expires.toISOString(), email);
}

export function resetPassword(token: string, password: string) {
  const stmt = db.prepare(
    'UPDATE users SET password = ?, reset_token = NULL, reset_token_expires = NULL WHERE reset_token = ? AND reset_token_expires > CURRENT_TIMESTAMP RETURNING id'
  );
  return stmt.get(password, token);
}

// ... (previous db functions remain the same)