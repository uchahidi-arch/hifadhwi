"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Scale, Users, Globe, Calendar, Heart } from "lucide-react";

const actions = [
  { num: "01", icon: BookOpen, tag: "Terrain", title: "Information, éducation & sensibilisation", desc: "Nous menons des campagnes de sensibilisation sur toutes les formes de violence basée sur le genre à travers les trois îles de l'archipel.", items: ["Ateliers communautaires", "Interventions en milieu scolaire", "Campagnes médiatiques", "Formation des leaders communautaires"], href: "/nous-soutenir" },
  { num: "02", icon: Scale, tag: "Juridique", title: "Accompagnement juridique et social", desc: "HIFADHWI offre un accompagnement complet aux victimes de violence : aide juridique, soutien psychologique, orientation vers les services de santé.", items: ["Assistance juridique gratuite", "Soutien psychologique", "Hébergement d'urgence", "Réinsertion sociale"], href: "/contact" },
  { num: "03", icon: Users, tag: "Dialogue", title: "Conférences & séminaires", desc: "Nous organisons et participons à des conférences, journées de réflexion et séminaires sur les droits des femmes et la protection de l'enfance.", items: ["Journées de réflexion", "Séminaires de formation", "Tables rondes institutionnelles", "Colloques régionaux"], href: "/contact" },
  { num: "04", icon: Calendar, tag: "Mobilisation", title: "Journées thématiques", desc: "HIFADHWI célèbre activement les dates clés de la lutte pour les droits des femmes et des enfants, mobilisant la société comorienne.", items: ["8 mars — Droits des femmes", "16 jours d'activisme contre les VBG", "Journée mondiale de l'enfance", "25 novembre — Violences faites aux femmes"], href: "/nous-soutenir" },
  { num: "05", icon: Globe, tag: "International", title: "Plaidoyer international", desc: "HIFADHWI porte la voix des femmes et enfants comoriens sur la scène internationale. En 2023, déclaration officielle devant l'ONU lors de l'UPR.", items: ["Déclaration ONU UPR 2023", "Rapports alternatifs", "Plaidoyer auprès de l'État", "Réseau ONG internationales"], href: "/a-propos" },
  { num: "06", icon: Heart, tag: "Enfance", title: "Protection de l'enfance", desc: "Nous œuvrons spécifiquement pour la protection des enfants contre toutes formes d'abus, d'exploitation et de violence.", items: ["Lutte contre les mariages précoces", "Prévention des abus", "Soutien aux familles", "Sensibilisation des parents"], href: "/contact" },
];

export default function NosActions() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .na-hero {
          background: var(--primary);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
        }
        .na-hero::before {
          content: 'ACTION';
          position: absolute;
          right: -1rem; bottom: -3rem;
          font-family: 'Lora', serif;
          font-size: clamp(8rem, 16vw, 14rem);
          font-weight: 700;
          color: rgba(250, 244, 240, 0.05);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.03em;
        }
        .na-hero-inner { max-width: 1200px; margin: 0 auto; }
        .na-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          max-width: 680px;
        }
        .na-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.6);
          max-width: 520px;
          line-height: 1.8;
        }

        /* ACTION ROWS */
        .na-rows-section {
          background: var(--cream);
          padding: 6rem 3.5rem;
        }
        .na-rows-inner { max-width: 1200px; margin: 0 auto; }
        .na-row {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: 3rem;
          padding: 3rem 0;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .na-row:first-child { border-top: 1px solid var(--border); }
        .na-num {
          font-family: 'Lora', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: rgba(109, 46, 70, 0.1);
          line-height: 1;
          letter-spacing: -0.03em;
          transition: color 0.3s ease;
          padding-top: 0.25rem;
        }
        .na-row:hover .na-num { color: var(--accent); }
        .na-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(232, 149, 109, 0.1);
          border: 1px solid rgba(232, 149, 109, 0.25);
          padding: 0.2rem 0.7rem;
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 0.7rem;
        }
        .na-title {
          font-family: 'Lora', serif;
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
          transition: color 0.25s ease;
        }
        .na-row:hover .na-title { color: var(--primary); }
        .na-row { text-decoration: none; cursor: pointer; }
        .na-row-arrow {
          align-self: center;
          font-size: 1.3rem;
          color: rgba(109, 46, 70, 0.15);
          transition: transform 0.3s ease, color 0.3s ease;
          margin-left: auto;
        }
        .na-row:hover .na-row-arrow { transform: translateX(6px); color: var(--accent); }
        .na-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 1.2rem;
          max-width: 580px;
        }
        .na-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .na-item-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--dark-mid);
          background: var(--cream-dark);
          padding: 0.3rem 0.8rem;
          border-radius: 2px;
          letter-spacing: 0.03em;
        }

        /* CTA */
        .na-cta {
          background: var(--dark);
          padding: 6rem 3.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .na-cta::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(232,149,109,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .na-cta-inner { max-width: 600px; margin: 0 auto; position: relative; z-index: 1; }
        .na-cta h2 {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .na-cta p {
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          color: rgba(250, 244, 240, 0.55);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 900px) {
          .na-hero, .na-rows-section, .na-cta { padding-left: 2rem; padding-right: 2rem; }
          .na-hero { padding-top: 8rem; }
          .na-row { grid-template-columns: 70px 1fr auto; gap: 1.5rem; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="na-hero">
        <div className="na-hero-inner">
          <p className="section-eyebrow fade-in" style={{ color: "var(--accent-light)" }}>Ce que nous faisons</p>
          <h1 className="fade-in fade-in-delay-1">Six domaines<br />d&apos;action</h1>
          <p className="fade-in fade-in-delay-2">
            Une protection complète des femmes et des enfants aux Comores — de la sensibilisation au plaidoyer international.
          </p>
        </div>
      </section>

      {/* ACTION ROWS */}
      <section className="na-rows-section">
        <div className="na-rows-inner">
          {actions.map((a, i) => (
            <Link key={i} href={a.href} className={`na-row fade-in${i > 0 ? ` fade-in-delay-${Math.min(i, 4)}` : ""}`}>
              <div className="na-num">{a.num}</div>
              <div>
                <span className="na-tag">{a.tag}</span>
                <h2 className="na-title">{a.title}</h2>
                <p className="na-desc">{a.desc}</p>
                <div className="na-items">
                  {a.items.map((item, j) => (
                    <span key={j} className="na-item-tag">{item}</span>
                  ))}
                </div>
              </div>
              <span className="na-row-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="na-cta">
        <div className="na-cta-inner fade-in">
          <p className="section-eyebrow" style={{ color: "var(--accent)", textAlign: "center" }}>Agir ensemble</p>
          <h2><Link href="/nous-soutenir" style={{ color: "inherit", textDecoration: "none" }}>Soutenez nos actions</Link></h2>
          <p>
            Chaque contribution permet de continuer d&apos;accompagner des femmes et des enfants vers la justice et la sécurité.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/nous-soutenir" className="btn-accent">Faire un don</Link>
            <Link href="/contact" className="btn-ghost" style={{ color: "rgba(250,244,240,0.7)", borderColor: "rgba(250,244,240,0.2)" }}>Nous contacter <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
