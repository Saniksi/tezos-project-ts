import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from '../../pages/HomePage/HomePage';
import { BlocksPage } from '../../pages/BlocksPage/BlocksPage';
import { Page404 } from '../../pages/Page404/Page404';
import { BlockPage } from '../../pages/BlockPage/BlockPage';
import { MainLayout } from '../MainLayout/MainLayout';

import styles from './App.module.scss';
import '../../scss/container.scss';
import '../../scss/reset.scss';
import '../../scss/block.scss';
import { Authentication } from '../Authentication';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'blocks',
          element: <BlocksPage />,
        },
        {
          path: 'blocks/:blockId',
          element: <BlockPage />,
        },
        {
          path: 'login',
          element: <Authentication />,
        },
        {
          path: 'sing-up',
          element: <Authentication />,
        },
        {
          path: 'forgot-password',
          element: <h2>Forgot Password?</h2>,
        },
        {
          path: '*',
          element: <Page404 />,
        },
      ],
    },
  ]);
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export { App };
