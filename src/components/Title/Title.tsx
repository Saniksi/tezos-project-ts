import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { TitleProps } from '../types/TitleProps';

import styles from './Title.module.scss';

const Title = (props: TitleProps) => {
  const { theme } = useContext(ThemeContext);
  const { text = '' } = props;

  return <h2 className={`${styles.title} ${styles[theme]}`}>{text}</h2>;
};

export { Title };
