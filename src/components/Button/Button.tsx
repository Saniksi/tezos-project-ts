import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { ButtonProps } from '../types/ButtonProps';

import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {
  const { text = 'default' } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`${styles.button} ${styles[theme]}`}>{text}</button>
  );
};

export { Button };
