"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}=+*^?#$%&";

type DecodeTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

export default function DecodeText({ text, className = "", speed = 38 }: DecodeTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [output, setOutput] = useState(() => text.replace(/\S/g, " "));

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = 26;

    const id = setInterval(() => {
      frame++;
      const reveal = (frame / totalFrames) * text.length;

      setOutput(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < reveal) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        setOutput(text);
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {output}
    </span>
  );
}
