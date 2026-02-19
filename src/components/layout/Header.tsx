import { useLocation } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    const location = useLocation();

    // Simple breadcrum generation based on path
    const getBreadcrumbs = () => {
        const path = location.pathname;
        if (path === '/') return 'Dashboard';
        return path.substring(1).charAt(0).toUpperCase() + path.slice(2);
    };

    return (
        <header className="h-16 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden text-neutral-400 -ml-2" onClick={onMenuClick}>
                    <Menu className="w-6 h-6" />
                </Button>
                <h2 className="text-lg font-medium text-brand-primary capitalize">
                    {getBreadcrumbs()}
                </h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden md:block w-64">
                    <Input
                        placeholder="Buscar..."
                        startIcon={<Search className="w-4 h-4" />}
                        className="bg-neutral-900/50 border-neutral-800 focus:bg-neutral-800 transition-colors"
                    />
                </div>

                <div className="flex items-center gap-4 border-l border-neutral-800 pl-6">
                    <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-brand-primary rounded-full relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border-2 border-neutral-900"></span>
                    </Button>

                    <div className="flex items-center gap-3 pl-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-accent to-purple-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-neutral-800">
                            AD
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs text-neutral-500">Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
