import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL(`/api/auth/login?post_login_redirect_url=/dashboard`, request.url)
    );
  }
}

export const config = {
  matcher: ["/dashboard", "/teams/create"],
};
