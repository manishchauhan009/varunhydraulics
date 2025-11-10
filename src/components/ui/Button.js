import React from "react"
import clsx from "clsx" 

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-500",
    secondary:
      "bg-black hover:bg-gray-800 text-white focus:ring-yellow-400",
    outline:
      "border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800",
    ghost:
      "bg-transparent text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",
    danger:
      "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-lg",
  }

  return (
    <Component
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
