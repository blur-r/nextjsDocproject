// import Form from '@/app/ui/invoices/edit-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

// export default async function Page(props: { params: Promise<{ id: string }> }) {
//     const params = await props.params;
//     const id = params.id;
//     const [invoice, customers] = await Promise.all([
//         fetchInvoiceById(id),
//         fetchCustomers(),
//     ]);

//     return (
//         <main>
//             <Breadcrumbs
//                 breadcrumbs={[
//                     { label: 'Invoices', href: '/dashboard/invoices' },
//                     {
//                         label: 'Edit Invoice',
//                         href: `/dashboard/invoices/${id}/edit`,
//                         active: true,
//                     },
//                 ]}
//             />
//             <Form invoice={invoice} customers={customers} />
//         </main>
//     );
// }

import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

export default function Page(props: { params: Promise<{ id: string }> }) {
    return (
        <main>
            <Suspense fallback={<p>Loading breadcrumbs...</p>}>
                <DynamicBreadcrumbs params={props.params} />
            </Suspense>
            <Suspense fallback={<p>Loading form...</p>}>
                <DynamicForm params={props.params} />
            </Suspense>
        </main>
    );
}

async function DynamicBreadcrumbs({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <Breadcrumbs
            breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoices' },
                {
                    label: 'Edit Invoice',
                    href: `/dashboard/invoices/${id}/edit`,
                    active: true,
                },
            ]}
        />
    );
}

async function DynamicForm({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);
    if (!invoice) {
        notFound();
    }
    return <Form invoice={invoice} customers={customers} />;
}