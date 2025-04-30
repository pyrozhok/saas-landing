import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'border h-12 rounded-full px-6.5 font-medium cursor-pointer inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        primary:
          'bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-500 transition-colors duration-200 ease-in-out',
        secondary:
          'border-white text-white bg-transparent hover:bg-white/10 transition-colors duration-200 ease-in-out',
      },
      size: {
        sm: 'h-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  buttonVariants({ variant, className });

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
