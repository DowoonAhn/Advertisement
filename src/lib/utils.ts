import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function krw(n: number) {
  const rounded = Math.round(n);
  const abs = Math.abs(rounded).toLocaleString("ko-KR");
  return `${rounded < 0 ? "-" : ""}₩${abs}`;
}

export function signedKrw(n: number) {
  const rounded = Math.round(n);
  const abs = Math.abs(rounded).toLocaleString("ko-KR");
  if (rounded > 0) return `+₩${abs}`;
  if (rounded < 0) return `-₩${abs}`;
  return "₩0";
}
