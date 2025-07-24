import { cn } from '@/lib/utils';
import React from 'react';

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('text-4xl font-bold tracking-tight', className)} {...props} />;
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('text-3xl font-semibold tracking-tight', className)} {...props} />;
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-2xl font-semibold tracking-tight', className)} {...props} />;
}

export function P({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('leading-7', className)} {...props} />;
}

export function Small({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <small className={cn('text-sm font-medium leading-none', className)} {...props} />;
}

export function Muted({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <span className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props} />;
}