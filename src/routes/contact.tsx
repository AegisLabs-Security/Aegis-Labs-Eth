import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import CTASection from "@/components/CTASection";
import SocialSection from "@/components/SocialSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MessageSquare, Code2, FileText, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Aegis Labs" },
      { name: "description", content: "Get in touch with Aegis Labs. Partner with us to secure the future of Web3." },
      { property: "og:title", content: "Contact — Aegis Labs" },
      { property: "og:description", content: "Protect The Future of Web3. Contact Aegis Labs." },
    ],
  }),
});

const contactOptions = [
  { icon: MessageSquare, label: "X / Twitter", href: "https://x.com/AegisLabsEth", desc: "Follow us for real-time updates, threat alerts, and security insights." },
  { icon: Mail, label: "Telegram", href: "https://t.me/AegisLabsEth", desc: "Join the community for discussions, support, and early access." },
  { icon: Code2, label: "GitHub", href: "https://github.com/AegisLabs-Security", desc: "Explore our open-source tools, SDKs, and security infrastructure." },
  { icon: FileText, label: "Whitepaper", href: "/Aegis Labs Whitepaper Website Version V1.pdf", desc: "Read the full Aegis Labs whitepaper and security architecture." },
];

const partnershipAreas = [
  { icon: Shield, title: "Protocol Security", desc: "Integrate Aegis Shield into your DeFi protocol for real-time security monitoring." },
  { icon: Users, title: "Ecosystem Partnership", desc: "Join the Aegis ecosystem to provide security services to your users." },
  { icon: Code2, title: "Developer Integration", desc: "Access APIs, SDKs, and security feeds to build secure Web3 applications." },
];

function Contact() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10 pt-28 pb-20">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Contact</p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Protect The Future <span className="neon-text">Of Web3</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Secure your protocol, infrastructure, smart contracts, and users with next-generation AI-powered blockchain defense systems.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactOptions.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card rounded-2xl p-6 flex items-start gap-4 group block"
                >
                  <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center shrink-0 group-hover:bg-neon/20 transition-colors">
                    <item.icon className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-neon transition-colors">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest text-neon uppercase mb-3">Partnership</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Work With Us</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {partnershipAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <div className="glow-card rounded-2xl p-6 text-center h-full">
                  <div className="h-12 w-12 rounded-xl bg-neon/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <a href="/Aegis Labs Whitepaper Website Version V1.pdf" target="_blank" className="neon-btn rounded-xl px-8 py-4 text-sm tracking-wider inline-block">
                Download Whitepaper
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}