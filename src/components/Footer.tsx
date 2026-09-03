import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/aeigis-logo.jpg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "X / Twitter", href: "https://x.com/AegisLabsArc" },
  { label: "GitHub", href: "https://github.com/AegisLabs-Security" },
  { label: "Whitepaper", href: "https://aegislabs.gitbook.io/aegis-labs-whitepaper" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Aegis Labs" className="h-10 w-10 rounded-lg" />
              <span className="text-lg font-bold tracking-wider">
                AEGIS <span className="neon-text">LABS</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scan Before You Trust. Protect Before You Connect. The AI-powered security layer — now
              live on ARC Chain.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">
              Community
            </h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">
              Launch
            </h4>
            <ul className="space-y-2">
              <li>
                <div className="text-sm text-neon font-medium">⚡ ARC Chain — Live</div>
              </li>
              <li>
                <a
                  href="https://aegislabs.gitbook.io/aegis-labs-whitepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://radardex.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  $AEGIS Token
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Aegis Labs — Live on ARC Chain. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Scan Before You Trust. Protect Before You Connect.
          </p>
        </div>
      </div>
    </footer>
  );
}
