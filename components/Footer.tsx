import Image from "next/image";
import Link from "next/link";

const actions = [
  { eyebrow: "Faire un geste", title: "Don financier", href: "/soutien" },
  { eyebrow: "Donner de son temps", title: "Bénévolat", href: "/contact" },
  { eyebrow: "Travailler ensemble", title: "Partenariat", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1A0A05", color: "#F5EFE8" }}>
      <style>{`
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 6rem 3.5rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }
        .footer-social-link {
          color: rgba(245, 239, 232, 0.4);
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .footer-social-link:hover { color: #F5EFE8; }
        .footer-action-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(245, 239, 232, 0.1);
          gap: 0.25rem;
        }
        .footer-action-link:first-of-type {
          border-top: 1px solid rgba(245, 239, 232, 0.1);
        }
        .footer-action-eyebrow {
          font-family: 'Nunito', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245, 239, 232, 0.32);
        }
        .footer-action-title {
          font-family: 'Lora', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F5EFE8;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-action-arrow {
          font-size: 1rem;
          color: rgba(245, 239, 232, 0.25);
          transition: transform 0.2s, color 0.2s;
        }
        .footer-action-link:hover .footer-action-title { color: #F5EFE8; }
        .footer-action-link:hover .footer-action-arrow {
          transform: translateX(5px);
          color: #C0392B;
        }
        .footer-copyright {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.5rem 3.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(245, 239, 232, 0.08);
          font-family: 'Nunito', sans-serif;
          font-size: 0.75rem;
          color: rgba(245, 239, 232, 0.22);
        }
        @media (max-width: 700px) {
          .footer-inner {
            grid-template-columns: 1fr;
            padding: 4rem 1.5rem 3rem;
            gap: 3rem;
          }
          .footer-copyright {
            flex-direction: column;
            gap: 0.4rem;
            text-align: center;
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Left — identity + socials */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Image
              src="/logo.png"
              alt="HIFADHWI"
              width={42}
              height={42}
              style={{ objectFit: "contain", opacity: 0.88, flexShrink: 0 }}
            />
            <div>
              <div style={{
                fontFamily: "'Lora', serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#F5EFE8",
              }}>
                HIFADHWI
              </div>
              <div style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(245, 239, 232, 0.38)",
                marginTop: "0.25rem",
                lineHeight: 1.45,
              }}>
                Protection des femmes et enfants des Comores
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.1rem" }}>
            <a
              href="https://www.facebook.com/hifadhwicomores/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ong.hifadhwi"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — "Rejoignez le combat" */}
        <div>
          <div style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(1.3rem, 2vw, 1.65rem)",
            fontWeight: 700,
            color: "#F5EFE8",
            lineHeight: 1.2,
            marginBottom: "2.25rem",
          }}>
            Rejoignez<br />le combat
          </div>

          <div>
            {actions.map((action) => (
              <Link key={action.title} href={action.href} className="footer-action-link">
                <span className="footer-action-eyebrow">{action.eyebrow}</span>
                <span className="footer-action-title">
                  {action.title}
                  <span className="footer-action-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <span>© 2025 HIFADHWI — Moroni, Comores</span>
        <span>
          Site réalisé par{" "}
          <span style={{ color: "rgba(245, 239, 232, 0.45)", fontWeight: 600 }}>U-DATA</span>
        </span>
      </div>
    </footer>
  );
}
