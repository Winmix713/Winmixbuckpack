import React from 'react';

interface IconProps {
  className?: string;
}

export function BallIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true">
      
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7 5 3-2 6H9l-2-6 5-3ZM12 3v4M3 10l4 1m14-1-4 1M7 20l2-4m8 4-2-4" />
    </svg>);

}

export function FieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true">
      
      <rect x="3" y="2" width="18" height="20" rx="1" />
      <path d="M3 12h18M8 2v5h8V2M8 22v-5h8v5" />
      <circle cx="12" cy="12" r="3" />
    </svg>);

}