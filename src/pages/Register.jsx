import React, { useState, useEffect } from 'react';
import './Register.css';

const Register = () => {
  const [userType, setUserType] = useState('author');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('auth-loaded');
    return () => document.body.classList.remove('auth-loaded');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (passwordStrength < 3) {
      alert('Please use a stronger password');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Account created successfully as ${userType}!`);
    }, 1800);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Signed up with ${provider}`);
    }, 1200);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return '#9ca3af';
      case 1: return '#ef4444';
      case 2: return '#f59e0b';
      case 3: return '#3b82f6';
      case 4: return '#10b981';
      default: return '#9ca3af';
    }
  };

  const getStrengthText = () => {
    switch (passwordStrength) {
      case 0: return '';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <section id="register" className="register-section" aria-labelledby="register-heading">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="register-wrapper">
          <div className="register-card">
            <div className="register-header">
              <h2 id="register-heading" className="register-title">Join Our Community</h2>
              <p className="register-subtitle">Create your account as an {userType}</p>
            </div>

            {/* Role Selector */}
            <div className="role-selector">
              
              <div className="role-options">
                {[
                  { value: 'author', label: 'Author', color: '#4f46e5' },
                  { value: 'editor', label: 'Editor', color: '#7c3aed' },
                  { value: 'reviewer', label: 'Reviewer', color: '#06b6d4' },
                ].map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    className={`role-option ${userType === role.value ? 'active' : ''}`}
                    style={{
                      borderColor: userType === role.value ? role.color : '',
                      color: userType === role.value ? role.color : '',
                    }}
                    onClick={() => setUserType(role.value)}
                    aria-pressed={userType === role.value}
                  >
                    <span className="role-label">{role.label}</span>
                    {userType === role.value && (
                      <span className="active-indicator"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="divider">
              <span>or continue with</span>
            </div>

            {/* Social Login */}
            <div className="social-login">
              <button
                type="button"
                className="social-button google"
                onClick={() => handleSocialLogin('Google')}
                disabled={isLoading}
                aria-label="Sign up with Google"
              >
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  <>
                    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </button>

             
            </div>

            <div className="divider">
              <span>or register with email</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Dr. Jane Researcher"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="you@institution.edu"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-input"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={togglePassword}
                    tabIndex="-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
                      </svg>
                    )}
                  </button>
                  <div className="input-glow"></div>
                </div>
                {formData.password && (
                  <div className="password-strength">
                    <div
                      className="strength-bar"
                      style={{
                        width: `${(passwordStrength / 4) * 100}%`,
                        backgroundColor: getStrengthColor(),
                      }}
                    ></div>
                    <span className="strength-text" style={{ color: getStrengthColor() }}>
                      {getStrengthText()}
                    </span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-input"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                  />
                  <div className="input-glow"></div>
                </div>
              </div>

              <button
                type="submit"
                className="register-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loader small"></div>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="register-footer">
              <p>
                Already have an account?{' '}
                <a href="/login" className="register-link">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;