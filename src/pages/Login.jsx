import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [userType, setUserType] = useState('author');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('auth-loaded');
    return () => document.body.classList.remove('auth-loaded');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Logging in as:', userType, { email, password });
      alert(`Login successful as ${userType}`);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Signed in with ${provider}`);
    }, 1200);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section id="login" className="login-section" aria-labelledby="login-heading">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="login-wrapper">
          <div className="login-card">
            <div className="login-header">
              <h2 id="login-heading" className="login-title">Welcome Back</h2>
              <p className="login-subtitle">Sign in to continue your research journey</p>
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
                aria-label="Sign in with Google"
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
              <span>or sign in with email</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
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
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loader small"></div>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="login-footer">
              <p>
                Don’t have an account?{' '}
                <a href="/register" className="login-link">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;