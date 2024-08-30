import sprite from "../../Image/Icons.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectorVehicles } from "../../redux/vehicles/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Characteristics from "../Characteristics/Characteristics.jsx";
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
              <div className={css.ratingWrapper}>
                <svg className={css.iconStar}>
                  <use href={sprite + "#icon-star"} />
                </svg>
                <span className={css.rating}>
                  {elem.rating}({elem.reviews.length} Reviews)
                </span>
                <span className={css.rating}>
                  <svg className={css.iconLocation}>
                    <use href={sprite + "#icon-Map"} />
                  </svg>
                  {elem.location}
                </span>
              </div>
              <p className={css.description}>{elem.description}</p>
              <Characteristics
                type={{
                  transmission: elem.transmission,
                  engine: elem.engine,
                  AC: elem.AC,
                  bathroom: elem.bathroom,
                  kitchen: elem.kitchen,
                  TV: elem.TV,
                  radio: elem.radio,
                  refrigerator: elem.refrigerator,
                  microwave: elem.microwave,
                  gas: elem.gas,
                  water: elem.water,
                }}
              />
              <Link className={css.linkCatalog} to="/campers/:id">
                Show more
              </Link>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
