// src/Layout.tsx

// TODO(nick): Collapse nav to a drawer with focus trapping for better a11y on mobile.
// TODO(nick): Add keyboard handling (Esc closes menu).

/**
 * Layout.tsx
 * Global site shell: header (brand + nav), centered <main>, and footer.
 * Wraps all routed pages (see App.tsx). Keeps global styles in Brand.scss.
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Brand.scss';
import logo from './assets/Logo_1.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Track the mobile menu open/closed state.
  const [open, setOpen] = useState(false);

  // useLocation gives the current URL so we can highlight the active item
  // and also close the mobile menu when navigation occurs.
  const { pathname } = useLocation();

  // Helper to attach an "active" class when the current path matches.
  const isActive = (match: string | string[]) => {
    const targets = Array.isArray(match) ? match : [match];
    return targets.includes(pathname) ? 'active' : '';
  };

  // Close the mobile menu when the route changes (prevents sticky-open menu)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Header: full-width bar with an inner centered container */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Brand "home" link.
             Using <Link> avoids a full page reload compared to <a href="/">. */}
          <Link className="brand" to="/" aria-label="Sarina's Kitchen home">
            <img className="brand-logo" src={logo} alt="Sarina's Kitchen logo" />
            <span className="brand-wordmark">
              Sarina's Kitchen
              <span className="brand-tagline">Private chef • teacher • caterer</span>
            </span>
          </Link>

          {/* Mobile menu toggle (visible at small widths via CSS) */}
          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          {/* Primary navigation.
             id ties to aria-controls; role & aria-label help screen readers. */}
          <nav
            id="site-navigation"
            className={`nav-links ${open ? 'open' : ''}`}
            role="navigation"
            aria-label="Primary"
          >
            {/* Clicking a link triggers a route change; useEffect above will close the menu */}
            <Link className={isActive('/')} to="/">Home</Link>
            <Link className={isActive('/services')} to="/services">Services</Link>
            <Link className={isActive(['/bio', '/about'])} to="/bio">Bio</Link>
            <Link className={isActive('/contact')} to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Routed page content goes here; Layout supplies spacing & centering via .page/.container */}
      <main className="page container">{children}</main>

      {/* Footer with a simple contact line */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sarina's Kitchen. All rights reserved.</p>
          <p>
            Serving the Greater Toronto Area &middot;{' '}
            <a href="mailto:hello@sarinaskitchen.ca">hello@sarinaskitchen.ca</a> &middot;{' '}
            <a href="tel:14165550126">416-555-0126</a>
          </p>
        </div>
      </footer>
    </>
  );
}
