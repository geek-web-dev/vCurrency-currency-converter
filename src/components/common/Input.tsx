import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-[--t] captialize">
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          className={`px-4 py-2 border rounded-md focus:ring-2 dark:bg-[--surface-p] text-[--text-p] focus:ring-blue-500 focus:outline-none placeholder:text-[--text-t] ${
            error ? "border-red-500" : "border-[--border-s]"
          } ${className}`}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
