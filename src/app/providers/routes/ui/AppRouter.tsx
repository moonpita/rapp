import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
          key={path}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
