import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ 
  children, 
  className, 
  as: Component = 'div',
  ...props 
}: ContainerProps) {
  return (
    <Component 
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
