import { type InputHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    startIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, startIcon, ...props }, ref) => {
        return (
            <div className="relative w-full">
                {startIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        {startIcon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-brand-primary ring-offset-neutral-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        startIcon && "pl-9",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
