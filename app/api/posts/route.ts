import { NextResponse } from 'next/server';
import { createPost, getPosts } from '@/lib/db';
import { postSchema } from '@/lib/validations/post';

export async function GET() {
  try {
    const posts = getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = postSchema.parse(json);

    const postId = createPost(body.title, body.content, body.authorId);
    const post = { id: postId, ...body };

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}