import { useContext, useState } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { BlocksContext } from '../../context/BlocksContext';
import { TableRow } from '../TableRow';

import styles from './Table.module.scss';
import '../../scss/font-icons.scss';
import { link } from 'fs';

const tableHeaderData = [
  { text: 'Block ID', dropdown: true },
  { text: 'Created', dropdown: true },
  { text: 'Baker', dropdown: true },
  { text: 'Priority', dropdown: false },
  { text: '# of operations', dropdown: false },
  { text: 'Volume', dropdown: false },
  { text: 'Free', dropdown: false },
  { text: '# of endorsements', dropdown: false },
];

const selectOptions = [10, 20, 30, 50];

const Table = () => {
  const [blocksPerPage, setBlocksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const { theme } = useContext(ThemeContext);
  const blocksData = useContext(BlocksContext);
  let blocks;
  let totalPages: number = currentPage;
  const lastIndexOfBlocks = blocksPerPage * currentPage;
  const firstIndexOfBlocks = lastIndexOfBlocks - blocksPerPage;

  if (blocksData) {
    totalPages = Math.ceil(blocksData.length / blocksPerPage);
    const currentBlocks = blocksData.slice(
      firstIndexOfBlocks,
      lastIndexOfBlocks
    );

    blocks = currentBlocks.map((block: any) => {
      const {
        level,
        timestamp,
        priority,
        validations,
        proto,
        fees,
        reward,
        nonceRevealed,
      } = block;
      const removedLettersTimestamp = timestamp.replace(/[A-Z]/g, ' ');

      return (
        <TableRow
          key={level}
          blockId={level + 1}
          created={removedLettersTimestamp}
          bakerImg={`https://services.tzkt.io/v1/avatars/${block.hash}`}
          baker={block.baker?.alias || 'Default'}
          priority={priority}
          operations={validations}
          volume={proto}
          free={fees}
          endorsements={reward}
          active={nonceRevealed}
        />
      );
    });
  }

  const tableHead = tableHeaderData.map(({ text, dropdown }) => {
    return (
      <th className={`${styles.header} ${styles[theme]}`} key={text}>
        {text}
        {dropdown ? (
          <span
            className={`icons-social-triangle ${styles['icons-social-triangle']}`}
          ></span>
        ) : (
          ''
        )}
      </th>
    );
  });

  function nextPage() {
    setCurrentPage((previousPage) => {
      if (previousPage !== totalPages) {
        return previousPage + 1;
      }
      return previousPage;
    });
  }

  function previousPage() {
    setCurrentPage((previousPage) => {
      if (currentPage === 1) return previousPage;
      return previousPage - 1;
    });
  }

  function toggleOptions() {
    setIsShowOptions((previousIsShowOptions) => !previousIsShowOptions);
  }

  function selectOption(option: number) {
    setBlocksPerPage(option);
    setIsShowOptions(false);
  }

  const optionElements = selectOptions.map((option) => (
    <li
      onClick={() => selectOption(option)}
      className={`${styles['select__option']} ${
        option === blocksPerPage ? styles.selected : ''
      }`}
      key={option}
    >
      {option}
    </li>
  ));

  return (
    <div
      className={`block-${theme} ${styles.wrapper} ${
        isShowOptions ? styles['wrapper--pb-80'] : ''
      }`}
    >
      <div className={`${styles.inner} ${styles[theme]}`}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.row}>{tableHead}</tr>
          </thead>
          <tbody>{blocks}</tbody>
        </table>
      </div>
      <div className={`${styles.control} ${styles[theme]}`}>
        <div
          className={styles.quantity}
          onBlur={() => setIsShowOptions(false)}
          tabIndex={0}
        >
          <div className={styles.select}>
            <span className={styles['select__label']}>Rows per page:</span>
            <span className={styles.value}>{blocksPerPage}</span>
            <ul
              className={`${styles['select__options']} ${
                isShowOptions ? styles.show : ''
              }`}
            >
              {optionElements}
            </ul>
            <span
              onClick={toggleOptions}
              className={`icons-social-triangle ${styles['icons-social-triangle']}`}
            ></span>
          </div>
        </div>
        <div className={styles.navigation}>
          <span
            className={`icons-social-arrow ${styles['icons-social-arrow']}`}
            onClick={previousPage}
          ></span>
          <span>{currentPage}</span>
          of
          <span>{totalPages}</span>
          <span
            className={`icons-social-arrow ${styles['icons-social-arrow']}`}
            onClick={nextPage}
          ></span>
        </div>
      </div>
    </div>
  );
};

export { Table };
