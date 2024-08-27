"use client";

import { ReactNode, forwardRef, useMemo } from "react";
import CircleLoader from "react-spinners/ClipLoader";
import { twMerge } from "tailwind-merge";

const colors = ["primary", "secondary", "success", "danger"] as const;
const scales = ["sm", "md", "lg"] as const;
const variants = ["solid", "outline", "ghost", "link"] as const;

type ButtonProps = JSX.IntrinsicElements["button"] & {
  children: ReactNode;
  color?: (typeof colors)[number];
  scale?: (typeof scales)[number];
  isFullWidth?: boolean;
  isLoading?: boolean;
  variant?: (typeof variants)[number];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & (
    | {
        isLoading: boolean;
        spinnerPlacement?: "start" | "end";
      }
    | {
        isLoading?: never;
        spinnerPlacement?: never;
      }
  );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      scale = "md",
      isFullWidth,
      spinnerPlacement = "end",
      isLoading,
      disabled,
      variant = "solid",
      color = "primary",
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const colorStyles = useMemo(() => {
      const styles = {
        primary: {
          solid: "text-white bg-primary p-3 hover:bg-opacity-90 lg:bg-[]",
          outline:
            "text-primary border border-primary hover:bg-primary hover:text-white",
          ghost: "text-primary",
          link: "text-primary hover:underline focus:underline",
        },
        secondary: {
          solid: "text-white bg-secondary",
          outline:
            "text-secondary border border-secondary hover:bg-secondary hover:text-white",
          ghost: "text-secondary hover:bg-opacity-20",
          link: "text-secondary hover:underline focus:underline",
        },
        success: {
          solid: "text-white bg-green-500",
          outline:
            "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
          ghost: "text-green-500 hover:bg-opacity-20",
          link: "text-green-500 hover:underline focus:underline",
        },
        danger: {
          solid: "text-white bg-red-500",
          outline:
            "text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",
          ghost: "text-red-500 hover:bg-opacity-20",
          link: "text-red-500 hover:underline focus:underline",
        },
      };

      return styles[color][variant];
    }, [color, variant]);

    const scaleStyles = useMemo(() => {
      const styles = {
        sm: "px-3 py-2 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      };

      return styles[scale];
    }, [scale]);

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
        className={twMerge(
          "inline-flex items-center justify-center font-inter font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 ease-in-out h-12",
          isFullWidth && "w-full",
          colorStyles,
          scaleStyles,
          className
        )}
      >
        {isLoading && spinnerPlacement === "start" && (
          <CircleLoader size={18} color="currentColor" className="mr-1" />
        )}
        {leftIcon && !isLoading && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && !isLoading && <span className="ml-1">{rightIcon}</span>}
        {isLoading && spinnerPlacement === "end" && (
          <CircleLoader size={18} color="currentColor" className="ml-1" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
