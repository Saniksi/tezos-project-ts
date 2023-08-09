import { FC, useContext } from 'react';

import { SubtitleProps } from '../types/SubtitleProps';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './Subtitle.module.scss';

export const Subtitle: FC<SubtitleProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h3>
      <pre className={`${styles.subtitle} ${styles[theme]}`}>{text}</pre>
    </h3>
  );
};
