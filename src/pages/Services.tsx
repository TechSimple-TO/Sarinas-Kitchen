/**
 * Services.tsx
 * Full services overview template populated with placeholder data.
 */

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';

import placeholderImg from '../assets/placeholder.jpg';

type Service = {
  title: string;
  description: string;
  img: string;
  details: string;
  examples: string[];
};

const services: Service[] = [
  {
    title: 'Private Cooking Experiences',
    description:
      "Restaurant-caliber, multi-course menus prepared in your kitchen with optional wine pairings and candlelit table styling.",
    img: placeholderImg,
    details:
      'Sarina sources seasonal produce, arrives fully prepped, and leaves your kitchen spotless. Menus are customized after a planning call and include printed keepsake menus for your guests.',
    examples: [
      'Seasonal tasting menus for 2-12 guests',
      'Anniversary and proposal dinners',
      'Wine-paired evenings with sommelier partners',
    ],
  },
  {
    title: 'Hands-On Teaching & Workshops',
    description:
      'Intimate culinary classes for couples, families, and teams ready to build confidence with Italian techniques.',
    img: placeholderImg,
    details:
      'Each class includes a pre-session call, curated shopping list, and a post-class recap with recipes and chef tips. Virtual add-ons and ingredient kits are available for remote attendees.',
    examples: [
      'Fresh pasta and sauce pairings',
      'Seasonal gnocchi workshop',
      'Knife skills and kitchen confidence training',
    ],
  },
  {
    title: 'Boutique Catering',
    description:
      'Elevated small-event catering with vibrant grazing tables, cocktail bites, and family-style spreads for up to 40 guests.',
    img: placeholderImg,
    details:
      'Perfect for showers, milestone birthdays, or corporate open houses. Our team can coordinate rentals, servers, and bartenders to match your vibe.',
    examples: [
      'Garden parties and shower brunches',
      'Cocktail receptions with roaming canapés',
      'Corporate lunches delivered and styled on-site',
    ],
  },
];

const Services: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (title: string) => setExpanded((t) => (t === title ? null : title));
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expanded && panelRef.current) {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      panelRef.current.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }, [expanded]);

  return (
    <section className={styles.wrapper} aria-labelledby="services-title">
      {/* Intro */}
      <div className={styles.intro}>
        <h2 id="services-title" className={styles.title}>What We Bring to the Table</h2>
        <p className={styles.lead}>
          Choose the experience that fits your celebration. Each service is tailored after a planning
          call so your menu, pacing, and presentation feel distinctly yours.
        </p>
      </div>

      {/* Services grid */}
      <ul className={styles.cardGrid} role="list">
        {services.map((s) => {
          const isExpanded = expanded === s.title;
          const panelId = 'svc-expanded-panel';
          return (
            <li className={styles.card} key={s.title}>
              <img className={styles.cardImg} src={s.img} alt={s.title} loading="lazy" />
              <h3 className={styles.cardHeading}>{s.title}</h3>
              <p>{s.description}</p>
              <div className={styles.cardActions}>
                <button
                  type="button"
                  className="btn btn--primary"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggle(s.title)}
                >
                  {isExpanded ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {expanded && (() => {
        const svc = services.find((x) => x.title === expanded)!;
        return (
          <div
            id="svc-expanded-panel"
            className={styles.expandedPanel}
            aria-live="polite"
            ref={panelRef}
          >
            <img className={styles.expandedImg} src={svc.img} alt={svc.title} />
            <h3 className={styles.cardHeading}>{svc.title}</h3>
            <p>{svc.details || svc.description}</p>
            {svc.examples?.length ? (
              <ul className={styles.examples} aria-label="Examples">
                {svc.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })()}

      {/* Why work with us */}
      <div className={styles.whyBox} aria-labelledby="why-title">
        <h3 id="why-title" className={styles.whyTitle}>Why Hosts Choose Sarina</h3>
        <ul className={styles.bullets}>
          <li><strong>Seasonal sourcing:</strong> trusted relationships with local farms and markets.</li>
          <li><strong>Transparent planning:</strong> clear proposals, rentals, and staffing details up front.</li>
          <li><strong>Respectful service:</strong> professional team members who treat your home like their own.</li>
          <li><strong>Thoughtful follow-up:</strong> reheating notes, leftovers packed, and recipes to revisit.</li>
        </ul>
      </div>

      {/* CTA band */}
      <section className={styles.ctaBand} aria-labelledby="services-cta">
        <div className={styles.ctaBandInner}>
          <h2 id="services-cta" className={styles.h2w}>Not sure which path suits your gathering?</h2>
          <p className={styles.hintw}>Share your plans and we will recommend a menu, timeline, and staffing approach.</p>
          <div className={styles.sectionCtaRow}>
            <Link className="btn btn--secondary" to="/contact">Start the Conversation</Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
