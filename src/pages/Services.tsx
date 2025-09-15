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
    title: 'Strategy & Planning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
    img: placeholderImg,
    details:
      'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    examples: [
      'Discovery workshops and goal alignment',
      'Roadmaps and milestone planning',
      'Persona development and user journeys',
      'Budget estimates and scope outlines',
    ],
  },
  {
    title: 'Design & Content',
    description:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Aenean lacinia bibendum nulla sed consectetur.',
    img: placeholderImg,
    details:
      'Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
    examples: [
      'Brand identity refreshes',
      'Page layouts and component libraries',
      'Copywriting and content planning',
      'Asset production guidelines',
    ],
  },
  {
    title: 'Development Sprints',
    description:
      'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.',
    img: placeholderImg,
    details:
      'Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    examples: [
      'Component implementation',
      'CMS setup and configuration',
      'Integration with third-party APIs',
      'Performance and accessibility passes',
    ],
  },
  {
    title: 'Support & Maintenance',
    description:
      'Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.',
    img: placeholderImg,
    details:
      'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    examples: [
      'Scheduled check-ins and updates',
      'Content publishing assistance',
      'Analytics snapshots and reports',
      'Training sessions for handoff',
    ],
  },
  {
    title: 'Optimization',
    description:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.',
    img: placeholderImg,
    details:
      'Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.',
    examples: [
      'Site speed tuning',
      'Conversion rate reviews',
      'Search optimization checklists',
      'Automation and workflow tweaks',
    ],
  },
  {
    title: 'Workshops & Training',
    description:
      'Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.',
    img: placeholderImg,
    details:
      'Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.',
    examples: [
      'Team onboarding sessions',
      'Tooling walkthroughs',
      'Process documentation reviews',
      'Q&A office hours',
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
        <h2 id="services-title" className={styles.title}>Our Services</h2>
        <p className={styles.lead}>
          Use these cards as placeholders for your actual offerings. Replace each block with the
          description, outcomes, and assets that match your business.
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
                  className={`btn ${isExpanded ? 'btn--primary' : 'btn--primary'}`}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggle(s.title)}
                >
                  {isExpanded ? 'Hide Details' : 'Learn More'}
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
        <h3 id="why-title" className={styles.whyTitle}>Why Work With Our Team</h3>
        <ul className={styles.bullets}>
          <li><strong>Clear process:</strong> share what to expect before you dive in.</li>
          <li><strong>Flexible scope:</strong> adjust deliverables as your needs evolve.</li>
          <li><strong>Open communication:</strong> keep stakeholders in the loop.</li>
          <li><strong>Measurable outcomes:</strong> define success metrics early.</li>
        </ul>
      </div>

      {/* CTA band */}
      <section className={styles.ctaBand} aria-labelledby="services-cta">
        <div className={styles.ctaBandInner}>
          <h2 id="services-cta" className={styles.h2w}>Need help choosing a service?</h2>
          <p className={styles.hintw}>Reach out with your goals and timeline to get a tailored plan.</p>
          <div className={styles.sectionCtaRow}>
            <Link className="btn btn--secondary" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
