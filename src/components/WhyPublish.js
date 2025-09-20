import React, { useState, useEffect } from 'react';
import './WhyPublish.css';

const WhyPublish = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Increase Visibility',
      description: 'Get your research noticed by a global audience of academics, researchers, and industry professionals.',
      color: '#4f46e5',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9999 15.5904 20.2 15.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Build Networks',
      description: 'Connect with like-minded researchers and build valuable professional relationships in your field.',
      color: '#7c3aed',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Career Advancement',
      description: 'Published research enhances your academic profile and opens doors to new opportunities.',
      color: '#06b6d4',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Share Knowledge',
      description: 'Contribute to the advancement of science and help solve real-world problems through your research.',
      color: '#10b981',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Academic Recognition',
      description: 'Gain recognition from peers and establish yourself as an expert in your research domain.',
      color: '#f59e0b',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Global Impact',
      description: 'Make a difference on a global scale by sharing your findings with the international research community.',
      color: '#ef4444',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Submit Your Paper',
      description: 'Upload your research paper through our secure submission portal with detailed metadata.',
    },
    {
      step: '2',
      title: 'Editor Assignment',
      description: 'Our admin assigns qualified editors who will manage the review process for your paper.',
    },
    {
      step: '3',
      title: 'Peer Review',
      description: 'Expert reviewers evaluate your work and provide constructive feedback for improvement.',
    },
    {
      step: '4',
      title: 'Publication',
      description: 'Once approved, your paper is published and made available to the global research community.',
    },
  ];

  return (
    <section id="why-publish" className="why-publish" aria-labelledby="why-publish-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="why-publish-heading" className="section-title">Why Publish with Us?</h2>
          <p className="section-subtitle">
            Publishing your research with Build Softech opens doors to numerous opportunities and helps you make a meaningful impact in your field.
          </p>
        </div>

        {/* INTERACTIVE BENEFITS EXPLORER — REPLACES STATIC CARDS */}
        <div className="benefits-explorer">
          <div className="benefits-tabs">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                className={`benefit-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                aria-label={`View benefit: ${benefit.title}`}
                aria-selected={activeTab === index}
                role="tab"
              >
                <div
                  className="tab-icon"
                  style={{ color: activeTab === index ? benefit.color : 'currentColor' }}
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
                <span className="tab-title">{benefit.title}</span>
              </button>
            ))}
          </div>

          <div className="benefit-content">
            <div
              className="benefit-icon-large"
              style={{ background: `linear-gradient(135deg, ${benefits[activeTab].color} 0%, ${shadeColor(benefits[activeTab].color, -20)} 100%)` }}
              aria-hidden="true"
            >
              {benefits[activeTab].icon}
            </div>
            <h3 className="benefit-title">{benefits[activeTab].title}</h3>
            <p className="benefit-description">{benefits[activeTab].description}</p>
          </div>
        </div>

        {/* Process Section */}
        <div className="process-section">
          <h3 className="process-title">Our Publication Process</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && <div className="step-connector" aria-hidden="true"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section" aria-labelledby="cta-heading">
          <div className="cta-content">
            <h3 id="cta-heading">Ready to Publish Your Research?</h3>
            <p>Join thousands of researchers who trust Build Softech for their publication needs.</p>
            <div className="cta-buttons">
              <a href="#register" className="cta-button cta-button-primary" aria-label="Start your publishing journey">
                Start Your Journey
              </a>
              <a href="#contact" className="cta-button cta-button-secondary" aria-label="Contact our publishing team">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper to darken a hex color for gradient
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

export default WhyPublish;