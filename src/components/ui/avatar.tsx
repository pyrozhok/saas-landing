import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}
const Avatar: FC<AvatarProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Avatar;
