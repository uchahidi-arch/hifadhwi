"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Heart, Users, Handshake, CheckCircle } from "lucide-react";

const impacts = [
  { montant: "10 €", impact: "Finance un atelier de sensibilisation pour 5 personnes" },
  { montant: "25 €", impact: "Couvre l'accompagnement juridique d'une victime pendant une semaine" },
  { montant: "50 €", impact: "Finance une formation pour un acteur judiciaire sur les VBG" },
  { montant: "100 €", impact: "Soutient une famille pendant un mois après un épisode de violence" },
];

const autresSoutiens = [
  { icon: Users, title: "Devenir bénévole", desc: "Rejoignez notre équipe sur le terrain. Juristes, psychologues, formateurs — tous les profils sont les bienvenus.", cta: "Candidater" },
  { icon: Handshake, title: "Partenariat institutionnel", desc: "Entreprises, institutions, associations — engagez votre organisation aux côtés de HIFADHWI.", cta: "Nous contacter" },
  { icon: Heart, title: "Parrainage de projet", desc: "Financez directement un programme spécifique : sensibilisation, formation juridique, accompagnement.", cta: "En savoir plus" },
];

export default function NousSoutenir() {
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
        /* HERO */
        .ns-hero {
          background: var(--primary);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .ns-hero::before {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(232,149,109,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ns-hero-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .ns-hero-icon {
          width: 64px; height: 64px;
          background: rgba(232,149,109,0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .ns-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }
        .ns-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.65);
          line-height: 1.8;
        }

        /* DON SECTION */
        .ns-don {
          background: var(--cream);
          padding: 7rem 3.5rem;
        }
        .ns-don-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        /* DON FORM */
        .ns-amounts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
        }
        .ns-amount-btn {
          padding: 1.1rem;
          border: 1.5px solid var(--border);
          border-radius: 2px;
          background: var(--white);
          cursor: pointer;
          font-family: 'Lora', serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--dark);
          transition: all 0.2s ease;
          text-align: center;
        }
        .ns-amount-btn:hover { border-color: var(--primary); color: var(--primary); background: rgba(109,46,70,0.04); }
        .ns-custom-amount {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--border);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          transition: border-color 0.2s;
        }
        .ns-custom-amount:focus-within { border-color: var(--accent); }
        .ns-currency {
          padding: 0.85rem 1.1rem;
          background: var(--cream-dark);
          font-family: 'Lora', serif;
          font-weight: 700;
          color: var(--primary);
          border-right: 1.5px solid var(--border);
          font-size: 1rem;
        }
        .ns-amount-input {
          flex: 1;
          padding: 0.85rem 1rem;
          border: none;
          outline: none;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          background: var(--white);
          color: var(--dark);
        }
        .ns-freq { margin-bottom: 2rem; }
        .ns-freq-label {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--dark-mid);
          margin-bottom: 0.75rem;
          display: block;
        }
        .ns-freq-btns { display: flex; gap: 0.75rem; }
        .ns-freq-btn {
          flex: 1;
          padding: 0.65rem;
          border: 1.5px solid var(--border);
          border-radius: 2px;
          background: var(--white);
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--dark-mid);
          transition: all 0.2s;
          text-align: center;
        }
        .ns-freq-btn:hover { border-color: var(--primary); color: var(--primary); }

        /* IMPACT */
        .ns-impact-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .ns-impact-item {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1.1rem 1.25rem;
          background: var(--cream-dark);
          border-radius: 2px;
          border-left: 3px solid var(--accent);
          transition: background 0.2s;
        }
        .ns-impact-item:hover { background: var(--white); }
        .ns-impact-montant {
          font-family: 'Lora', serif;
          font-weight: 700;
          color: var(--primary);
          font-size: 1rem;
          flex-shrink: 0;
          min-width: 52px;
        }
        .ns-impact-text {
          font-family: 'Nunito', sans-serif;
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
        }

        /* AUTRES SOUTIENS */
        .ns-autres {
          background: var(--dark);
          padding: 7rem 3.5rem;
        }
        .ns-autres-inner { max-width: 1200px; margin: 0 auto; }
        .ns-autres-list {
          margin-top: 4rem;
          border-top: 1px solid rgba(250,244,240,0.1);
        }
        .ns-autre-row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 3rem;
          align-items: center;
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(250,244,240,0.08);
          transition: background 0.25s ease;
          margin: 0 -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .ns-autre-row:hover { background: rgba(232,149,109,0.04); }
        .ns-autre-num {
          font-family: 'Lora', serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: rgba(250,244,240,0.1);
          line-height: 1;
          letter-spacing: -0.03em;
          transition: color 0.3s ease;
        }
        .ns-autre-row:hover .ns-autre-num { color: var(--accent); }
        .ns-autre-title {
          font-family: 'Lora', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
        }
        .ns-autre-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.9rem;
          color: rgba(250,244,240,0.45);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .ns-hero, .ns-don, .ns-autres { padding-left: 2rem; padding-right: 2rem; }
          .ns-hero { padding-top: 8rem; }
          .ns-don-inner { grid-template-columns: 1fr; gap: 3rem; }
          .ns-autre-row { grid-template-columns: 60px 1fr; gap: 1.5rem; }
          .ns-autre-row > a { display: none; }
          .ns-amounts { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="ns-hero">
        <div className="ns-hero-inner">
          <div className="ns-hero-icon fade-in">
            <Heart size={28} color="var(--accent-light)" fill="var(--accent-light)" />
          </div>
          <p className="section-eyebrow fade-in" style={{ color: "var(--accent-light)", textAlign: "center" }}>Rejoindre le combat</p>
          <h1 className="fade-in fade-in-delay-1">Soutenez<br />HIFADHWI</h1>
          <p className="fade-in fade-in-delay-2">
            Chaque contribution, petite ou grande, change concrètement la vie d&apos;une femme ou d&apos;un enfant aux Comores.
          </p>
        </div>
      </section>

      {/* DON + IMPACT */}
      <section className="ns-don">
        <div className="ns-don-inner">
          <div className="fade-in">
            <p className="section-eyebrow">Don financier</p>
            <h2 className="section-title">Faire un don</h2>
            <div className="ns-amounts">
              {[10, 25, 50, 100].map(m => (
                <button key={m} className="ns-amount-btn">{m} €</button>
              ))}
            </div>
            <div className="ns-custom-amount">
              <span className="ns-currency">€</span>
              <input type="number" placeholder="Montant libre" className="ns-amount-input" />
            </div>
            <div className="ns-freq">
              <span className="ns-freq-label">Fréquence</span>
              <div className="ns-freq-btns">
                {["Don unique", "Mensuel", "Annuel"].map(f => (
                  <button key={f} className="ns-freq-btn">{f}</button>
                ))}
              </div>
            </div>
            <button className="btn-accent" style={{ width: "100%", textAlign: "center", padding: "1rem", fontSize: "0.92rem", justifyContent: "center" }}>
              Faire un don sécurisé
            </button>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.75rem", textAlign: "center" }}>
              Paiement sécurisé · Reçu fiscal disponible
            </p>
          </div>

          <div className="fade-in fade-in-delay-2">
            <p className="section-eyebrow">Concrètement</p>
            <h2 className="section-title">Votre impact</h2>
            <div className="ns-impact-list">
              {impacts.map((item, i) => (
                <div key={i} className="ns-impact-item">
                  <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <div>
                    <span className="ns-impact-montant">{item.montant}</span>
                    <span className="ns-impact-text"> — {item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES SOUTIENS */}
      <section className="ns-autres">
        <div className="ns-autres-inner">
          <div className="fade-in" style={{ textAlign: "center" }}>
            <p className="section-eyebrow" style={{ color: "var(--accent)" }}>Au-delà du don</p>
            <h2 className="section-title" style={{ color: "var(--cream)" }}>Autres façons de nous soutenir</h2>
          </div>
          <div className="ns-autres-list">
            {autresSoutiens.map((item, i) => (
              <div key={i} className={`ns-autre-row fade-in fade-in-delay-${i + 1}`}>
                <div className="ns-autre-num">0{i + 1}</div>
                <div>
                  <h3 className="ns-autre-title">{item.title}</h3>
                  <p className="ns-autre-desc">{item.desc}</p>
                </div>
                <Link href="/contact" className="btn-outline" style={{ fontSize: "0.82rem", padding: "0.6rem 1.25rem", borderColor: "rgba(250,244,240,0.2)", color: "var(--cream)", whiteSpace: "nowrap" }}>
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
