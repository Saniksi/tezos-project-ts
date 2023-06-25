import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.link}>Home</li>
      <li className={`${styles.link} ${styles.active}`}>Blocks</li>
      <li className={`${styles.link} ${styles.bakers}`}>Bakers</li>
      <li className={styles.link}>Charts</li>
    </ul>
  );
};

export { Menu };
