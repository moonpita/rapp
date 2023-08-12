import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";

import './index.scss';
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}