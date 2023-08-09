import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './Page404.module.scss';

export function Page404() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`${styles.wrapper} ${styles[theme]}`}>
        <h2 className={`${styles.title}`}>404</h2>
        <p className={`${styles.description}`}>
          Sorry, the page you’re looking for can’t be found
        </p>
        <Link className={`${styles.button} ${styles[theme]}`} to="/">
          Home page
        </Link>
      </div>
    </div>
  );
}
