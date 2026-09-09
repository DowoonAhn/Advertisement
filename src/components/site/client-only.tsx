import { useEffect, useState, type ReactNode } from "react";

export function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  return on ? children : fallback;
}
