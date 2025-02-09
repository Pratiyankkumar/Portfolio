"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";
import type React from "react"; // Added import for React

interface NaturalHighlightProps {
  children: React.ReactNode;
  action?: "highlight" | "circle";
  color?: string;
}

export function NaturalHighlight({
  children,
  action = "highlight",
  color = "#ffd1dc", // default pink
}: NaturalHighlightProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (elementRef.current && !annotationRef.current) {
      const annotation = annotate(elementRef.current, {
        type: action === "circle" ? "circle" : "highlight",
        color: color,
        multiline: true,
        padding: action === "circle" ? 8 : 2,
        iterations: 2, // More iterations = more sketchy
        animationDuration: 500,
      });

      annotationRef.current = annotation;
      annotation.show();
    }

    return () => {
      annotationRef.current?.remove();
    };
  }, [action, color]);

  return (
    <span ref={elementRef} className="inline-block relative">
      {children}
    </span>
  );
}
