import { TbFilterSearch } from "react-icons/tb";
import { useState, useEffect } from "react";
import VehiclesList from "../../components/VehiclesList/VehiclesList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./Catalog.module.css";

export default function Catalog() {
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobileView(isMobile);

      if (!isMobile) {
        setShowFilters(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <div className={css.catalogContainer}>
      {isMobileView && (
        <button className={css.toggleFiltersBtn} onClick={toggleFilters}>
          <TbFilterSearch className={css.icon} />
          Filters
        </button>
      )}
      {(showFilters || !isMobileView) && (
        <Filters setShowFilters={setShowFilters} />
      )}
      <VehiclesList />
    </div>
  );
}
