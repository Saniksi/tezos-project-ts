import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { ReactComponent as SunIcon } from '../../icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../icons/moon.svg';

import styles from './Header.module.scss';

console.log(styles);

interface PropsHeader {
  handlerToggleTheme: () => void;
}

const Header = ({ handlerToggleTheme }: PropsHeader) => {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles[theme]}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          {/* <button className={styles.toggle} onClick={handlerToggleTheme}>
            Theme toggle
          </button> */}
          <div className={styles.toggle__wrapper}>
            <input
              className={styles.toggle__input}
              type="checkbox"
              id="dark-mode-toggle"
              onChange={handlerToggleTheme}
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
          <Menu />
          <Button text="Login" />
        </div>
      </div>
    </header>
  );
};

export { Header };
