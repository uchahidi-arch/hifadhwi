"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Shield, Scale, AlertTriangle, Heart } from "lucide-react";

const droits = [
  { loi: "Constitution — Article 30", desc: "Garantit aux femmes le droit d'être protégées contre toute forme d'abandon, d'exploitation et de violence." },
  { loi: "Décret N° 15-058 — Loi Fatah", desc: "Portant prévention et répression des violences basées sur le genre. Adopté en 2015." },
  { loi: "Décret N°21-018 (2021)", desc: "Révision du Code pénal pour renforcer les sanctions contre les VBG." },
];

const signes = [
  "Coups, gifles, blessures physiques",
  "Insultes, humiliations répétées",
  "Isolement de la famille et des amis",
  "Contrôle de l'argent et des déplacements",
  "Menaces, intimidations",
  "Violence sexuelle au sein du couple",
  "Mariage forcé ou précoce",
  "Exploitation par la mendicité (enfants)",
];

export default function Ressources() {
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
        /* ALERT */
        .rs-alert {
          background: #7F1D1D;
          padding: 1rem 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 101;
        }
        .rs-alert span {
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          color: white;
          font-size: 0.92rem;
        }
        .rs-alert-btn {
          background: white;
          color: #7F1D1D;
          padding: 0.3rem 1rem;
          border-radius: 2px;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: background 0.2s;
        }
        .rs-alert-btn:hover { background: #FEE2E2; }

        /* HERO */
        .rs-hero {
          background: var(--primary);
          padding: 9rem 3.5rem 6rem;
          position: relative;
          overflow: hidden;
        }
        .rs-hero::before {
          content: 'SOS';
          position: absolute;
          right: -1rem; bottom: -2rem;
          font-family: 'Lora', serif;
          font-size: clamp(10rem, 20vw, 18rem);
          font-weight: 700;
          color: rgba(250, 244, 240, 0.04);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.03em;
        }
        .rs-hero-inner { max-width: 1200px; margin: 0 auto; }
        .rs-hero h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          max-width: 680px;
        }
        .rs-hero p {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: rgba(250, 244, 240, 0.65);
          max-width: 520px;
          line-height: 1.8;
        }

        /* CONTACTS */
        .rs-contacts {
          background: var(--cream-dark);
          padding: 6rem 3.5rem;
        }
        .rs-contacts-inner { max-width: 1200px; margin: 0 auto; }
        .rs-contacts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 4rem;
          border-top: 1px solid rgba(109,46,70,0.15);
        }
        .rs-contact-col {
          padding: 2.5rem 2.5rem 2.5rem 0;
        }
        .rs-contact-col:not(:first-child) {
          padding-left: 2.5rem;
          border-left: 1px solid rgba(109,46,70,0.15);
        }
        .rs-contact-label {
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .rs-contact-title {
          font-family: 'Lora', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.75rem;
        }
        .rs-contact-number {
          font-family: 'Lora', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
          display: block;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1;
          transition: color 0.2s;
        }
        .rs-contact-number:hover { color: var(--accent); }
        .rs-contact-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* DROITS & SIGNES */
        .rs-info {
          background: var(--cream);
          padding: 7rem 3.5rem;
        }
        .rs-info-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }
        .rs-droit-item {
          padding: 1.25rem 1.5rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 2px;
          border-left: 3px solid var(--accent);
          margin-bottom: 1rem;
        }
        .rs-droit-title {
          font-family: 'Lora', serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .rs-droit-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.65;
        }
        .rs-signe-item {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 0.8rem 1rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 2px;
          margin-bottom: 0.5rem;
          transition: border-color 0.2s;
        }
        .rs-signe-item:hover { border-color: rgba(232,149,109,0.4); }
        .rs-signe-item span {
          font-family: 'Nunito', sans-serif;
          font-size: 0.9rem;
          color: var(--dark-mid);
        }

        /* SIGNALEMENT */
        .rs-form-section {
          background: var(--dark);
          padding: 7rem 3.5rem;
        }
        .rs-form-inner {
          max-width: 680px;
          margin: 0 auto;
        }
        .rs-form-header { text-align: center; margin-bottom: 3rem; }
        .rs-form-header h2 {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .rs-form-header p {
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          color: rgba(250, 244, 240, 0.5);
          line-height: 1.7;
        }
        .rs-form-card {
          background: rgba(250, 244, 240, 0.04);
          border: 1px solid rgba(250, 244, 240, 0.1);
          border-radius: 2px;
          padding: 2.5rem;
        }
        .rs-field { margin-bottom: 1.25rem; }
        .rs-label {
          display: block;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: rgba(250, 244, 240, 0.7);
          margin-bottom: 0.5rem;
          letter-spacing: 0.03em;
        }
        .rs-input, .rs-select, .rs-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(250, 244, 240, 0.06);
          border: 1px solid rgba(250, 244, 240, 0.12);
          border-radius: 2px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: var(--cream);
          outline: none;
          transition: border-color 0.2s;
        }
        .rs-input::placeholder, .rs-textarea::placeholder { color: rgba(250,244,240,0.25); }
        .rs-input:focus, .rs-select:focus, .rs-textarea:focus { border-color: rgba(232,149,109,0.5); }
        .rs-select { appearance: none; cursor: pointer; }
        .rs-select option { background: var(--dark); color: var(--cream); }
        .rs-textarea { resize: vertical; font-family: inherit; }
        .rs-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        @media (max-width: 900px) {
          .rs-alert, .rs-hero, .rs-contacts, .rs-info, .rs-form-section { padding-left: 2rem; padding-right: 2rem; }
          .rs-hero { padding-top: 8rem; }
          .rs-contacts-grid { grid-template-columns: 1fr; }
          .rs-contact-col { padding: 2rem 0; border-left: none !important; border-top: 1px solid rgba(109,46,70,0.15); }
          .rs-info-inner { grid-template-columns: 1fr; gap: 3rem; }
          .rs-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ALERT */}
      <div className="rs-alert">
        <AlertTriangle size={17} color="#FCA5A5" />
        <span>Si vous êtes en danger immédiat, appelez le :</span>
        <a href="tel:+269000000" className="rs-alert-btn">+269 XXX XXX</a>
      </div>

      <Navbar />

      {/* HERO */}
      <section className="rs-hero">
        <div className="rs-hero-inner">
          <p className="section-eyebrow fade-in" style={{ color: "var(--accent-light)" }}>Aide & protection</p>
          <h1 className="fade-in fade-in-delay-1">
            Ressources<br />pour les victimes
          </h1>
          <p className="fade-in fade-in-delay-2">
            Vous n&apos;êtes pas seule. Des ressources, des droits et des personnes sont là pour vous aider maintenant.
          </p>
        </div>
      </section>

      {/* CONTACTS D'URGENCE */}
      <section className="rs-contacts">
        <div className="rs-contacts-inner">
          <div className="fade-in">
            <p className="section-eyebrow">Disponibles maintenant</p>
            <h2 className="section-title">Contacts d&apos;urgence</h2>
          </div>
          <div className="rs-contacts-grid">
            {[
              { icon: Phone, title: "Ligne HIFADHWI", number: "+269 XXX XXX", desc: "Disponible 24h/24, 7j/7" },
              { icon: Shield, title: "Police nationale", number: "17", desc: "Pour toute situation de danger immédiat" },
              { icon: Heart, title: "Ligne verte enfants", number: "116", desc: "Protection de l'enfance — gratuit" },
            ].map((c, i) => (
              <div key={i} className={`rs-contact-col fade-in fade-in-delay-${i + 1}`}>
                <p className="rs-contact-label">
                  <c.icon size={13} color="var(--accent)" />
                  Urgence
                </p>
                <h3 className="rs-contact-title">{c.title}</h3>
                <a href={`tel:${c.number}`} className="rs-contact-number">{c.number}</a>
                <p className="rs-contact-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DROITS & SIGNES */}
      <section className="rs-info">
        <div className="rs-info-inner">
          <div className="fade-in">
            <p className="section-eyebrow">Protégée par la loi</p>
            <h2 className="section-title">Vos droits légaux</h2>
            <div style={{ marginTop: "2rem" }}>
              {droits.map((d, i) => (
                <div key={i} className="rs-droit-item">
                  <p className="rs-droit-title">{d.loi}</p>
                  <p className="rs-droit-desc">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in fade-in-delay-2">
            <p className="section-eyebrow">Reconnaître la violence</p>
            <h2 className="section-title">Les signes d&apos;alerte</h2>
            <div style={{ marginTop: "2rem" }}>
              {signes.map((s, i) => (
                <div key={i} className="rs-signe-item">
                  <AlertTriangle size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNALEMENT */}
      <section className="rs-form-section">
        <div className="rs-form-inner">
          <div className="rs-form-header fade-in">
            <Shield size={36} color="var(--accent)" style={{ margin: "0 auto 1rem" }} />
            <p className="section-eyebrow" style={{ color: "var(--accent)", textAlign: "center" }}>Confidentiel & sécurisé</p>
            <h2>Signalement confidentiel</h2>
            <p>Vos informations sont strictement confidentielles et protégées.</p>
          </div>
          <div className="rs-form-card fade-in fade-in-delay-2">
            <div className="rs-form-grid rs-field">
              <div>
                <label className="rs-label">Prénom (optionnel)</label>
                <input type="text" placeholder="Votre prénom" className="rs-input" />
              </div>
              <div>
                <label className="rs-label">Île</label>
                <select className="rs-select">
                  <option>Grande Comore</option>
                  <option>Anjouan</option>
                  <option>Mohéli</option>
                </select>
              </div>
            </div>
            <div className="rs-field">
              <label className="rs-label">Type de situation</label>
              <select className="rs-select">
                <option>Violence physique</option>
                <option>Violence psychologique</option>
                <option>Violence sexuelle</option>
                <option>Mariage forcé</option>
                <option>Violence économique</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="rs-field">
              <label className="rs-label">Décrivez la situation</label>
              <textarea rows={5} placeholder="Décrivez ce qui se passe. Toutes les informations restent confidentielles." className="rs-textarea" />
            </div>
            <button className="btn-accent" style={{ width: "100%", textAlign: "center", padding: "1rem" }}>
              Envoyer le signalement de manière sécurisée
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
