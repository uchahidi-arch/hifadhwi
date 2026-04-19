"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import JoinSection from "@/components/JoinSection";

const valeurs = [
  { title: "Engagement", desc: "Un engagement sans faille pour l'élimination de toutes formes de violence basée sur le genre." },
  { title: "Transparence", desc: "Nous agissons avec honnêteté et rendons compte de nos actions à nos bénéficiaires et partenaires." },
  { title: "Inclusion", desc: "Nous défendons les droits de toutes les femmes et tous les enfants, sans distinction." },
  { title: "Excellence", desc: "Nous visons la qualité dans chacune de nos interventions, formations et accompagnements." },
];

const timeline = [
  { year: "2013", event: "Création de l'ONG HIFADHWI à Moroni, Grande Comore." },
  { year: "2015", event: "Première campagne de sensibilisation sur les trois îles des Comores." },
  { year: "2018", event: "Contribution à la révision de la Politique Nationale d'Équité et d'Égalité du Genre." },
  { year: "2021", event: "Plaidoyer pour le renforcement des sanctions VBG dans le Code pénal comorien." },
  { year: "2023", event: "Déclaration officielle devant l'ONU — Examen Périodique Universel (UPR) à Genève." },
];

const recommandations = [
  "Ratifier le Protocole facultatif à la CEDAW",
  "Amender le Code pénal pour criminaliser le viol conjugal",
  "Réduire les mariages forcés et précoces des jeunes filles",
  "Créer un Fonds National contre les VBG",
  "Intensifier la sensibilisation des acteurs judiciaires",
];

export default function APropos() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ap-hero {
          background: var(--dark);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
        }
        .ap-hero::before {
          content: 'MISSION';
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
        .ap-hero-inner { max-width: 1200px; margin: 0 auto; }
        .ap-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          max-width: 700px;
        }
        .ap-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.6);
          max-width: 540px;
          line-height: 1.8;
        }

        /* MISSION */
        .ap-mission {
          padding: 7rem 3.5rem;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }
        .ap-mission-text p {
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 1.2rem;
        }
        .ap-reco-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.5rem;
        }
        .ap-reco-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem 1.2rem;
          background: var(--cream-dark);
          border-radius: 2px;
          border-left: 3px solid var(--accent);
        }
        .ap-reco-item span {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--dark-mid);
          line-height: 1.55;
        }

        /* VALEURS */
        .ap-valeurs {
          background: var(--cream-dark);
          padding: 6rem 3.5rem;
        }
        .ap-valeurs-inner { max-width: 1200px; margin: 0 auto; }
        .ap-valeurs-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 4rem;
          border-top: 1px solid rgba(109,46,70,0.15);
        }
        .ap-valeur-row {
          padding: 2.5rem 3rem 2.5rem 0;
          border-bottom: 1px solid rgba(109,46,70,0.15);
          position: relative;
        }
        .ap-valeur-row:nth-child(even) {
          padding-left: 3rem;
          padding-right: 0;
          border-left: 1px solid rgba(109,46,70,0.15);
        }
        .ap-valeur-num {
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.8rem;
        }
        .ap-valeur-title {
          font-family: 'Lora', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }
        .ap-valeur-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.7;
          max-width: 380px;
        }

        /* TIMELINE */
        .ap-timeline {
          padding: 7rem 3.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ap-timeline-header { margin-bottom: 4rem; }
        .ap-timeline-list { max-width: 720px; }
        .ap-tl-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2.5rem;
          margin-bottom: 0;
          position: relative;
        }
        .ap-tl-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: calc(100px + 2.5rem / 2 - 1px);
          top: 2.2rem;
          bottom: -0rem;
          width: 1px;
          background: var(--border);
        }
        .ap-tl-year {
          text-align: right;
          padding-top: 0.15rem;
        }
        .ap-tl-year span {
          font-family: 'Lora', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          background: rgba(109, 46, 70, 0.08);
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
          letter-spacing: 0.03em;
        }
        .ap-tl-content {
          padding: 0 0 2.5rem 1.5rem;
          position: relative;
        }
        .ap-tl-content::before {
          content: '';
          position: absolute;
          left: -5px; top: 0.55rem;
          width: 10px; height: 10px;
          background: var(--accent);
          border-radius: 50%;
        }
        .ap-tl-content p {
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .ap-hero { padding: 8rem 2rem 5rem; }
          .ap-mission { grid-template-columns: 1fr; gap: 3rem; padding: 5rem 2rem; }
          .ap-valeurs { padding: 4rem 2rem; }
          .ap-valeurs-list { grid-template-columns: 1fr; }
          .ap-valeur-row:nth-child(even) { padding-left: 0; border-left: none; }
          .ap-timeline { padding: 5rem 2rem; }
          .ap-tl-item { grid-template-columns: 80px 1fr; gap: 1.5rem; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="ap-hero">
        <div className="ap-hero-inner">
          <p className="section-eyebrow fade-in">Notre histoire</p>
          <h1 className="fade-in fade-in-delay-1">
            À propos de<br />HIFADHWI
          </h1>
          <p className="fade-in fade-in-delay-2">
            Une ONG comorienne de lutte contre la violence faite aux femmes et aux enfants, active depuis plus de 10 ans sur l'archipel des Comores.
          </p>
        </div>
      </section>

      {/* MISSION + RECOMMANDATIONS */}
      <section style={{ background: "var(--cream)" }}>
        <div className="ap-mission">
          <div className="ap-mission-text fade-in">
            <p className="section-eyebrow">Notre mission</p>
            <h2 className="section-title">Protéger, accompagner, plaider</h2>
            <p>
              HIFADHWI œuvre pour l'élimination de toutes les formes de violence basées sur le genre (VBG) aux Comores. Nous intervenons à travers la sensibilisation, l'accompagnement des victimes et le plaidoyer auprès des institutions.
            </p>
            <p>
              Notre nom, HIFADHWI, signifie <em style={{ color: "var(--primary)", fontStyle: "italic" }}>« protection »</em> en Shikomori — une promesse au cœur de chacune de nos actions.
            </p>
          </div>
          <div className="fade-in fade-in-delay-2">
            <p className="section-eyebrow">Nos recommandations prioritaires</p>
            <h2 className="section-title">Ce que nous portons</h2>
            <div className="ap-reco-list">
              {recommandations.map((r, i) => (
                <div key={i} className="ap-reco-item">
                  <CheckCircle size={17} color="var(--accent)" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="ap-valeurs">
        <div className="ap-valeurs-inner">
          <div style={{ textAlign: "center" }} className="fade-in">
            <p className="section-eyebrow">Ce qui nous guide</p>
            <h2 className="section-title">Nos valeurs fondatrices</h2>
          </div>
          <div className="ap-valeurs-list">
            {valeurs.map((v, i) => (
              <div key={i} className={`ap-valeur-row fade-in fade-in-delay-${(i % 2) + 1}`}>
                <p className="ap-valeur-num">0{i + 1}</p>
                <p className="ap-valeur-title">{v.title}</p>
                <p className="ap-valeur-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "var(--cream)" }}>
        <div className="ap-timeline">
          <div className="ap-timeline-header fade-in">
            <p className="section-eyebrow">Dix ans de terrain</p>
            <h2 className="section-title">Notre parcours</h2>
          </div>
          <div className="ap-timeline-list">
            {timeline.map((t, i) => (
              <div key={i} className={`ap-tl-item fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                <div className="ap-tl-year"><span>{t.year}</span></div>
                <div className="ap-tl-content"><p>{t.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinSection />
      <Footer />
    </>
  );
}
