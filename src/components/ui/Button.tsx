"use client";

import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "white"
    | "outline-light"
    | "primary"
    | "outline";
  className?: string;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium
    rounded-full
    transition-all
    duration-200
    whitespace-nowrap
  `;

  const variantStyles: Record<string, string> = {
    primary: `
      bg-[#003F38]
      text-white
      hover:bg-[#002d2a]
    `,

    white: `
      bg-white
      shadow-md
      hover:bg-gray-100
    `,

    "outline-light": `
      border border-white
      text-white
      hover:bg-white/10
    `,

    outline: `
      border border-[#003F38]
      text-[#003F38]
      hover:bg-[#003F38]/10
    `,
  };

  return (
    <button
      {...props}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
