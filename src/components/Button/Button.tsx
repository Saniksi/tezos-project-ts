import { ButtonProps } from '../types/ButtonProps';

import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { text = 'default' } = props;
  return <button className={styles.button}>{text}</button>;
};

export { Button };
