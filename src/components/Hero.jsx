import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-background">
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>

      <div className="container">
        <div className={`hero-content hero-text ${isVisible ? 'fade-in' : ''}`}>
          <h1 id="hero-title" className="hero-title">
            Publish with <span className="highlight">Confidence</span>
          </h1>
          <p className="hero-subtitle">
            A seamless platform for authors, reviewers, and editors.
            Transparent workflows. Trusted by researchers worldwide.
          </p>

          <div className="hero-actions">
            <Link
              to="/register"
              className="btn-primary"
              aria-label="Start publishing your research"
            >
              <span>Start Publishing</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="btn-icon"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              className="btn-text"
              onClick={() => handleScrollTo('#why-choose-us')}
              aria-label="Learn how our platform works"
            >
              Learn More
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="btn-icon"
                aria-hidden="true"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>500+</strong>
              <span>Published Papers</span>
            </div>
            <div className="stat">
              <strong>200+</strong>
              <span>Expert Reviewers</span>
            </div>
            <div className="stat">
              <strong>98%</strong>
              <span>Researcher Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
