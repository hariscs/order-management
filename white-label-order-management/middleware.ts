import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  const url = request.nextUrl.clone();
  url.searchParams.set("subdomain", subdomain);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/",
};
