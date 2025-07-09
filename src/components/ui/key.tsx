import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface KeyProps extends HTMLAttributes<HTMLSpanElement> {}

const Key: FC<KeyProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'inline-flex size-14 items-center justify-center rounded-2xl bg-neutral-300 text-xl font-medium text-neutral-950',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Key;
