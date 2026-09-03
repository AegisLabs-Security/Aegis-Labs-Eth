import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TechnologySection from "@/components/TechnologySection";
import EcosystemSection from "@/components/EcosystemSection";
import DashboardSection from "@/components/DashboardSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import SocialSection from "@/components/SocialSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aegis Labs — Live on ARC Chain | Security Layer for Web3" },
      {
        name: "description",
        content:
          "Aegis Shield is now live on ARC Chain. AI-powered security layer protecting users, builders, and protocols from on-chain threats. Smart contract scanning, wallet risk intelligence, and real-time threat monitoring — native to ARC.",
      },
      { property: "og:title", content: "Aegis Labs — Live on ARC Chain | AI Security Layer" },
      {
        property: "og:description",
        content:
          "⚡ Live on ARC Chain — Scan Before You Trust. Protect Before You Connect. AI-powered blockchain defense native to ARC ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aegis Labs — Live on ARC Chain | Security Layer" },
      {
        name: "twitter:description",
        content: "⚡ Live on ARC Chain. Scan Before You Trust. Protect Before You Connect.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustSection />
        <TechnologySection />
        <EcosystemSection />
        <DashboardSection />
        <RoadmapSection />
        <CTASection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
