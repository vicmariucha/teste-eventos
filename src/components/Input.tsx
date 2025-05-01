import { Minus, Plus } from "lucide-react";
import React from "react";

type InputProps = {
  label: string;
  error?: string;
  isStepper?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  className,
  isStepper,
  onIncrement,
  onDecrement,
  ...props
}: InputProps) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>

    {isStepper ? (
      <div className="flex items-center justify-between gap-2 bg-white border border-gray-300 rounded-md px-3 py-2 dark:bg-gray-700 dark:border-gray-600 w-full">
        <button
          type="button"
          onClick={onDecrement}
          className="text-purple-500 hover:text-purple-700 dark:text-white  transition"
        >
          <Minus size={20} />
        </button>

        <input
          {...props}
          className={`w-12 text-center bg-transparent outline-none text-base font-medium dark:text-white ${className || ''}`}
        />

        <button
          type="button"
          onClick={onIncrement}
          className="text-purple-500 hover:text-purple-700 dark:text-white  transition"
        >
          <Plus size={20} />
        </button>
      </div>
    ) : (
      <input
        {...props}
        className={`border border-gray-300 p-2 rounded w-full dark:bg-gray-700 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all ${className || ''}`}
      />
    )}

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
