import Link from "next/link"
import { Users, HandHeart } from "lucide-react"

const options = [
  {
    icon: HandHeart,
    eyebrow: "Adhésion",
    title: "Rejoindre l'association",
    desc: "Devenez membre officiel de HIFADHWI. En adhérant, vous portez nos valeurs, renforcez notre légitimité et participez aux décisions qui façonnent notre action.",
    cta: "Devenir membre",
    href: "/contact",
  },
  {
    icon: Users,
    eyebrow: "Bénévolat",
    title: "Devenir bénévole",
    desc: "Juriste, psychologue, formateur, communicant — votre expertise a sa place sur le terrain. Rejoignez notre équipe aux Comores ou à distance.",
    cta: "Candidater",
    href: "/contact",
  },
]

export default function JoinSection() {
  return (
    <section style={{ background: "#F5EFE8", padding: "7rem 3.5rem" }}>
      <style>{`
        .join-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .join-header {
          margin-bottom: 4rem;
        }
        .join-eyebrow {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8B3A3A;
          margin-bottom: 0.75rem;
        }
        .join-title {
          font-family: 'Lora', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #1A1008;
          line-height: 1.2;
          letter-spacing: -0.015em;
        }
        .join-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
          background: #C9B99A;
          border: 1.5px solid #C9B99A;
        }
        .join-card {
          background: #F5EFE8;
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
        }
        .join-card-icon {
          width: 52px;
          height: 52px;
          border: 1.5px solid #C9B99A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .join-card-eyebrow {
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8B3A3A;
          margin-bottom: 0.6rem;
        }
        .join-card-title {
          font-family: 'Lora', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1A1008;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .join-card-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: #5C4033;
          line-height: 1.8;
          flex: 1;
          margin-bottom: 2.5rem;
        }
        .join-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1A1008;
          text-decoration: none;
          border-bottom: 1.5px solid #8B3A3A;
          padding-bottom: 0.2rem;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
        }
        .join-card-cta:hover { color: #8B3A3A; }
        .join-card-cta::after {
          content: '→';
          transition: transform 0.2s;
        }
        .join-card-cta:hover::after { transform: translateX(4px); }

        @media (max-width: 700px) {
          .join-grid { grid-template-columns: 1fr; }
          section[data-join] { padding: 5rem 1.5rem; }
          .join-card { padding: 2.5rem 2rem; }
        }
      `}</style>

      <div className="join-inner">
        <div className="join-header">
          <p className="join-eyebrow">Rejoindre HIFADHWI</p>
          <h2 className="join-title">Engagez-vous<br />à nos côtés</h2>
        </div>

        <div className="join-grid">
          {options.map((opt, i) => (
            <div key={i} className="join-card">
              <div className="join-card-icon">
                <opt.icon size={22} color="#8B3A3A" strokeWidth={1.5} />
              </div>
              <p className="join-card-eyebrow">{opt.eyebrow}</p>
              <h3 className="join-card-title">{opt.title}</h3>
              <p className="join-card-desc">{opt.desc}</p>
              <Link href={opt.href} className="join-card-cta">
                {opt.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
