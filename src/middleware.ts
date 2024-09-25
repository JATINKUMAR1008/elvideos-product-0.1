import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("session")?.value;
  const { pathname } = req.nextUrl;
  if (token && pathname.includes("auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!token && !pathname.includes("auth")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
