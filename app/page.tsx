"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setCount(Math.round(e * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>;
}


export default function Home() {
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
        /* ── HERO ── */
        #hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 58% 42%;
          position: relative;
          overflow: hidden;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7rem 3.5rem 5rem;
          position: relative;
          z-index: 2;
        }
        .hero-eyebrow {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 1.5px;
          background: var(--accent);
        }
        .hero-title {
          font-family: 'Lora', serif;
          font-size: clamp(2.6rem, 4.5vw, 3.8rem);
          font-weight: 600;
          line-height: 1.18;
          color: var(--primary);
          margin-bottom: 1.8rem;
          letter-spacing: -0.01em;
        }
        .hero-title em { font-style: italic; color: var(--accent); }
        .hero-sub {
          font-family: 'Nunito', sans-serif;
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 480px;
          line-height: 1.8;
          margin-bottom: 3rem;
        }
        .hero-actions { display: flex; align-items: center; gap: 1.5rem; }
        .hero-right {
          position: relative;
          overflow: hidden;
          background: var(--primary);
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
        }
        .hero-right::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(109, 46, 70, 0.82);
          z-index: 1;
        }
        .hero-pattern { position: absolute; inset: 0; opacity: 0.12; }
        .hero-right-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          padding: 3rem 3rem 3.5rem;
          z-index: 2;
        }
        .hero-logo-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .hero-ong-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }
        .hero-ong-top {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
        }
        .hero-ong-label,
        .hero-ong-name {
          font-family: 'Bebas Neue', 'Impact', sans-serif;
          font-size: clamp(4rem, 8vw, 6.5rem);
          color: rgba(250, 244, 240, 0.95);
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .hero-floats { position: absolute; inset: 0; z-index: 1; }
        .float-circle { position: absolute; border-radius: 50%; background: rgba(232, 149, 109, 0.15); }
        .float-circle:nth-child(1) { width: 340px; height: 340px; top: -80px; right: -60px; }
        .float-circle:nth-child(2) { width: 200px; height: 200px; bottom: 100px; left: 40px; background: rgba(250, 244, 240, 0.06); }
        .float-circle:nth-child(3) { width: 120px; height: 120px; top: 50%; right: 80px; background: rgba(232, 149, 109, 0.1); }
        .hero-quote-block {
          position: relative;
          z-index: 3;
          border-left: 3px solid var(--accent);
          padding: 1.5rem 0 1.5rem 1.8rem;
        }
        .hero-quote-text {
          font-family: 'Lora', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: rgba(250, 244, 240, 0.9);
          line-height: 1.65;
          margin-bottom: 0.8rem;
        }
        .hero-quote-attr {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-light);
        }

        /* ── STATS ── */
        #stats {
          background: var(--cream-dark);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        #stats::before {
          content: 'IMPACT';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Lora', serif;
          font-size: clamp(8rem, 18vw, 16rem);
          font-weight: 700;
          color: rgba(109, 46, 70, 0.04);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.1em;
        }
        .stats-header { text-align: center; margin-bottom: 4rem; padding: 0 2rem; }
        .stats-label {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.6rem;
        }
        .stats-title {
          font-family: 'Lora', serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 500;
          color: var(--primary);
          font-style: italic;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
          z-index: 1;
        }
        .stat-block {
          padding: 2.5rem;
          border-right: 1px solid rgba(109, 46, 70, 0.12);
          position: relative;
        }
        .stat-block:last-child { border-right: none; }
        .stat-block::before {
          content: '';
          position: absolute;
          top: 0; left: 2.5rem; right: 2.5rem;
          height: 3px;
          background: var(--cream-dark);
          transition: background 0.4s ease;
        }
        .stat-block:hover::before { background: var(--accent); }
        .stat-number {
          font-family: 'Lora', serif;
          font-size: clamp(2.2rem, 3.6vw, 3.4rem);
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          display: flex;
          align-items: baseline;
          gap: 0.1em;
          margin-bottom: 0.8rem;
          letter-spacing: -0.03em;
          transition: color 0.3s ease;
        }
        .stat-block:hover .stat-number { color: var(--accent); }
        .stat-suffix {
          font-size: 0.45em;
          color: var(--accent);
          font-weight: 400;
          font-style: italic;
          align-self: flex-start;
          margin-top: 0.4em;
        }
        .stat-context {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.6;
          max-width: 340px;
        }
        .stat-context strong {
          font-weight: 700;
          color: var(--dark-mid);
          display: block;
          margin-bottom: 0.3rem;
          font-size: 0.92rem;
        }
        .stat-inline-num {
          font-weight: 700;
          color: var(--dark-mid);
          font-size: 1.25em;
        }

        /* ── MISSION ── */
        #mission {
          padding: 7rem 3.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .mission-quote {
          border-left: 4px solid var(--accent);
          padding: 2rem 0 2rem 2.5rem;
          position: relative;
        }
        .mission-quote::before {
          content: '"';
          position: absolute;
          top: -1rem; left: 1.5rem;
          font-family: 'Lora', serif;
          font-size: 6rem;
          color: var(--accent-light);
          line-height: 1;
          opacity: 0.5;
        }
        .mission-quote-text {
          font-family: 'Lora', serif;
          font-size: clamp(1.3rem, 2vw, 1.65rem);
          font-style: italic;
          color: var(--primary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .mission-quote-attr {
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .mission-values {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }
        .mission-value {
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--dark-mid);
        }
        .mission-value::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        /* ── ACTIONS ── */
        #actions {
          background: var(--dark);
          padding: 6rem 3.5rem;
        }
        .actions-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(250, 244, 240, 0.1);
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .actions-title-group .section-eyebrow { color: var(--accent); }
        .actions-title-group .section-title { color: var(--cream); font-size: clamp(1.8rem, 3vw, 2.5rem); }
        .actions-subtitle {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: rgba(250, 244, 240, 0.45);
          max-width: 280px;
          text-align: right;
          line-height: 1.7;
        }
        .action-rows {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          margin: 0 auto;
        }
        .action-row {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          align-items: center;
          gap: 2rem;
          padding: 2.5rem 1rem;
          border-bottom: 1px solid rgba(250, 244, 240, 0.08);
          cursor: pointer;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          margin: 0 -1rem;
          transition: background 0.3s ease;
        }
        .action-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: rgba(232, 149, 109, 0.06);
          transition: width 0.4s ease;
        }
        .action-row:hover::before { width: 100%; }
        .action-num {
          font-family: 'Lora', serif;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(250, 244, 240, 0.12);
          letter-spacing: -0.03em;
          line-height: 1;
          transition: color 0.35s ease;
        }
        .action-row:hover .action-num { color: var(--accent); }
        .action-tag {
          font-family: 'Nunito', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(232, 149, 109, 0.12);
          border: 1px solid rgba(232, 149, 109, 0.25);
          padding: 0.2rem 0.7rem;
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 0.7rem;
        }
        .action-name {
          font-family: 'Lora', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
          transition: color 0.25s ease;
        }
        .action-row:hover .action-name { color: var(--accent-light); }
        .action-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          color: rgba(250, 244, 240, 0.45);
          line-height: 1.6;
          max-width: 420px;
        }
        .action-arrow {
          font-size: 1.4rem;
          color: rgba(250, 244, 240, 0.2);
          transform: translateX(-8px);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .action-row:hover .action-arrow { transform: translateX(0); color: var(--accent); }

        /* ── EMERGENCY ── */
        #emergency {
          background: var(--primary);
          padding: 5rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        #emergency::before {
          content: 'SOS';
          position: absolute;
          right: -2rem; top: 50%;
          transform: translateY(-50%);
          font-family: 'Lora', serif;
          font-size: 18rem;
          font-weight: 700;
          color: rgba(250, 244, 240, 0.04);
          line-height: 1;
          pointer-events: none;
        }
        .emergency-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .emergency-header {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .emergency-pulse {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--accent-light);
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
          position: relative;
          top: -2px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .emergency-title {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .emergency-sub {
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          color: rgba(250, 244, 240, 0.65);
          margin-bottom: 3rem;
          max-width: 560px;
        }
        .emergency-resources {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .resource-card {
          background: rgba(250, 244, 240, 0.06);
          border: 1px solid rgba(250, 244, 240, 0.12);
          padding: 1.8rem;
          border-radius: 2px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .resource-card:hover { background: rgba(250, 244, 240, 0.1); border-color: rgba(232, 149, 109, 0.4); }
        .resource-type {
          font-family: 'Nunito', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 0.8rem;
        }
        .resource-name {
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.5rem;
        }
        .resource-contact {
          font-family: 'Nunito', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-light);
          margin-bottom: 0.5rem;
          letter-spacing: 0.03em;
        }
        .resource-desc {
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          color: rgba(250, 244, 240, 0.5);
          line-height: 1.6;
        }

        /* ── RECOGNITION ── */
        #recognition {
          background: var(--cream);
          padding: 5rem 3.5rem;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .recognition-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
          align-items: center;
        }
        .recognition-org {
          font-family: 'Nunito', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.8rem;
        }
        .recognition-year {
          font-family: 'Lora', serif;
          font-size: 5rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }
        .recognition-event {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--dark-mid);
          letter-spacing: 0.03em;
        }
        .recognition-right {
          border-left: 1px solid var(--border);
          padding-left: 5rem;
        }
        .recognition-headline {
          font-family: 'Lora', serif;
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 500;
          color: var(--dark);
          line-height: 1.45;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .recognition-body {
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .recognition-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(109, 46, 70, 0.07);
          border: 1px solid rgba(109, 46, 70, 0.15);
          padding: 0.45rem 1rem;
          border-radius: 2px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── CTA ── */
        #cta {
          background: var(--dark);
          padding: 7rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        #cta::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(232, 149, 109, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .cta-eyebrow {
          font-family: 'Nunito', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.2rem;
        }
        .cta-title {
          font-family: 'Lora', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 600;
          color: var(--cream);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        .cta-body {
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          color: rgba(250, 244, 240, 0.55);
          line-height: 1.8;
        }
        .cta-right { display: flex; flex-direction: column; gap: 1.2rem; }
        .cta-option {
          border: 1px solid rgba(250, 244, 240, 0.1);
          padding: 1.6rem 2rem;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(250, 244, 240, 0.03);
          text-decoration: none;
        }
        .cta-option:hover { background: rgba(232, 149, 109, 0.08); border-color: rgba(232, 149, 109, 0.35); }
        .cta-option-label {
          font-family: 'Nunito', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.3rem;
        }
        .cta-option-title {
          font-family: 'Lora', serif;
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--cream);
        }
        .cta-option-arrow {
          font-size: 1.2rem;
          color: rgba(250, 244, 240, 0.2);
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .cta-option:hover .cta-option-arrow { transform: translateX(5px); color: var(--accent); }

        /* ── TITLE LINKS ── */
        .title-link {
          color: inherit;
          text-decoration: none;
          display: inline;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .title-link:hover { color: var(--accent); }
        #actions .title-link:hover { color: var(--accent-light); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr; }
          .hero-right { display: none; }
          .hero-left { padding: 8rem 2rem 4rem; }
          #mission { grid-template-columns: 1fr; gap: 3rem; padding: 5rem 2rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          #actions, #emergency, #recognition, #cta { padding: 4rem 2rem; }
          .emergency-resources { grid-template-columns: 1fr; }
          .recognition-inner { grid-template-columns: 1fr; gap: 2rem; }
          .recognition-right { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 2rem; }
          .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
          .actions-header { flex-direction: column; align-items: flex-start; }
          .actions-subtitle { text-align: left; }
          .action-row { grid-template-columns: 80px 1fr auto; }
        }
        @media (max-width: 600px) {
          .container { padding: 0 1.5rem; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Depuis 2012 aux Comores</p>
          <h1 className="hero-title">
            Protéger les femmes<br />et les enfants<br />des <em>Comores</em>
          </h1>
          <p className="hero-sub">
            HIFADHWI œuvre chaque jour pour que chaque femme, chaque enfant des trois îles puisse vivre dans la dignité et la sécurité — loin des violences, accompagné·e vers la justice.
          </p>
          <div className="hero-actions">
            <Link href="/nos-actions" className="btn-primary">
              Nos actions <span>→</span>
            </Link>
            <Link href="/a-propos" className="btn-ghost">
              En savoir plus <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-floats">
            <div className="float-circle" />
            <div className="float-circle" />
            <div className="float-circle" />
          </div>
          <svg className="hero-pattern" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="rgba(250,244,240,0.6)" />
              </pattern>
            </defs>
            <rect width="600" height="800" fill="url(#dots)" />
            <circle cx="300" cy="250" r="180" fill="none" stroke="rgba(250,244,240,0.15)" strokeWidth="1" />
            <circle cx="300" cy="250" r="120" fill="none" stroke="rgba(250,244,240,0.1)" strokeWidth="0.5" />
            <circle cx="300" cy="250" r="240" fill="none" stroke="rgba(250,244,240,0.08)" strokeWidth="0.5" />
          </svg>
          <div className="hero-right-content">
            <div className="hero-logo-area">
              <div className="hero-ong-block">
                <div className="hero-ong-top">
                  <span className="hero-ong-label">ONG</span>
                  <Image src="/logo.png" alt="HIFADHWI" width={110} height={110} style={{ objectFit: "contain", opacity: 0.9 }} unoptimized />
                </div>
                <span className="hero-ong-name">HIFADHWI</span>
              </div>
            </div>
            <div className="hero-quote-block">
              <p className="hero-quote-text">
                « Le silence protège les agresseurs. Nous, nous donnons la parole aux victimes. »
              </p>
              <span className="hero-quote-attr">Fondatrice, HIFADHWI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats">
        <div className="stats-header fade-in">
          <p className="stats-label">Notre impact en chiffres</p>
          <h2 className="stats-title"><Link href="/a-propos" className="title-link">Près de 15 ans d&apos;engagement, des vies transformées</Link></h2>
        </div>
        <div className="stats-grid">
          {[
            {
              question: "QUI SOMMES-NOUS ?",
              label: null,
              desc: null,
              custom: (
                <p className="stat-context">
                  HIFADHWI a sensibilisé plus de{" "}
                  <span className="stat-inline-num"><CountUp target={1200} /></span>{" "}
                  personnes à travers les{" "}
                  <span className="stat-inline-num"><CountUp target={3} /></span>{" "}
                  îles des Comores — Grande Comore, Anjouan et Mohéli — dans la lutte contre toutes les formes de violence basée sur le genre.
                </p>
              ),
            },
            { question: "QUE FAISONS-NOUS ?", label: "Personnes sensibilisées", desc: "Communautés, écoles, institutions — le changement commence par la parole.", custom: null },
            { question: "COMMENT AIDER ?", label: "Années d'action", desc: "Près de 15 ans de terrain, de plaidoyer et de présence aux côtés des plus vulnérables depuis 2012.", custom: null },
          ].map((s, i) => (
            <div key={i} className={`stat-block fade-in fade-in-delay-${i + 1}`}>
              <div className="stat-number">{s.question}</div>
              {s.custom ?? (
                <div className="stat-context">
                  <strong>{s.label}</strong>
                  {s.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission">
        <div className="mission-quote fade-in">
          <p className="mission-quote-text">
            Aux Comores, la violence faite aux femmes reste souvent invisible — enfouie dans la honte, le silence, les traditions mal interprétées. HIFADHWI existe pour que cette invisibilité prenne fin.
          </p>
          <span className="mission-quote-attr">— Déclaration de fondation, 2012</span>
        </div>
        <div className="fade-in fade-in-delay-2">
          <p className="section-eyebrow">Notre mission</p>
          <h2 className="section-title"><Link href="/a-propos" className="title-link">Transformer la société comorienne de l&apos;intérieur</Link></h2>
          <p className="section-body">
            Nous ne sommes pas une organisation de secours d&apos;urgence. Nous sommes un mouvement de changement. À travers la sensibilisation, le droit et la diplomatie internationale, nous travaillons sur les causes profondes des violences basées sur le genre.
          </p>
          <p className="section-body">
            Chaque femme que nous accompagnons, chaque communauté que nous sensibilisons, chaque plaidoyer que nous portons devant les instances internationales — tout cela construit, pierre par pierre, une Comores plus juste.
          </p>
          <div className="mission-values">
            {[
              "Dignité inconditionnelle pour chaque personne",
              "Justice accessible aux plus vulnérables",
              "Ancrage culturel dans chaque action",
              "Indépendance et intégrité sans compromis",
            ].map((v, i) => (
              <div key={i} className="mission-value">{v}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIONS ── */}
      <section id="actions">
        <div className="actions-header fade-in">
          <div className="actions-title-group">
            <p className="section-eyebrow">Ce que nous faisons</p>
            <h2 className="section-title"><Link href="/nos-actions" className="title-link">Nos domaines d&apos;action</Link></h2>
          </div>
          <p className="actions-subtitle">
            Quatre axes complémentaires pour un changement durable et systémique.
          </p>
        </div>
        <div className="action-rows">
          {[
            { num: "01", tag: "Terrain", name: "Sensibilisation communautaire", desc: "Ateliers dans les villages, les écoles et les mosquées. Parce que la prévention commence dans les familles, avant que la violence ne survienne." },
            { num: "02", tag: "Juridique", name: "Accompagnement & soutien aux victimes", desc: "Écoute, orientation, soutien psychologique et accès à la justice pour les femmes et les enfants victimes de violence domestique ou sexuelle." },
            { num: "03", tag: "Plaidoyer", name: "Conférences & plaidoyer national", desc: "Dialogues avec les autorités comoriennes, la société civile et les médias pour faire évoluer les lois et les pratiques au niveau national." },
            { num: "04", tag: "International", name: "Plaidoyer international & diplomatie", desc: "Représentation aux Nations Unies, participation à l'Examen Périodique Universel, et construction d'alliances mondiales pour les droits humains aux Comores." },
          ].map((a, i) => (
            <Link key={i} href="/nos-actions" className={`action-row fade-in${i > 0 ? ` fade-in-delay-${i}` : ""}`} style={{ textDecoration: "none" }}>
              <div className="action-num">{a.num}</div>
              <div>
                <span className="action-tag">{a.tag}</span>
                <h3 className="action-name">{a.name}</h3>
                <p className="action-desc">{a.desc}</p>
              </div>
              <span className="action-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── EMERGENCY ── */}
      <section id="emergency">
        <div className="emergency-inner">
          <div className="emergency-header fade-in">
            <div className="emergency-pulse" />
            <h2 className="emergency-title"><Link href="/contact" className="title-link">Vous êtes en danger ?</Link></h2>
          </div>
          <p className="emergency-sub fade-in">
            Si vous ou quelqu&apos;un que vous connaissez est victime de violences, ces ressources sont disponibles maintenant. Vous n&apos;êtes pas seule.
          </p>
          <div className="emergency-resources">
            {[
              { type: "Ligne d'écoute", name: "HIFADHWI Direct", contact: "+269 321 00 00", desc: "Disponible 7j/7 de 7h à 22h. Écoute confidentielle, accompagnement et orientation vers les structures d'aide." },
              { type: "Urgences nationales", name: "Gendarmerie nationale", contact: "17", desc: "Numéro d'urgence de la gendarmerie, disponible 24h/24. En cas de danger immédiat ou de violence en cours." },
              { type: "Soutien psychologique", name: "Cellule d'écoute DSFE", contact: "+269 773 12 45", desc: "Direction de la Solidarité, de la Famille et des Élèves — prise en charge psychologique et sociale des victimes." },
            ].map((r, i) => (
              <div key={i} className={`resource-card fade-in fade-in-delay-${i + 1}`}>
                <p className="resource-type">{r.type}</p>
                <h3 className="resource-name">{r.name}</h3>
                <p className="resource-contact">{r.contact}</p>
                <p className="resource-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section id="recognition">
        <div className="recognition-inner">
          <div className="fade-in">
            <p className="recognition-org">Nations Unies</p>
            <div className="recognition-year">2023</div>
            <p className="recognition-event">Examen Périodique Universel — Genève</p>
          </div>
          <div className="recognition-right fade-in fade-in-delay-2">
            <h2 className="recognition-headline">
              <Link href="/a-propos" className="title-link">Une voix comorienne portée devant le Conseil des droits de l&apos;homme des Nations Unies</Link>
            </h2>
            <p className="recognition-body">
              En 2023, HIFADHWI a contribué au processus d&apos;Examen Périodique Universel (EPU) des Nations Unies concernant les Comores. Nos représentantes ont présenté un rapport documenté sur la situation des femmes et des enfants face aux violences, et formulé des recommandations concrètes aux autorités comoriennes devant la communauté internationale.
            </p>
            <p className="recognition-body">
              Cette reconnaissance internationale valide dix ans de travail de terrain et ouvre de nouvelles portes pour le plaidoyer en faveur des droits des plus vulnérables aux Comores.
            </p>
            <span className="recognition-badge">★ Reconnue au niveau international</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta">
        <div className="cta-inner">
          <div className="fade-in">
            <p className="cta-eyebrow">Rejoignez le combat</p>
            <h2 className="cta-title"><Link href="/nous-soutenir" className="title-link">Soutenez notre combat pour la dignité</Link></h2>
            <p className="cta-body">
              HIFADHWI vit grâce à la solidarité de personnes comme vous. Chaque contribution, petite ou grande, permet de continuer d&apos;accompagner des femmes et des enfants vers la justice et la sécurité.
            </p>
          </div>
          <div className="cta-right fade-in fade-in-delay-2">
            {[
              { label: "Don financier", title: "Faire un don en ligne", href: "/nous-soutenir" },
              { label: "Bénévolat", title: "Devenir bénévole", href: "/nous-soutenir" },
              { label: "Partenariat", title: "Proposer un partenariat", href: "/contact" },
            ].map((opt, i) => (
              <Link key={i} href={opt.href} className="cta-option">
                <div>
                  <p className="cta-option-label">{opt.label}</p>
                  <p className="cta-option-title">{opt.title}</p>
                </div>
                <span className="cta-option-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
