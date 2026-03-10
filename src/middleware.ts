import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = await fetch(
    new URL("/api/auth/get-session", request.nextUrl.origin),
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const data = await res.json();

  if (!data?.session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/create", "/my-haikus", "/inspiration", "/poems", "/info"],
};
