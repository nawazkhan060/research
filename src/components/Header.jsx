import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll for active section (only on homepage)
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['#home', '#why-choose-us', '#why-publish', '#contact'];
        const scrollPosition = window.scrollY + 80;

        for (const section of sections) {
          const element = document.querySelector(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };



  // Handle smooth scroll for anchor links (only on homepage)
  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/${href}`;
      return;
    }

    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    setActiveSection(href);
  };

  // Handle Logo Click → Go to Homepage
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link 
            to="/" 
            className="logo" 
            onClick={handleLogoClick} 
            aria-label="Build Softech Home"
          >
            <div className="logo-wrapper">
              <img 
                src="./logo.png" 
                alt="Build Softech Logo"
                className="logo-image"
              />
              <div className="logo-text">
                <h3>Build Softech</h3>
                <span>Research Platform</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation + Auth Buttons */}
          <div className="desktop-nav">
            <nav className="nav">
              <ul className="nav-list">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`nav-link ${activeSection === href ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, href)}
                      aria-current={activeSection === href ? 'page' : undefined}
                    >
                      {label}
                      {activeSection === href && <span className="link-underline"></span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav-buttons desktop-buttons">
              <Link
                to="/login"
                className="btn btn-secondary"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Login to your account"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Create a new account"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu" id="mobile-nav">
              <nav className="mobile-nav">
                <ul className="mobile-nav-list">
                  {navItems.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className={`nav-link ${activeSection === href ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, href)}
                        aria-current={activeSection === href ? 'page' : undefined}
                      >
                        {label}
                        {activeSection === href && <span className="link-underline"></span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mobile-auth">
                <Link
                  to="/login"
                  className="btn btn-secondary btn-block"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Login to your account"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-block"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Create a new account"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;


