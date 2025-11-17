/**
 * About.tsx
 * Bio page sharing Sarina's story, mission, and approach.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import aboutLogo from '../assets/Logo_1.png';

const About: React.FC = () => (
  // Wrapper applies spacing + fade-in animation
  <section className={styles.wrapper}>
    {/* Page title */}
    <div className={styles.introBox}>
      <h2 className={styles.title}>Meet Sarina</h2>

      {/* Lead paragraph: quick, friendly summary */}
      <p className={styles.lead}>
        Sarina DiLuca is the chef and storyteller behind Sarina's Kitchen. She grew up rolling pasta
        alongside her Nonna in Vaughan and refined her craft in boutique hotels and farm-to-table
        kitchens across Ontario.
      </p>
      <p className={styles.lead}>
        Her mission is simple: bring the warmth of Sunday suppers to modern celebrations while making
        Italian cooking approachable for every home cook.
      </p>
    </div>

    {/* Photo just below the About section */}
    <img
      className={styles.aboutImg}
      src={aboutLogo}
      alt="Sarina's Kitchen logo"
      loading="lazy"
    />

    {/* Content is organized into small, scannable sections for readability */}

    {/* Mission / What we do */}
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Sarina's Story</h3>
      <p>
        Sarina believes every memorable meal begins with intention. After culinary school and years
        spent on the line in Toronto's restaurant scene, she launched Sarina's Kitchen to bring
        restaurant polish to at-home dining.
      </p>
      <p>
        Today she pairs seasonal ingredients with Italian roots, championing local farmers and
        teaching guests why the best dishes start with good company.
      </p>
    </article>

    {/* Services snapshot (lightweight-your full Services page does the deep dive) */}
    <div className={styles.cardGrid}>
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Our Philosophy</h3>
        <ul className={styles.list}>
          <li>Seasonal menus built around Ontario farms and Italian staples.</li>
          <li>Respect for dietary needs with creative, satisfying alternatives.</li>
          <li>Hospitality that makes every guest feel like family.</li>
        </ul>
        <p className={styles.note}>
          Explore the <Link to="/services">Services</Link> page to see how this comes to life for
          dinners, classes, and intimate catering.
        </p>
      </article>

      {/* Teaching & mentorship */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Teaching Style</h3>
        <ul className={styles.list}>
          <li>Hands-on lessons that keep groups small so everyone cooks.</li>
          <li>Chef techniques translated into approachable steps for home kitchens.</li>
          <li>Recipes, playlists, and shopping lists delivered after every class.</li>
        </ul>
      </article>

      {/* Highlights */}
      <article className={styles.card}>
        <h3 className={styles.cardTitle}>Highlights</h3>
        <ul className={styles.list}>
          <li>Red Seal certified chef with a decade in boutique catering.</li>
          <li>Featured instructor at the Toronto Culinary Arts Collective.</li>
          <li>Partnered with local farms to minimize waste and source responsibly.</li>
        </ul>
        <p className={styles.note}>
          Guests often note the balance of comfort and discovery in every menu.
        </p>
      </article>
    </div>

    {/* Service area / Contact CTA */}
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Where You'll Find Us</h3>
      <p>
        Sarina's Kitchen serves the Greater Toronto Area and will gladly travel farther for special
        gatherings. Travel fees are calculated transparently based on distance and staffing needs.
      </p>
      <p>
        Whether it's a backyard celebration, condo kitchen, or rented venue, we tailor the setup so
        you can savor every moment with your guests.
      </p>
      <div className={styles.ctaRow}>
        <Link className="btn btn--primary" to="/contact">Request Availability</Link>
      </div>
    </article>
  </section>
);

export default About;
