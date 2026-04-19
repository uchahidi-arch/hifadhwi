"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar } from "lucide-react";

const articles = [
  { date: "Février 2023", tag: "Plaidoyer international", title: "HIFADHWI à l'ONU : déclaration lors de l'UPR des Comores", desc: "Notre organisation a présenté une déclaration officielle devant l'Examen Périodique Universel des Nations Unies, portant nos recommandations sur la protection des femmes et des enfants.", featured: true },
  { date: "25 Novembre 2024", tag: "Activisme", title: "16 jours d'activisme contre les VBG — édition 2024", desc: "Retour sur nos actions de sensibilisation menées à travers les trois îles des Comores lors des 16 jours d'activisme contre les violences basées sur le genre." },
  { date: "8 Mars 2024", tag: "Journée internationale", title: "Journée internationale des droits des femmes 2024", desc: "HIFADHWI a organisé une journée de célébration et de réflexion autour des droits des femmes comoriennes, réunissant plus de 200 participantes à Moroni." },
  { date: "Octobre 2024", tag: "Formation", title: "Formation des acteurs judiciaires sur les VBG", desc: "Atelier de formation destiné aux officiers de police judiciaire, magistrats et agents pénitentiaires sur la prise en charge des victimes de violence." },
  { date: "Juin 2024", tag: "Protection enfance", title: "Campagne contre les mariages précoces à Anjouan", desc: "Déploiement d'une campagne de sensibilisation dans 12 villages d'Anjouan sur les risques et les conséquences des mariages précoces." },
  { date: "Mars 2024", tag: "Partenariat", title: "Nouveau partenariat avec la Délégation des droits de l'homme", desc: "HIFADHWI renforce sa collaboration avec la Délégation des droits de l'homme pour améliorer la coordination des signalements de VBG aux Comores." },
];

export default function Actualites() {
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

  const featured = articles.find(a => a.featured)!;
  const rest = articles.filter(a => !a.featured);

  return (
    <>
      <style>{`
        .ac-hero {
          background: var(--dark);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
        }
        .ac-hero::before {
          content: 'NEWS';
          position: absolute;
          right: -1rem; bottom: -2rem;
          font-family: 'Lora', serif;
          font-size: clamp(8rem, 16vw, 14rem);
          font-weight: 700;
          color: rgba(250, 244, 240, 0.03);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.03em;
        }
        .ac-hero-inner { max-width: 1200px; margin: 0 auto; }
        .ac-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          max-width: 660px;
        }
        .ac-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.6);
          max-width: 520px;
          line-height: 1.8;
        }

        /* FEATURED */
        .ac-featured-section {
          background: var(--cream);
          padding: 6rem 3.5rem 0;
        }
        .ac-featured-inner { max-width: 1200px; margin: 0 auto; }
        .ac-featured-card {
          background: var(--primary);
          border-radius: 2px;
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .ac-featured-card::before {
          content: '"';
          position: absolute;
          right: 2rem; top: -1rem;
          font-family: 'Lora', serif;
          font-size: 12rem;
          color: rgba(250,244,240,0.04);
          line-height: 1;
          pointer-events: none;
        }
        .ac-feat-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-light);
          background: rgba(232,149,109,0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .ac-feat-title {
          font-family: 'Lora', serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.3;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .ac-feat-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          color: rgba(250,244,240,0.65);
          line-height: 1.75;
          margin-bottom: 1.5rem;
          max-width: 560px;
        }
        .ac-feat-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          color: rgba(250,244,240,0.4);
        }
        .ac-feat-cta {
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cream);
          background: rgba(250,244,240,0.1);
          border: 1px solid rgba(250,244,240,0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.25s ease;
          white-space: nowrap;
          text-decoration: none;
          display: inline-block;
        }
        .ac-feat-cta:hover { background: rgba(232,149,109,0.2); border-color: rgba(232,149,109,0.4); }

        /* ARTICLES LIST */
        .ac-grid-section {
          background: var(--cream);
          padding: 4rem 3.5rem 7rem;
        }
        .ac-grid-inner { max-width: 1200px; margin: 0 auto; }
        .ac-grid-header { margin-bottom: 3rem; padding-top: 3rem; border-top: 1px solid var(--border); }
        .ac-list { display: flex; flex-direction: column; }
        .ac-list-item {
          display: grid;
          grid-template-columns: 160px 1fr auto;
          gap: 3rem;
          align-items: start;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          position: relative;
        }
        .ac-list-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--accent);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s ease;
        }
        .ac-list-item:hover::before { transform: scaleY(1); }
        .ac-list-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.15rem;
        }
        .ac-card-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .ac-card-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.8rem;
          color: var(--muted);
        }
        .ac-card-title {
          font-family: 'Lora', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--dark);
          line-height: 1.35;
          margin-bottom: 0.6rem;
          transition: color 0.2s ease;
        }
        .ac-list-item:hover .ac-card-title { color: var(--primary); }
        .ac-card-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.65;
        }
        .ac-list-arrow {
          font-size: 1.1rem;
          color: rgba(109,46,70,0.2);
          padding-top: 0.25rem;
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .ac-list-item:hover .ac-list-arrow { transform: translateX(5px); color: var(--accent); }

        @media (max-width: 900px) {
          .ac-hero, .ac-featured-section, .ac-grid-section { padding-left: 2rem; padding-right: 2rem; }
          .ac-hero { padding-top: 8rem; }
          .ac-featured-card { grid-template-columns: 1fr; gap: 2rem; padding: 2rem; }
          .ac-list-item { grid-template-columns: 1fr auto; gap: 1.5rem; }
          .ac-list-meta { flex-direction: row; align-items: center; gap: 1rem; padding-top: 0; grid-column: 1 / -1; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="ac-hero">
        <div className="ac-hero-inner">
          <p className="section-eyebrow fade-in">Nos nouvelles</p>
          <h1 className="fade-in fade-in-delay-1">Actualités</h1>
          <p className="fade-in fade-in-delay-2">
            Suivez les actions, campagnes et événements de HIFADHWI à travers les Comores et sur la scène internationale.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="ac-featured-section">
        <div className="ac-featured-inner">
          <div className="ac-featured-card fade-in">
            <div>
              <span className="ac-feat-tag">{featured.tag}</span>
              <h2 className="ac-feat-title">{featured.title}</h2>
              <p className="ac-feat-desc">{featured.desc}</p>
              <div className="ac-feat-date">
                <Calendar size={14} />
                <span>{featured.date}</span>
              </div>
            </div>
            <div>
              <a href="#" className="ac-feat-cta">Lire l&apos;article →</a>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="ac-grid-section">
        <div className="ac-grid-inner">
          <div className="ac-grid-header fade-in">
            <p className="section-eyebrow">Toutes les actualités</p>
            <h2 className="section-title">Nos dernières nouvelles</h2>
          </div>
          <div className="ac-list">
            {rest.map((a, i) => (
              <div key={i} className={`ac-list-item fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                <div className="ac-list-meta">
                  <p className="ac-card-tag">{a.tag}</p>
                  <div className="ac-card-date">
                    <Calendar size={12} />
                    <span>{a.date}</span>
                  </div>
                </div>
                <div>
                  <h3 className="ac-card-title">{a.title}</h3>
                  <p className="ac-card-desc">{a.desc}</p>
                </div>
                <span className="ac-list-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
