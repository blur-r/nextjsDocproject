// app/login/LoginSearchParamsClient.tsx
'use client';

import { useSearchParams } from 'next/navigation';

interface LoginSearchParamsClientProps {
    children: (callbackUrl: string) => React.ReactNode;
}

export default function LoginSearchParamsClient({ children }: LoginSearchParamsClientProps) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    return <>{children(callbackUrl)}</>;
}