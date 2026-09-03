import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import SocialSection from "@/components/SocialSection";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Aegis Labs | Live on ARC Chain" },
      {
        name: "description",
        content:
          "Aegis Labs is now live on ARC Chain — the AI-powered security layer protecting the ARC ecosystem. First line of defense for Web3 — native to ARC.",
      },
      { property: "og:title", content: "About — Aegis Labs | Live on ARC Chain" },
      {
        property: "og:description",
        content:
          "⚡ Live on ARC Chain. Detect risk early. Understand threats clearly. Act with confidence.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <AboutSection />
        <MissionSection />
        <SecuritySection />
        <CTASection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
