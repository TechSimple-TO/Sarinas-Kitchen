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
    name: 'Alex A.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque felis vitae mauris fermentum, in sagittis mi hendrerit.',
  },
  {
    name: 'Brianna B.',
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
  },
  {
    name: 'Carter C.',
    quote:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.',
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
            Welcome to Your Company Name
          </h2>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>

      {/* Services snapshot: four cards linking to the Services page */}
      <section className={styles.section} aria-labelledby="services-title">
        <div className={styles.card}>
          <h2 id="services-title" className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.sectionLead}>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus.
          </p>

          <ul className={styles.cardGrid} role="list">
            <li className={styles.card}>
              <img className={styles.cardImg} src={placeholderImg} alt="Service placeholder" loading="lazy" decoding="async" />
              <h3 className={styles.cardHeading}>Service One</h3>
              <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
            </li>
            <li className={styles.card}>
              <img className={styles.cardImg} src={placeholderImg} alt="Service placeholder" loading="lazy" decoding="async" />
              <h3 className={styles.cardHeading}>Service Two</h3>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </li>
            <li className={styles.card}>
              <img className={styles.cardImg} src={placeholderImg} alt="Service placeholder" loading="lazy" decoding="async" />
              <h3 className={styles.cardHeading}>Service Three</h3>
              <p>Etiam porta sem malesuada magna mollis euismod.</p>
            </li>
            <li className={styles.card}>
              <img className={styles.cardImg} src={placeholderImg} alt="Service placeholder" loading="lazy" decoding="async" />
              <h3 className={styles.cardHeading}>Service Four</h3>
              <p>Cras mattis consectetur purus sit amet fermentum.</p>
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
          <h2 id="process-title" className={styles.sectionTitle}>How It Works</h2>
          <ol className={styles.steps} aria-label="Our three-step process">
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div>
                <h3 className={styles.stepTitle}>Consult</h3>
                <p>Phasellus euismod, urna eu tincidunt consequat, nisi nisl aliquet ipsum.</p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div>
                <h3 className={styles.stepTitle}>Create</h3>
                <p>Vestibulum id ligula porta felis euismod semper.</p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div>
                <h3 className={styles.stepTitle}>Launch</h3>
                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA band: high-contrast nudge before testimonials */}
      <section className={styles.ctaBand} aria-labelledby="cta-title">
        <div className={styles.ctaBandInner}>
          <h2 className={styles.h2w} id="cta-title">Ready to start your project?</h2>
          <div className={styles.sectionCtaRow}>
            <Link className="btn btn--secondary" to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials: semantic list for improved screen reader navigation */}
      <section className={styles.testimonials} aria-labelledby="testimonials-title">
        <div className={styles.card}>
          <h2 id="testimonials-title">Client Feedback</h2>
          <p>Use this area to highlight quotes from your clients once real copy is available.</p>

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
                  Read full review
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
            <h3 className={styles.modalTitle} id="review-title">Review from {activeTestimonial.name}</h3>
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
