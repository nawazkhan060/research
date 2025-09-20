import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 12L10.5 14.5L16 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Expert Review Process',
      description:
        'Our platform connects you with qualified reviewers and editors who are experts in their respective fields, ensuring high-quality peer review.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Fast Turnaround',
      description:
        'Streamlined submission and review process with automated workflows that reduce publication time significantly.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            x="3"
            y="11"
            width="18"
            height="11"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path
            d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Secure Platform',
      description:
        'Advanced security measures protect your research data and intellectual property throughout the publication process.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M18 20V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 20V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Analytics Dashboard',
      description:
        "Track your paper's progress, view detailed analytics, and monitor citation metrics in real-time.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M2 12H22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Global Reach',
      description:
        'Connect with researchers, editors, and reviewers from around the world through our international network.',
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: '24/7 Support',
      description:
        'Round-the-clock customer support to assist you with any questions or issues during your publication journey.',
    },
  ];



  return (
    <section
      id="why-choose-us"
      className="why-choose-us"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="why-choose-us-heading" className="section-title">
            Why Choose Build Softech?
          </h2>
          <p className="section-subtitle">
            We provide a comprehensive platform that streamlines the research
            publication process with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid" role="list">
          {features.map((feature, index) => (
            <article
              key={index}
              className="feature-card"
              tabIndex="0"
              role="listitem"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 id={`feature-title-${index}`} className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        
      </div>
    </section>
  );
};

export default WhyChooseUs;