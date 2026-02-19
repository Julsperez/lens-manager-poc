import { type ReactNode, useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-neutral-900 text-brand-primary font-sans antialiased overflow-hidden">
            <Sidebar
                className="flex-shrink-0"
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto p-6 bg-neutral-900 custom-scrollbar">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
