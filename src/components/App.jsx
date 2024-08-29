import { Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Catalog from "../pages/Catalog/Catalog.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import css from './App.module.css'

export default function App() {
  return (
    <div className={css.containerApp}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
