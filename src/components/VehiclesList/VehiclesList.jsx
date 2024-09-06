import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../redux/vehicles/slice.js";
import {
  selectorVehicles,
  selectorLoadMore,
  selectorPage,
  selectorLimit,
} from "../../redux/vehicles/selectors.js";
import { fetchVehicles } from "../../redux/vehicles/operations";
import { resetFilters } from "../../redux/filters/slice.js";
import Characteristics from "../Characteristics/Characteristics.jsx";
import HeadVehiclesList from "../HeadVehiclesList/HeadVehiclesList.jsx";
import css from "./VehiclesList.module.css";

export default function VehiclesList() {
  const vehicles = useSelector(selectorVehicles);
  const loadMore = useSelector(selectorLoadMore);
  const page = useSelector(selectorPage);
  const limit = useSelector(selectorLimit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles({ page, limit }));
    dispatch(resetFilters());
  }, [dispatch, page, limit]);

  const loadMorePage = () => {
    dispatch(nextPage());
  };

  return (
    <div>
      {vehicles.length === 0 ? (
        <p>No vehicles available</p>
      ) : (
        vehicles.map(elem => (
          <div key={nanoid()} className={css.vehiclesItem}>
            <div>
              {elem.gallery && elem.gallery.length > 0 && (
                <img
                  src={elem.gallery[0].thumb || ""}
                  alt={elem.name}
                  className={css.imageVehicles}
                />
              )}
            </div>
            <div>
              <HeadVehiclesList elem={elem} />
              <p className={css.description}>{elem.description}</p>
              <Characteristics elem={elem} />
              <Link className={css.linkCatalog} to={`/catalog/${elem.id}`}>
                Show more
              </Link>
            </div>
          </div>
        ))
      )}

      {loadMore && vehicles.length > 0 && (
        <button
          type="button"
          className={css.buttonLoadMore}
          onClick={loadMorePage}>
          Load more
        </button>
      )}
    </div>
  );
}
