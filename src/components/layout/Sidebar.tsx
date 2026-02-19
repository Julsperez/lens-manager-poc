import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
    LayoutDashboard,
    Users,
    Calendar,
    DollarSign,
    Settings,
    LogOut,
    Aperture
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Grupos', path: '/groups' },
    { icon: Calendar, label: 'Calendario', path: '/calendar' },
    { icon: DollarSign, label: 'Finanzas', path: '/finance' },
];

interface SidebarProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
    const location = useLocation();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                "flex flex-col w-64 bg-neutral-900 border-r border-neutral-800 h-screen transition-all duration-300 ease-in-out z-50",
                "fixed md:static inset-y-0 left-0",
                isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
                className
            )}>
                <div className="p-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-accent p-2 rounded-lg">
                            <Aperture className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-brand-primary font-bold text-xl tracking-tight">LensManager</span>
                    </div>
                    {/* Mobile Close Button (optional, overlay handles click, but good for a11y) */}
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20"
                                        : "text-neutral-400 hover:text-brand-primary hover:bg-neutral-800"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-neutral-800 space-y-2">
                    <Link
                        to="/settings"
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-400 hover:text-brand-primary hover:bg-neutral-800 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        Configuración
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-status-error hover:bg-status-error/10 transition-colors">
                        <LogOut className="w-5 h-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </aside>
        </>
    );
}
