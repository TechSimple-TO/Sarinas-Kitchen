/**
 * Contact.tsx
 * Polished contact form template with inline validation and placeholder content.
 * Uses EmailJS environment variables:
 *  - VITE_EMAILJS_SERVICE_ID
 *  - VITE_EMAILJS_TEMPLATE_ID
 *  - VITE_EMAILJS_PUBLIC_KEY
 */

import React, { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

type FormState = { name: string; email: string; title: string; message: string };

const initialForm: FormState = { name: '', email: '', title: '', message: '' };

// Simple email validator
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    title: false,
    message: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((t) => ({ ...t, [e.target.name as keyof FormState]: true }));

  // Compute field-level errors (only strings for easy display)
  const errors = useMemo(() => {
    return {
      name: form.name.trim() ? '' : 'Please enter your name.',
      email: form.email.trim()
        ? isEmail(form.email)
          ? ''
          : 'Please enter a valid email (e.g., name@example.com).'
        : 'Email is required.',
      title: form.title.trim() ? '' : 'Please add a short subject.',
      message: form.message.trim() ? '' : 'Please tell us how we can help.',
    } as Record<keyof FormState, string>;
  }, [form]);

  // Form valid if all error strings are empty
  const formValid = !Object.values(errors).some(Boolean);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mark all as touched to reveal any hidden errors
    setTouched({ name: true, email: true, title: true, message: true });

    if (!formValid) {
      setStatus({ ok: false, msg: 'Please fix the highlighted fields.' });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS environment variables');
      }

      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus({ ok: true, msg: 'Thanks! Your message was sent successfully.' });
      setForm(initialForm);
      setTouched({ name: false, email: false, title: false, message: false });
    } catch (err) {
      console.error('EmailJS error', err);
      setStatus({
        ok: false,
        msg: 'Something went wrong sending your message. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.wrapper} aria-labelledby="contact-title">
      {/* Left: Form card */}
      <div className={styles.formCard}>
        <h2 id="contact-title" className={styles.title}>
          Let's Cook Together
        </h2>
        <p className={styles.lead}>
          Tell us about your event, class idea, or dream menu. We'll follow up within two business
          days with availability and a custom proposal.
        </p>

        <form onSubmit={onSubmit} noValidate aria-describedby="form-status" className={styles.form}>
          {/* Name */}
          <div className={styles.group}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={`${styles.input} ${touched.name && errors.name ? styles.invalid : ''}`}
              name="name"
              value={form.name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
            {touched.name && errors.name && (
              <small role="alert" className={styles.errorText}>{errors.name}</small>
            )}
          </div>

          {/* Email */}
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className={`${styles.input} ${touched.email && errors.email ? styles.invalid : ''}`}
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
              autoCapitalize="none"
              required
            />
            {touched.email && errors.email && (
              <small role="alert" className={styles.errorText}>{errors.email}</small>
            )}
          </div>

          {/* Title */}
          <div className={styles.group}>
            <label htmlFor="title">Subject</label>
            <input
              id="title"
              className={`${styles.input} ${touched.title && errors.title ? styles.invalid : ''}`}
              name="title"
              value={form.title}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Short summary (e.g., spring dinner party)"
              required
            />
            {touched.title && errors.title && (
              <small role="alert" className={styles.errorText}>{errors.title}</small>
            )}
          </div>

          {/* Message */}
          <div className={styles.group}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className={`${styles.textarea} ${touched.message && errors.message ? styles.invalid : ''}`}
              name="message"
              value={form.message}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Share the occasion, date, guest count, and any must-have dishes..."
              required
            />
            {touched.message && errors.message && (
              <small role="alert" className={styles.errorText}>{errors.message}</small>
            )}
          </div>

          {/* Submit */}
          <div className={styles.actions}>
            <button className="btn btn--primary" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status region (success/error) */}
          <div id="form-status" aria-live="polite" className={styles.statusRegion}>
            {status && (
              <p className={`${styles.status} ${status.ok ? styles.success : styles.error}`}>
                {status.msg}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Right: Info card */}
      <aside className={styles.infoCard} aria-label="Contact information">
        <h3 className={styles.infoTitle}>Prefer a direct hello?</h3>
        <p>
          Reach Sarina at{' '}
          <a href="mailto:hello@sarinaskitchen.ca" className={styles.link}>
            hello@sarinaskitchen.ca
          </a>{' '}
          or call <a className={styles.link} href="tel:14165550126">416-555-0126</a>.
        </p>

        <h4 className={styles.infoSub}>Hours</h4>
        <p>Tuesday&nbsp;&ndash;&nbsp;Sunday: 10:00&ndash;20:00 &middot; Mondays reserved for market days</p>

        <h4 className={styles.infoSub}>Service Area</h4>
        <p>Greater Toronto Area, York Region, and cottage getaways by request.</p>

        <div className={styles.noteBox}>
          <p>
            Include allergies, dietary preferences, venue address, and desired date so we can build a
            detailed quote on the first reply.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Contact;
