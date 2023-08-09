import React from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { Title } from '../Title';
import styles from './Authentication.module.scss';
import { Subtitle } from '../Subtitle';

export function Authentication() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [focused, setFocused] = useState({
    emailFocused: false,
    passwordFocused: false,
    confirmPasswordFocused: false,
  });
  const { theme } = useContext(ThemeContext);
  const location = useLocation().pathname;
  const isMobile = true;

  const formData = [
    {
      title: 'Login',
      pathTo: '/sing-up',
      subtitle: `Welcome back! ${isMobile ? '\n' : ''} Log In with your Email`,
      buttonText: 'Log in',
      singHint: `${
        isMobile
          ? 'Don’t have an  Account?'
          : 'Don’t have a Tezos Explorer Account?'
      }`,
      linkTo: 'Sing up Now?',
      errorEmail: 'Email address must contain the @ character',
      errorPassword:
        'Password should contain both letter and number, with minimum length of 8 characters ',
      errorConfirmPassword: 'Passwords do not match',
      patternConfirmPassword: values.password,
      required: true,
      patternPassword: '^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$',
    },
    {
      title: 'Sing up',
      pathTo: '/login',
      subtitle: 'Get Started by Signing Up Now',
      buttonText: 'Create an account',
      singHint: 'Already have an Account?',
      linkTo: 'Log In',
      errorEmail: 'Email address must contain the @ character',
      errorPassword:
        'Password should contain both letter and number, with minimum length of 8 characters',
      errorConfirmPassword: 'Passwords do not match',
      patternConfirmPassword: values.password,
      required: true,
      patternPassword: '^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$',
    },
  ];

  const isLogin = location === '/login';
  const currentForm = isLogin ? formData[0] : formData[1];

  const {
    title,
    pathTo,
    subtitle,
    buttonText,
    singHint,
    linkTo,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
    patternConfirmPassword,
    required,
    patternPassword,
  } = currentForm;

  function handleShowPassword(e: React.SyntheticEvent) {
    const currentInp = e.currentTarget.previousSibling as HTMLInputElement;
    const type = currentInp.type;

    currentInp.type = type === 'password' ? 'text' : 'password';
  }

  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
    console.log(values);
  }

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setFocused({ ...focused, [`${e.currentTarget.name}Focused`]: true });
    console.log(focused);
  };

  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.title}>
          <Title text={title} />
          <Subtitle text={subtitle} />
        </div>
        <div className={`block-${theme} ${styles['form-wrapper']}`}>
          <form className={`${styles.form}`}>
            <label className={styles.label} htmlFor="mail">
              Email Address
            </label>
            <input
              className={`${styles.input} ${styles[theme]} ${
                focused && styles.inp
              }`}
              type="email"
              id="mail"
              placeholder="Enter your email address..."
              name="email"
              required={required}
              value={values.email}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              data-focused={String(focused.emailFocused)}
            />
            <span className={styles.error}>{errorEmail}</span>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div className={styles.input__content}>
              <input
                className={`${styles.input} ${styles[theme]}`}
                id="password"
                type="password"
                placeholder="Enter your password..."
                name="password"
                required={required}
                pattern={patternPassword}
                value={values.password}
                onChange={handleChangeInput}
                onBlur={handleBlur}
                data-focused={String(focused.passwordFocused)}
              />
              <span
                onClick={handleShowPassword}
                className={`icons-social-eyes-hide ${styles.eye}`}
              />
              <span
                className={`${
                  isLogin ? styles.error : styles['password-hint']
                }`}
              >
                {errorPassword}
              </span>
            </div>

            <label className={styles.label} htmlFor="confirm-password">
              Confirm password
            </label>
            <div className={styles.input__content}>
              <input
                className={`${styles.input} ${styles[theme]}`}
                id="confirm-password"
                type="password"
                placeholder="Confirm password..."
                name="confirmPassword"
                required={required}
                pattern={patternConfirmPassword}
                value={values.confirmPassword}
                onChange={handleChangeInput}
                onBlur={handleBlur}
                data-focused={String(focused.confirmPasswordFocused)}
                onFocus={() =>
                  setFocused({ ...focused, confirmPasswordFocused: true })
                }
              />
              <span
                onClick={handleShowPassword}
                className={`icons-social-eyes-hide ${styles.eye}`}
              />
              <span className={styles.error}>{errorConfirmPassword}</span>
            </div>
            {!isLogin && (
              <div className={`${styles['privacy-wrapper']}`}>
                <input
                  className={`${styles['privacy-checkbox']}`}
                  type="checkbox"
                  id="privacy"
                />
                <label className={`${styles['label-hint']}`} htmlFor="privacy">
                  By creating an account, you agree to Tezos Explorer
                  <Link
                    to="terms-service"
                    className={`${styles['privacy-link']}`}
                  >
                    Terms of Service
                  </Link>
                  <span> & </span>
                  <Link
                    className={`${styles['privacy-link']}`}
                    to="https://www.google.com.ua/"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            )}
            <Link
              className={`${styles['forgot-password']}`}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
            <button className={`${styles['submit-btn']} ${styles[theme]}`}>
              {buttonText}
            </button>
          </form>
          <div className={`${styles['sing-hint']}`}>
            {singHint}
            <Link className={`${styles['sing-up-link']}`} to={pathTo}>
              {linkTo}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
