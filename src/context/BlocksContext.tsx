import { useState, createContext, useEffect, FC } from 'react';
import { requestBlocks } from '../components/api/requestBlocks';

export const BlocksContext = createContext<any>([]);

export const BlocksProvider: FC<any> = ({ children }) => {
  const [blocks, setBlocks] = useState(null);

  const fetchData = async () => {
    try {
      const response = await requestBlocks('/v1/blocks');
      setBlocks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BlocksContext.Provider value={blocks}>{children}</BlocksContext.Provider>
    </>
  );
};
