/**
 * Home.tsx
 * Landing page template populated with placeholder copy and imagery.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

import placeholderImg from '../assets/placeholder.jpg';

type Testimonial = { name: string; quote: string };

const testimonials: Testimonial[] = [
  {
    name: 'Maya L.',
    quote:
      "Sarina transformed our anniversary dinner into a Tuscan getaway. Every course told a story and she accommodated our family's dietary needs with ease.",
  },
  {
    name: 'Jordan P.',
    quote:
      'Her pasta workshop was the highlight of our team retreat. Sarina is patient, encouraging, and full of chef tips you can actually use at home.',
  },
  {
    name: 'Elena G.',
    quote:
      'We hosted a garden party and guests are still talking about the lemon ricotta crostini. Thoughtful menu, beautiful presentation, effortless evening.',
  },
];

// Helper: truncate a string to N words (adds an ellipsis when truncated)
const truncateWords = (text: string, count: number) => {
  const words = text.trim().split(/\s+/);
  return words.length <= count ? text : words.slice(0, count).join(' ') + '...';
};

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const openReview = (t: Testimonial) => {
    setActiveTestimonial(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTestimonial(null);
  };

  useEffect(() => {
    if (!modalOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [modalOpen]);

  return (
    <>
      {/* Intro: simple welcome block in a card-style wrapper */}
      <section className={styles.wrapper} aria-labelledby="home-title">
        <div className={styles.intro}>
          <h2 id="home-title" className={styles.title}>
            Welcome to Sarina's Kitchen
          </h2>
          <p className={styles.lead}>
            Thoughtfully crafted, Italian-inspired cuisine for intimate dinners, joyful celebrations,
            and curious home cooks across the Greater Toronto Area.
          </p>
          <p className={styles.lead}>
            Chef Sarina brings the farmers' market to your table with seasonal menus, warm hospitality,
            and a teacher's heart.
          </p>
        </div>
      </section>

      {/* Services snapshot: four cards linking to the Services page */}
      <section className={styles.section} aria-labelledby="services-title">
        <div className={styles.card}>
          <h2 id="services-title" className={styles.sectionTitle}>Signature Offerings</h2>
          <p className={styles.sectionLead}>
            From in-home chef dinners to playful cooking lessons and petite celebrations, Sarina curates
            experiences that feel like gathering around a well-loved family table.
          </p>

          <ul className={styles.cardGrid} role="list">
            <li className={styles.card}>
              <img
                className={styles.cardImg}
                src={placeholderImg}
                alt="Chef plating handmade pasta"
                loading="lazy"
                decoding="async"
              />
              <h3 className={styles.cardHeading}>Private Cooking Experiences</h3>
              <p>
                Multi-course menus prepared in your kitchen, complete with sommelier-style pairing ideas and
                effortless clean-up.
              </p>
            </li>
            <li className={styles.card}>
              <img
                className={styles.cardImg}
                src={placeholderImg}
                alt="Hands shaping fresh gnocchi"
                loading="lazy"
                decoding="async"
              />
              <h3 className={styles.cardHeading}>Hands-On Teaching</h3>
              <p>
                Interactive classes for couples, friends, and teams who want to build confidence with the
                foundations of rustic Italian cooking.
              </p>
            </li>
            <li className={styles.card}>
              <img
                className={styles.cardImg}
                src={placeholderImg}
                alt="Seasonal spread of shared plates"
                loading="lazy"
                decoding="async"
              />
              <h3 className={styles.cardHeading}>Boutique Catering</h3>
              <p>
                Intimate gatherings up to 40 guests featuring seasonal small plates, vibrant grazing boards, and
                warm, attentive service.
              </p>
            </li>
          </ul>
          <div className={styles.sectionCtaRow} style={{ justifyContent: 'center' }}>
            <Link className="btn btn--primary" to="/services">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Process: three simple steps */}
      <section className={styles.section} aria-labelledby="process-title">
        <div className={styles.card}>
          <h2 id="process-title" className={styles.sectionTitle}>How We Bring Your Menu to Life</h2>
          <ol className={styles.steps} aria-label="Our three-step process">
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div>
                <h3 className={styles.stepTitle}>Connect</h3>
                <p>
                  Share your celebration, cravings, and any dietary needs. We love hearing the stories behind your
                  gathering.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div>
                <h3 className={styles.stepTitle}>Curate</h3>
                <p>
                  Sarina designs a seasonal menu and shopping list, then coordinates rentals or staffing as needed so
                  you can relax.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div>
                <h3 className={styles.stepTitle}>Celebrate</h3>
                <p>
                  Enjoy the evening while we cook, serve, and leave your kitchen sparkling. All that is left is the
                  last toast.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA band: high-contrast nudge before testimonials */}
      <section className={styles.ctaBand} aria-labelledby="cta-title">
        <div className={styles.ctaBandInner}>
          <h2 className={styles.h2w} id="cta-title">Ready to cook something unforgettable?</h2>
          <div className={styles.sectionCtaRow}>
            <Link className="btn btn--secondary" to="/contact">Plan Your Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials: semantic list for improved screen reader navigation */}
      <section className={styles.testimonials} aria-labelledby="testimonials-title">
        <div className={styles.card}>
          <h2 id="testimonials-title">Kind Words from the Table</h2>
          <p>
            A taste of the celebrations, classes, and evenings friends have shared with Sarina's Kitchen.
          </p>

          <ul className={styles.cardGrid}>
            {testimonials.map((t, i) => (
              <li className={styles.card} key={t.name}>
                <p className={styles.stars} aria-label="5 out of 5 stars">*****</p>
                <blockquote className={styles.quote}>
                  <p id={`quote-${i}`}>&ldquo;{truncateWords(t.quote, 12)}&rdquo;</p>
                </blockquote>
                <footer className={styles.name}>- {t.name}</footer>
                <button
                  type="button"
                  className="btn btn--primary"
                  aria-haspopup="dialog"
                  aria-controls="review-dialog"
                  onClick={() => openReview(t)}
                >
                  Read full story
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {modalOpen && activeTestimonial && (
        <div className={styles.modalOverlay} role="presentation" onClick={closeModal}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-title"
            aria-describedby="review-body"
            id="review-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.modalTitle} id="review-title">Story from {activeTestimonial.name}</h3>
            <blockquote className={styles.quote}>
              <p id="review-body">{activeTestimonial.quote}</p>
            </blockquote>
            <div className={styles.modalActions}>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={closeModal}
                ref={closeBtnRef}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
