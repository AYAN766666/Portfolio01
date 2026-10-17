"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Line = { kind: "cmd" | "out"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "Mohammad Ayan — AI Agent Specialist & Full-Stack Developer." },
  { kind: "cmd", text: "ayan help" },
  { kind: "out", text: "I turn slow, manual processes into intelligent AI systems." },
  { kind: "out", text: "→ Agents · Automation · Fast Websites · Secure Infra" },
  { kind: "cmd", text: "ayan status" },
  { kind: "out", text: "Available for work. Let's build something." },
];

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      if (li >= SCRIPT.length) return;
      const line = SCRIPT[li];

      if (ci < line.text.length) {
        ci += 1;
        setLineIdx(li);
        setCharIdx(ci);
        timer = setTimeout(tick, line.kind === "cmd" ? 52 : 18);
      } else {
        timer = setTimeout(() => {
          li += 1;
          ci = 0;
          setLineIdx(li);
          setCharIdx(0);
          tick();
        }, 400);
      }
    };

    tick();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] shadow-[0_20px_60px_-20px_rgba(198,255,46,0.25)]"
    >
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff2ea6]/80"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-[#c6ff2e]/80"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-[#19f0d0]/80"></span>
        <span className="ml-2 font-mono text-[10px] text-gray-500">ayan — zsh</span>
      </div>

      <div className="min-h-[168px] space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {SCRIPT.slice(0, lineIdx).map((line, i) => (
          <p key={i} className="break-words">
            {line.kind === "cmd" ? (
              <>
                <span className="text-[#c6ff2e]">➜</span>{" "}
                <span className="text-[#19f0d0]">{line.text}</span>
              </>
            ) : (
              <span className="text-gray-400">{line.text}</span>
            )}
          </p>
        ))}

        {lineIdx < SCRIPT.length && (
          <p className="break-words">
            {SCRIPT[lineIdx].kind === "cmd" ? (
              <>
                <span className="text-[#c6ff2e]">➜</span>{" "}
                <span className="text-[#19f0d0]">
                  {SCRIPT[lineIdx].text.slice(0, charIdx)}
                </span>
              </>
            ) : (
              <span className="text-gray-400">{SCRIPT[lineIdx].text.slice(0, charIdx)}</span>
            )}
            <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-[#c6ff2e]"></span>
          </p>
        )}
      </div>
    </div>
  );
}
