"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const coordonnees = [
  { icon: MapPin, title: "Adresse", lines: ["Moroni, Union des Comores", "Grande Comore"] },
  { icon: Phone, title: "Téléphone", lines: ["+269 XXX XXX", "Urgence 24h/24 : +269 XXX XXX"] },
  { icon: Mail, title: "Email", lines: ["contact@hifadhwi.org", "urgence@hifadhwi.org"] },
  { icon: Clock, title: "Horaires", lines: ["Lundi – Vendredi : 8h – 17h", "Ligne d'urgence : 24h/24"] },
];

export default function Contact() {
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
        .ct-hero {
          background: var(--dark);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
        }
        .ct-hero::before {
          content: 'CONTACT';
          position: absolute;
          right: -2rem; bottom: -2rem;
          font-family: 'Lora', serif;
          font-size: clamp(7rem, 14vw, 12rem);
          font-weight: 700;
          color: rgba(250, 244, 240, 0.03);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.03em;
        }
        .ct-hero-inner { max-width: 1200px; margin: 0 auto; }
        .ct-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          max-width: 660px;
        }
        .ct-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.6);
          max-width: 520px;
          line-height: 1.8;
        }

        /* MAIN */
        .ct-main {
          background: var(--cream);
          padding: 7rem 3.5rem;
        }
        .ct-main-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 6rem;
          align-items: start;
        }

        /* COORDONNEES */
        .ct-coord-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2.5rem;
        }
        .ct-coord-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .ct-coord-icon {
          width: 44px; height: 44px;
          background: rgba(232, 149, 109, 0.1);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ct-coord-title {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--dark);
          margin-bottom: 0.3rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .ct-coord-line {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.6;
        }
        .ct-urgence {
          margin-top: 2.5rem;
          background: var(--primary);
          border-radius: 2px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        .ct-urgence::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 120px; height: 120px;
          background: rgba(232, 149, 109, 0.15);
          border-radius: 50%;
        }
        .ct-urgence h3 {
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.5rem;
        }
        .ct-urgence p {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: rgba(250,244,240,0.65);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        /* FORM */
        .ct-form-title {
          font-family: 'Lora', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }
        .ct-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 2.5rem;
        }
        .ct-field { margin-bottom: 1.25rem; }
        .ct-label {
          display: block;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--dark-mid);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }
        .ct-input, .ct-select, .ct-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border);
          border-radius: 2px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--dark);
          outline: none;
          background: var(--cream);
          transition: border-color 0.2s;
        }
        .ct-input:focus, .ct-select:focus, .ct-textarea:focus { border-color: var(--accent); }
        .ct-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background: var(--cream) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23E8956D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 0.85rem center;
          padding-right: 2.5rem;
        }
        .ct-textarea { resize: vertical; font-family: inherit; }
        .ct-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        @media (max-width: 900px) {
          .ct-hero, .ct-main { padding-left: 2rem; padding-right: 2rem; }
          .ct-hero { padding-top: 8rem; }
          .ct-main-inner { grid-template-columns: 1fr; gap: 3rem; }
          .ct-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <p className="section-eyebrow fade-in">Nous joindre</p>
          <h1 className="fade-in fade-in-delay-1">Contactez-nous</h1>
          <p className="fade-in fade-in-delay-2">
            Nous sommes là pour vous répondre. N&apos;hésitez pas à nous écrire pour toute question, demande de partenariat ou signalement.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="ct-main">
        <div className="ct-main-inner">
          {/* COORDONNEES */}
          <div className="fade-in">
            <p className="section-eyebrow">Nos coordonnées</p>
            <h2 className="section-title">Où nous trouver</h2>
            <div className="ct-coord-list">
              {coordonnees.map((item, i) => (
                <div key={i} className="ct-coord-item">
                  <div className="ct-coord-icon">
                    <item.icon size={19} color="var(--accent)" />
                  </div>
                  <div>
                    <p className="ct-coord-title">{item.title}</p>
                    {item.lines.map((l, j) => <p key={j} className="ct-coord-line">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="ct-urgence">
              <h3>Urgence 24h/24</h3>
              <p>Si vous ou quelqu&apos;un est en danger immédiat :</p>
              <a href="tel:+269000000" className="btn-accent" style={{ display: "inline-block" }}>
                Appeler maintenant
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="fade-in fade-in-delay-2">
            <p className="section-eyebrow">Formulaire de contact</p>
            <h2 className="section-title">Envoyer un message</h2>
            <div className="ct-form-card">
              <div className="ct-form-grid ct-field">
                <div>
                  <label className="ct-label">Nom</label>
                  <input type="text" placeholder="Votre nom" className="ct-input" />
                </div>
                <div>
                  <label className="ct-label">Email</label>
                  <input type="email" placeholder="votre@email.com" className="ct-input" />
                </div>
              </div>
              <div className="ct-field">
                <label className="ct-label">Objet</label>
                <select className="ct-select">
                  <option value="">— Choisir un objet —</option>
                  <option>Demande d&apos;informations</option>
                  <option>Demande d&apos;aide</option>
                  <option>Signalement d&apos;une situation</option>
                  <option>Adhésion — devenir membre</option>
                  <option>Bénévolat</option>
                  <option>Don &amp; soutien financier</option>
                  <option>Partenariat institutionnel</option>
                  <option>Formation &amp; intervention</option>
                  <option>Presse &amp; médias</option>
                  <option>Recherche &amp; académique</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea rows={6} placeholder="Votre message..." className="ct-textarea" />
              </div>
              <button className="btn-primary" style={{ width: "100%", textAlign: "center", padding: "0.95rem", justifyContent: "center" }}>
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
