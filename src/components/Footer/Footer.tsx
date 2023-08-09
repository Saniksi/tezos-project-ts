import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { FooterLinks } from '../FooterLinks';
import { Logo } from '../Logo';

import styles from './Footer.module.scss';
import { AuthenticationContext } from '../../context/AuthenticationContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isLogin = useContext(AuthenticationContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className="container">
        <div className={styles.inner}>
          {isLogin && <FooterLinks />}
          <div className={`${isLogin ? '' : styles.center} ${styles.logo}`}>
            <Logo />
          </div>
          <div className={styles.copyright}>
            @ Copyright. Company name. 2021
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
