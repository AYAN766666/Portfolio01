type AuroraProps = {
  className?: string;
  intensity?: "soft" | "bold";
};

const BLOBS = [
  { color: "#c6ff2e", x: "-8%", y: "-10%", size: "46rem", delay: "0s" },
  { color: "#ff2ea6", x: "62%", y: "-6%", size: "40rem", delay: "-4s" },
  { color: "#6d5cff", x: "18%", y: "52%", size: "44rem", delay: "-8s" },
  { color: "#19f0d0", x: "70%", y: "60%", size: "34rem", delay: "-12s" },
];

export default function Aurora({ className = "", intensity = "soft" }: AuroraProps) {
  const opacity = intensity === "bold" ? 0.28 : 0.16;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? "animate-aurora" : "animate-aurora-slow"}
          style={{
            position: "absolute",
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            borderRadius: "9999px",
            background: `radial-gradient(circle at center, ${blob.color}${Math.round(
              opacity * 255
            )
              .toString(16)
              .padStart(2, "0")} 0%, transparent 62%)`,
            filter: "blur(90px)",
            animationDelay: blob.delay,
          }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-[#050810]/40"></div>
    </div>
  );
}
