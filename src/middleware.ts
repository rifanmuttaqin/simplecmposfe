import {NextRequest, NextResponse} from 'next/server';
export default async function middleware(req:NextRequest) {
    const path = req.nextUrl.pathname;
    const isUserLoggedIn = false;

    if(!isUserLoggedIn) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};