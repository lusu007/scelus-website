// Keep Edge Middleware for compatibility with the installed Cloudflare adapter.
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(
    "x-scelus-locale",
    request.nextUrl.pathname.split("/")[1] === "en" ? "en" : "de",
  );
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/de/:path*", "/en/:path*"] };
