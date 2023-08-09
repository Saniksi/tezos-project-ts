import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { ReactComponent as SunIcon } from '../../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../icons/moon.svg';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={styles[theme]}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <Logo />
          </Link>
          <Menu />
          <div className={styles.toggle__wrapper}>
            <input
              className={styles.toggle__input}
              type="checkbox"
              id="dark-mode-toggle"
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
            <label className={styles.toggle__label} htmlFor="dark-mode-toggle">
              <div className={styles.sun}>
                <SunIcon />
              </div>
              <div className={styles.moon}>
                <MoonIcon />
              </div>
            </label>
          </div>
          <Link to="login">
            <Button text="Login" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
