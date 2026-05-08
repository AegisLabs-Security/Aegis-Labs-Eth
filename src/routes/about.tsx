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
      { title: "About — Aegis Labs" },
      { name: "description", content: "The First Line of Defense for Web3. Aegis Shield makes Web3 safer by turning complex security data into clear, actionable protection." },
      { property: "og:title", content: "About — Aegis Labs" },
      { property: "og:description", content: "Detect risk early. Understand threats clearly. Act with confidence." },
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