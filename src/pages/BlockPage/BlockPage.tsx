import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlocksContext } from '../../context/BlocksContext';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import { ThemeContext } from '../../context/ThemeContext';
import { Breadcrumb } from '../../components/Breadcrumb';

import styles from './BlockPage.module.scss';

export function BlockPage() {
  const { blockId } = useParams();
  const { theme } = useContext(ThemeContext);
  const [currentBlockId, setCurrentBlockId] = useState(Number(blockId));

  const navigate = useNavigate();

  const blocks = useContext(BlocksContext);
  let currentBlock;

  if (blocks) {
    currentBlock = blocks.filter(
      (block: any) => block.level === currentBlockId
    )[0];
  }

  function previousBlock() {
    setCurrentBlockId((previousCurrentBlockId) => previousCurrentBlockId - 1);
    navigate(`/blocks/${currentBlockId - 1}`);
  }

  function nextBlock() {
    setCurrentBlockId((previousCurrentBlockId) => previousCurrentBlockId + 1);
    navigate(`/blocks/${currentBlockId + 1}`);
  }

  return (
    <div className="container">
      <Breadcrumb />
      <section className={styles.block}>
        <div className={styles.header}>
          <span
            className={`icons-social-arrow ${styles.arrow} ${styles['arrow-left']} ${styles[theme]}`}
            onClick={previousBlock}
          ></span>
          <Title className={styles.title} text={`Block: ${currentBlockId}`} />
          <span
            className={`icons-social-arrow ${styles.arrow} ${styles['arrow-right']} ${styles[theme]}`}
            onClick={nextBlock}
          ></span>
          <Subtitle text="Block information" />
        </div>
        <div className={`block-${theme}`}>
          <div className={`${styles.body} ${styles[theme]}`}>
            <span>Hash:</span>
            <span>{currentBlock?.hash}</span>
            <span>Block time:</span>
            <span>{currentBlock?.proto}</span>
            <span>Created at:</span>
            <span>{currentBlock?.timestamp}</span>
            <span>Block fitness:</span>
            <span>{currentBlock?.payloadRound}</span>
            <span>Baker:</span>
            <span className={styles.baker}>
              <img
                className={styles.image}
                src={`https://services.tzkt.io/v1/avatars/${currentBlock?.hash}`}
                alt=""
              />
              {currentBlock?.baker?.alias || 'default'}
            </span>
            <span>Gas used:</span>
            <span>{currentBlock?.level}</span>
            <span>Baker’s fee:</span>
            <span>{currentBlock?.fees}</span>
            <span>Protocol version:</span>
            <span>{currentBlock?.proto}</span>
            <span>Baker's priority:</span>
            <span>{currentBlock?.priority}</span>
            <span>Cycle:</span>
            <span>{currentBlock?.cycle}</span>
            <span>Transactions volume:</span>
            <span>{currentBlock?.validations}</span>
            <span>Cycle position:</span>
            <span>{currentBlock?.cycle}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
