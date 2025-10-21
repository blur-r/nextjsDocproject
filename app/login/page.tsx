// 'use client';

// import { lusitana } from '@/app/ui/fonts';
// import {
//     AtSymbolIcon,
//     KeyIcon,
//     ExclamationCircleIcon,
// } from '@heroicons/react/24/outline';
// import { ArrowRightIcon } from '@heroicons/react/20/solid';
// import { Button } from '@/app/ui/button';
// import { useActionState } from 'react';
// import { authenticate } from '@/app/lib/actions';
// import { useSearchParams } from 'next/navigation';

// export default function LoginForm() {
//     const searchParams = useSearchParams();
//     const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
//     const [errorMessage, formAction, isPending] = useActionState(
//         authenticate,
//         undefined,
//     );

//     return (
//         <form action={formAction} className="space-y-3">
//             <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//                 <h1 className={`${lusitana.className} mb-3 text-2xl`}>
//                     Please log in to continue.
//                 </h1>
//                 <div className="w-full">
//                     <div>
//                         <label
//                             className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//                             htmlFor="email"
//                         >
//                             Email
//                         </label>
//                         <div className="relative">
//                             <input
//                                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                                 id="email"
//                                 type="email"
//                                 name="email"
//                                 placeholder="Enter your email address"
//                                 required
//                             />
//                             <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//                         </div>
//                     </div>
//                     <div className="mt-4">
//                         <label
//                             className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//                             htmlFor="password"
//                         >
//                             Password
//                         </label>
//                         <div className="relative">
//                             <input
//                                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                                 id="password"
//                                 type="password"
//                                 name="password"
//                                 placeholder="Enter password"
//                                 required
//                                 minLength={6}
//                             />
//                             <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//                         </div>
//                     </div>
//                 </div>
//                 <input type="hidden" name="redirectTo" value={callbackUrl} />
//                 <Button className="mt-4 w-full" aria-disabled={isPending}>
//                     Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//                 </Button>
//                 <div
//                     className="flex h-8 items-end space-x-1"
//                     aria-live="polite"
//                     aria-atomic="true"
//                 >
//                     {errorMessage && (
//                         <>
//                             <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//                             <p className="text-sm text-red-500">{errorMessage}</p>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </form>
//     );
// }

// app/login/page.tsx (Server Component - NO 'use client')
import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please sign in to your account
                    </p>
                </div>

                {/* ← CRITICAL: Wrap in Suspense for prerendering */}
                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                }>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
}