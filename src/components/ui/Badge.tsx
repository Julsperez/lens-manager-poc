import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-brand-primary text-brand-dark hover:bg-brand-primary/80",
                secondary:
                    "border-transparent bg-neutral-700 text-brand-primary hover:bg-neutral-700/80",
                destructive:
                    "border-transparent bg-status-error text-white hover:bg-status-error/80",
                outline: "text-brand-primary",
                success: "border-transparent bg-status-success/20 text-status-success hover:bg-status-success/30",
                warning: "border-transparent bg-status-warning/20 text-status-warning hover:bg-status-warning/30",
                error: "border-transparent bg-status-error/20 text-status-error hover:bg-status-error/30",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
