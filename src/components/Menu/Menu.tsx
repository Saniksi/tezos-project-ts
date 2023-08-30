import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const Menu = () => {
  return (

      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.link} ${styles.active}`}>
            <Link to="blocks">Blocks</Link>
          </li>
          <li className={`${styles.link} ${styles.bakers}`}>Bakers</li>
          <li className={styles.link}>Charts</li>
        </ul>
      </nav>
  );
};

export { Menu };
