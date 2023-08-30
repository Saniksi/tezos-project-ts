import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { theme } = useContext(ThemeContext);

  function toggleMenu() {
    setIsShowMenu((previousIsShowMenu) => !previousIsShowMenu);
  }

  if (isShowMenu) {
    document.body.classList.add('body--fixed');
  } else {
    document.body.classList.remove('body--fixed');
  }

  return (
    <div className={styles['mobile-menu']}>
      <nav
        className={`${styles.navigation} ${styles[theme]} ${
          isShowMenu ? styles.show : styles.hide
        }`}
      >
        <ul className={`${styles['nav-list']} ${styles[theme]}`}>
          <li className={styles['nav-link']}>
            <span className={`icons-social-home ${styles['menu-icon']}`}></span>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles['nav-link']} ${styles.active}`}>
            <span
              className={`icons-social-block ${styles['menu-icon']}`}
            ></span>
            <Link to="blocks">Blocks</Link>
          </li>
          <li className={`${styles['nav-link']} ${styles.bakers}`}>
            <span
              className={`icons-social-people-icon ${styles['menu-icon']}`}
            ></span>
            Bakers
          </li>
          <li className={styles['nav-link']}>
            <span
              className={`icons-social-chart ${styles['menu-icon']}`}
            ></span>
            Charts
          </li>
          <li className={styles['nav-link']}>
            <span
              className={`icons-social-ecosystem- ${styles['menu-icon']}`}
            ></span>
            Ecosystem
          </li>
        </ul>
        <ul className={`${styles['settings-list']} ${styles[theme]}`}>
          <li className={styles['setting-item']}>Setting</li>
          <li className={styles['setting-item']}>Blog</li>
          <li className={styles['setting-item']}>Privacy</li>
          <li className={styles['setting-item']}>Help</li>
        </ul>
        <p className={`${styles.copyright} ${styles[theme]}`}>
          @ Copyright. Company name. 2021
        </p>
      </nav>
      <div
        className={`${styles.backdrop} ${
          isShowMenu ? styles.show : styles.hide
        }`}
        onClick={toggleMenu}
      />

      <div className={styles['mobile-menu']} onClick={toggleMenu}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};
