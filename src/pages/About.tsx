/**
 * About.tsx
 * Expanded "About" page template filled with placeholder copy.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import placeholderImg from '../assets/placeholder.jpg';

const About: React.FC = () => (
  // Wrapper applies spacing + fade-in animation
  <section className={styles.wrapper}>
    {/* Page title */}
    <div className={styles.introBox}>
      <h2 className={styles.title}>About Our Studio</h2>

      {/* Lead paragraph: quick, friendly summary */}
      <p className={styles.lead}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a
        pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </div>

    {/* Photo just below the About section */}
    <img
      className={styles.aboutImg}
      src={placeholderImg}
      alt="Placeholder team"
      loading="lazy"
    />

    {/* Content is organized into small, scannable sections for readability */}

    {/* Mission / What we do */}
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Our Mission</h3>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
        bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam.
      </p>
    </article>

    {/* Services snapshot (lightweight-your full Services page does the deep dive) */}
    <div className={styles.cardGrid}>
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>What We Offer</h3>
        <ul className={styles.list}>
          <li>Service planning and discovery workshops</li>
          <li>Design and development sprints</li>
          <li>Ongoing support retainers</li>
          <li>Reporting and optimization reviews</li>
        </ul>
        <p className={styles.note}>
          See the <Link to="/services">Services</Link> page for placeholders you can swap with real
          offerings.
        </p>
      </article>

      {/* Values / How we work */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>How We Work</h3>
        <ul className={styles.list}>
          <li><strong>Collaborative:</strong> we iterate with your team from start to finish.</li>
          <li><strong>Transparent:</strong> timelines and deliverables stay visible at every step.</li>
          <li><strong>Adaptive:</strong> engagements scale to match your budget and goals.</li>
          <li><strong>Supportive:</strong> documentation and handoff keep transitions smooth.</li>
        </ul>
      </article>

      {/* Credentials / Testimonials nudge */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Why Clients Choose Us</h3>
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper.
        </p>
        <p className={styles.note}>
          Swap in real testimonials once you launch your first project.
        </p>
      </article>
    </div>

    {/* Service area / Contact CTA */}
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Where We Work</h3>
      <p>
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Use this space to describe your
        service regions or remote availability.
      </p>
      <div className={styles.ctaRow}>
        <Link className="btn btn--primary" to="/contact">Get in Touch</Link>
      </div>
    </article>
  </section>
);

export default About;
