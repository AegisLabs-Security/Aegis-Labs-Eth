import aboutImg from "@/assets/aegis-about.jpeg";
import ScrollReveal from "./ScrollReveal";
import { Brain, Search, ShieldCheck, Lock, Globe, Layers } from "lucide-react";

const cards = [
  { icon: Brain, label: "AI Security Engine" },
  { icon: Search, label: "DeFi Threat Intelligence" },
  { icon: ShieldCheck, label: "Smart Contract Scanner" },
  { icon: Lock, label: "Quantum Cryptography" },
  { icon: Globe, label: "Cross-Chain Monitoring" },
  { icon: Layers, label: "Autonomous Defense Layer" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="About Aegis Labs"
                className="rounded-2xl w-full shadow-2xl shadow-neon/10"
              />
              <div className="absolute inset-0 rounded-2xl border border-neon/20" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-xs tracking-widest text-neon uppercase mb-3">About Aegis Labs</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Live on ARC Chain — The Security Layer is Active
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aegis Labs is now live on ARC Chain — deploying the most advanced AI-powered
                security infrastructure to protect ARC-native DeFi protocols, smart contracts,
                dApps, and every user in the ARC ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our platform combines AI-driven threat intelligence, real-time on-chain monitoring
                across the ARC network, quantum-resistant cryptography, and autonomous incident
                response to create an impenetrable security foundation for the ARC Chain
                decentralized economy.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cards.map((c, i) => (
                <ScrollReveal key={c.label} delay={i * 0.05}>
                  <div className="glow-card rounded-xl p-3 text-center">
                    <c.icon className="h-5 w-5 text-neon mx-auto mb-2" />
                    <span className="text-xs text-surface-foreground font-medium">{c.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
