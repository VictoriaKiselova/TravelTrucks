import { Routes, Route } from "react-router-dom";
import { selectorLoading } from "../redux/vehicles/selectors.js";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Catalog from "../pages/Catalog/Catalog.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import DetailsPage from "../pages/DetailsPage/DetailsPage.jsx";
import Features from "../components/Features/Features.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import Loader from "./Loader/Loader.jsx";
import css from "./App.module.css";

export default function App() {
  const loading = useSelector(selectorLoading);

  return (
    <div className={css.containerApp}>
      {loading && <Loader />}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
