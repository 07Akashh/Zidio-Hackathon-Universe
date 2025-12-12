"use client";

import { SVGProps } from "react";

interface ZidioLogoProps extends SVGProps<SVGSVGElement> {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 24, text: 14 },
  md: { icon: 32, text: 16 },
  lg: { icon: 40, text: 20 },
};

export function ZidioLogo({
  showText = true,
  size = "md",
  className,
  ...props
}: ZidioLogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient
            id="zidio-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="8" fill="url(#zidio-gradient)" />
        <path
          d="M12 12H28V16H18.5L28 28V32H12V28H21.5L12 16V12Z"
          fill="white"
          fillRule="evenodd"
        />
      </svg>
      {showText && (
        <span
          className="font-semibold text-foreground"
          style={{ fontSize: text }}
        >
          Zidio
        </span>
      )}
    </div>
  );
}

export function ZidioLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="zidio-icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="8" fill="url(#zidio-icon-gradient)" />
      <path
        d="M12 12H28V16H18.5L28 28V32H12V28H21.5L12 16V12Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}
