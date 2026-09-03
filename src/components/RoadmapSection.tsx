import ScrollReveal from "./ScrollReveal";

const phases = [
  {
    phase: "Phase 1",
    title: "🚀 ARC Chain Mainnet Launch",
    desc: "Official deployment of Aegis Shield on ARC Chain mainnet. $AEGIS token launch, native smart contract scanning, and real-time threat detection fully operational.",
    status: "live",
  },
  {
    phase: "Phase 2",
    title: "AI Threat Intelligence Layer",
    desc: "Neural network-based threat detection and behavioral analysis models deployed across the ARC ecosystem.",
    status: "active",
  },
  {
    phase: "Phase 3",
    title: "ARC Ecosystem Integration",
    desc: "Full security integration with ARC-native DeFi protocols, dApps, and ecosystem partners on ARC Chain.",
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Multi-Chain Expansion",
    desc: "Cross-chain security bridge connecting ARC Chain security infrastructure to Ethereum, Arbitrum, Base, and emerging L2 networks.",
    status: "upcoming",
  },
  {
    phase: "Phase 5",
    title: "Quantum-Resistant Cryptography",
    desc: "Post-quantum lattice-based cryptographic defense systems for the ARC network and beyond.",
    status: "upcoming",
  },
  {
    phase: "Phase 6",
    title: "Institutional Security Suite",
    desc: "Enterprise-grade compliance, auditing, and institutional-grade security tools for ARC enterprise clients.",
    status: "upcoming",
  },
  {
    phase: "Phase 7",
    title: "Decentralized Defense Mesh",
    desc: "Decentralized security mesh network protecting the entire multi-chain Web3 ecosystem anchored on ARC Chain.",
    status: "upcoming",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 section-glow">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-neon uppercase mb-3">Roadmap</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Development Timeline</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/20 to-transparent" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <ScrollReveal key={p.phase} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full z-10 ${
                      p.status === "live"
                        ? "bg-green-400 shadow-lg shadow-green-400/60 animate-pulse"
                        : p.status === "active"
                          ? "bg-neon shadow-lg shadow-neon/50"
                          : "bg-muted"
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div
                      className={`glow-card rounded-2xl p-6 relative ${
                        p.status === "live"
                          ? "border border-green-400/50 shadow-lg shadow-green-400/10"
                          : p.status === "active"
                            ? "border border-neon/40"
                            : ""
                      }`}
                    >
                      <div
                        className="flex items-center gap-2 mb-1"
                        style={
                          i % 2 === 0
                            ? { justifyContent: "flex-end" }
                            : { justifyContent: "flex-start" }
                        }
                      >
                        <span className="text-xs text-neon font-mono tracking-wider">
                          {p.phase}
                        </span>
                        {p.status === "live" && (
                          <span className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-400 text-[10px] font-bold tracking-wider uppercase border border-green-400/40">
                            ● Live
                          </span>
                        )}
                        {p.status === "active" && (
                          <span className="px-2 py-0.5 rounded-full bg-neon/20 text-neon text-[10px] font-bold tracking-wider uppercase border border-neon/40">
                            ● In Progress
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-lg font-semibold mt-2 ${p.status === "live" ? "text-green-400" : p.status === "active" ? "text-neon" : "text-foreground"}`}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
