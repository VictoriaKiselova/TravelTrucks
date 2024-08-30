import sprite from "../../Image/Icons.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectorVehicles } from "../../redux/vehicles/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import css from "./VehiclesList.module.css";

export default function VehiclesList() {
  const vehicles = useSelector(selectorVehicles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return (
    <div>
      {vehicles.map(elem => (
        <ul key={elem.id} className={css.vehicles}>
          <li className={css.vehiclesItem}>
            <div>
              <img
                src={
                  elem.gallery && elem.gallery.length > 0
                    ? elem.gallery[0].thumb
                    : ""
                }
                alt={elem.name}
                className={css.imageVehicles}
              />
            </div>
            <div className={css.vehiclesDescription}>
              <div className={css.listItem}>
                <h2 className={css.vehiclesName}>{elem.name}</h2>
                <div className={css.priceBox}>
                  <h2 className={css.vehiclesPrice}>€{elem.price}.00</h2>
                  <svg className={css.iconHeart}>
                    <use href={sprite + "#icon-heart"} />
                  </svg>
                </div>
              </div>

              <svg className={css.icon}>
                <use href={sprite + "#icon-star"} />
              </svg>
              <p></p>
              <Link className={css.linkCatalog} to="/catalog">
                Show more
              </Link>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
