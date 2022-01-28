import * as React from 'react';
import cn from 'classnames';

export const IconNX = React.memo<JSX.IntrinsicElements['svg']>(
  ({ className }) => (
    <svg className={cn('inline', className)} viewBox="0 0 262 163">
      <g fillRule="nonzero" fill="none">
        <path
          fill="#002f56"
          d="M130.68 104.59L97.49 52.71l-.05 43.59L40.24 0H0v162.57h39.79l.13-96.18 56.61 91.87zM97.5 41.79h39.74l.09-.46V0H97.54l-.05 41.33z"
        />
        <path
          fill="#96D8E9"
          d="M198.66 86.86a22.48 22.48 0 00-21.47 14.57 21.41 21.41 0 0125.54-8.06c4.32 1.76 10 4.6 14.5 3.08a22.85 22.85 0 00-18.57-9.59z"
        />
        <path
          fill="#48C4E5"
          d="M243.75 106.42c0-4.87-2.65-6-8.15-8-4.08-1.42-8.71-3.02-12.08-7.42-.66-.87-1.27-1.85-1.92-2.89a23.22 23.22 0 00-5.81-7c-3.21-2.36-7.42-3.51-12.88-3.51a27.06 27.06 0 00-25 16.75 25.37 25.37 0 0143.63 4.23 8.15 8.15 0 009.11 3.64c5.37-1.15 5 3.93 13.11 5.65l-.01-1.45z"
        />
        <path
          fill="#002f56"
          d="M261.46 105.38v-.11c-.12-32.24-26.29-59.82-58.55-59.82A58.48 58.48 0 00154 71.81l-.21-.36-16.56-26H97.5l37.75 59.12-36.84 58H137l16.79-25.79 17.09 25.79h38.6l-35-55.08a7.64 7.64 0 01-.92-3.49 29.32 29.32 0 0129.33-29.33c16.22 0 18.93 9.7 22.43 14.26 6.91 9 20.71 5.06 20.71 16.8a7.7 7.7 0 0015.4-.23v-.12h.03zM261.5 113.68a14.74 14.74 0 01-1.12 8.07c-2.2 5.09-5.87 3.39-5.87 3.39s-3.16-1.54-1.24-4.49c2.13-3.29 6.34-2.91 8.23-6.97z"
        />
      </g>
    </svg>
  )
);

IconNX.displayName = 'IconNX';
