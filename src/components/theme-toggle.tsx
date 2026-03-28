"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useLayoutEffect, useState } from "react";

function applyThemeClass(nextDark: boolean) {
  document.documentElement.classList.toggle("dark", nextDark);
  try {
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  const toggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !document.documentElement.classList.contains("dark");

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      applyThemeClass(nextDark);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    if (typeof doc.startViewTransition !== "function") {
      applyThemeClass(nextDark);
      return;
    }

    doc.startViewTransition(() => {
      applyThemeClass(nextDark);
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-5 top-5 z-[2147483647] flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-[opacity,box-shadow,border-color,background-color] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-md dark:border-neutral-600 dark:bg-background/90 motion-reduce:transition-opacity md:right-8 md:top-8"
    >
      <Sun
        className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
        aria-hidden
      />
      <Moon
        className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
        aria-hidden
      />
    </button>
  );
}
