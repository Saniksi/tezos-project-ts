import styles from './FooterLinks.module.scss';

const FooterLinks = () => {
  return (
    <ul className={styles.links}>
      <li className={styles.link}>
        <a href="#">Home</a>
      </li>
      <li className={styles.link}>
        <a href="#">Blocks </a>
      </li>
      <li className={styles.link}>
        <a href="#">Backers</a>
      </li>
      <li className={styles.link}>
        <a href="#">Home</a>
      </li>
      <li className={styles.link}>
        <a href="#">Charts</a>
      </li>
      <li className={styles.link}>
        <a href="#">Assets</a>
      </li>
      <li className={styles.link}>
        <a href="#">Ecosystem</a>
      </li>
      <li className={styles.link}>
        <a href="#">Home</a>
      </li>
      <li className={styles.link}>
        <a href="#">Home</a>
      </li>
    </ul>
  );
};

export { FooterLinks };
