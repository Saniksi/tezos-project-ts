import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { FooterLinks } from '../FooterLinks';
import { Logo } from '../Logo';

import styles from './Footer.module.scss';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <FooterLinks />
          <div className={styles.copyright}>
            @ Copyright. Company name. 2021
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
