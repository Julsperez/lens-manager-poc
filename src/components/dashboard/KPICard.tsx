import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { cn } from '../../lib/utils';

interface KPICardProps {
    title: string;
    value: string | number;
    description?: string;
    icon: LucideIcon;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    iconColor?: string;
}

export function KPICard({ title, value, description, icon: Icon, trend, trendValue, iconColor = "text-brand-primary" }: KPICardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-neutral-400">
                    {title}
                </CardTitle>
                <Icon className={cn("h-4 w-4", iconColor)} />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-white">{value}</div>
                {(description || trendValue) && (
                    <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                        {trend && (
                            <span className={cn(
                                trend === 'up' ? 'text-status-success' :
                                    trend === 'down' ? 'text-status-error' : 'text-neutral-500'
                            )}>
                                {trendValue}
                            </span>
                        )}
                        <span className="ml-1">{description}</span>
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
