import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/swap',
  '/supply',
  '/borrow',
  '/stake',
  '/portfolio',
])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
  const { userId, redirectToSignIn } = await auth()
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn()
    //Here you can add custom logic to run before redirecting e.g. logging unauthorized access attempts for security monitoring, routing users to region-specific sign in pages, or handle maintenance windows for specific routes
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
