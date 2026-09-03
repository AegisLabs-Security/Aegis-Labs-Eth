import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/aeigis-hero-bg.jpg";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold neon-text">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{label}</div>
    </div>
  );
}

const metrics = [
  { end: 1, suffix: "", label: "ARC Chain Live" },
  { end: 99, suffix: ".99%", label: "System Uptime" },
  { end: 24, suffix: "/7", label: "AI Monitoring" },
  { end: 50, suffix: "M+", label: "TX Capacity / Day" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-4 animate-fade-up border border-neon/50"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
          <span className="text-xs tracking-[0.2em] text-neon uppercase font-bold">
            ⚡ OFFICIAL LAUNCH — LIVE ON ARC CHAIN
          </span>
        </div>

        <div
          className="inline-flex items-center gap-2 glass-panel rounded-full px-5 py-2 mb-8 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
          <span className="text-xs tracking-wider text-muted-foreground uppercase">
            Aegis Labs — AI-Powered Web3 Security
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Launching on <span className="neon-text">ARC Chain</span>
          <br />
          Security. Activated.
        </h1>

        <p
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Aegis Labs is now live on ARC Chain — the AI-powered security layer protecting every
          transaction, contract, and user in the ARC ecosystem from on-chain threats before they
          become real losses.{" "}
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link to="/about" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider">
            Learn More
          </Link>
          <Link
            to="/contact"
            className="neon-btn-outline rounded-xl px-8 py-4 text-sm tracking-wider"
          >
            Get In Touch
          </Link>
        </div>

        <div
          className="mt-10 glass-panel rounded-xl p-6 max-w-2xl mx-auto animate-fade-up border border-neon/40"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="text-xs tracking-[0.2em] text-neon uppercase mb-1 font-bold">
            $AEGIS — ARC CHAIN CONTRACT
          </div>
          <div className="bg-background/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground break-all select-all">
            0x47d81c049282bf577ce35d3994a6a916a9b761cc
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://radardex.pro/#0x47D81c049282Bf577cE35D3994a6A916A9b761CC"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn rounded-xl px-6 py-3 text-sm tracking-wider"
            >
              Buy $AEGIS
            </a>
            <a
              href="https://radardex.pro/#0x47D81c049282Bf577cE35D3994a6A916A9b761CC"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn-outline rounded-xl px-6 py-3 text-sm tracking-wider"
            >
              View Chart
            </a>
          </div>
        </div>

        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="glass-panel rounded-xl p-4">
              <Counter {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
