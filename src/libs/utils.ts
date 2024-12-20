import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPercent = (part: number, total: number) => {
  return part ? +((part * 100) / total).toFixed(2) : 0;
};

export const calcNumberHandler = (num: number) => {
  return (num % 1 === 0 ? num : num.toFixed(2)).toString();
};

export const formmatNumber = (numStr: string | number) =>
  (+numStr).toLocaleString();

export const isOperator = (s: string) =>
  s === "+" || s === "-" || s === "÷" || s === "x" || s === "=" ? true : false;
