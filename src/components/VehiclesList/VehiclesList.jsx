import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectorVehicles } from "../../redux/vehicles/selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import { fetchVehicles } from "../../redux/vehicles/operations";
import Characteristics from "../Characteristics/Characteristics.jsx";
import HeadVehiclesList from "../HeadVehiclesList/HeadVehiclesList.jsx";
import css from "./VehiclesList.module.css";

export default function VehiclesList() {
  const vehicles = useSelector(selectorVehicles);
  const details = useSelector(selectorDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);
  const listToRender =
    vehicles.length > 0
      ? vehicles
      : Array.isArray(details)
      ? details
      : [details];

  return (
    <div>
      {listToRender.map(elem => (
        <ul key={elem.id} className={css.vehicles}>
          <li className={css.vehiclesItem}>
            <div>
              {vehicles.length > 0 && (
                <img
                  src={
                    elem.gallery && elem.gallery.length > 0
                      ? elem.gallery[0].thumb
                      : ""
                  }
                  alt={elem.name}
                  className={css.imageVehicles}
                />
              )}
            </div>
            <div>
              <HeadVehiclesList elem={elem} />
              {vehicles.length > 0 && (
                <p className={css.description}>{elem.description}</p>
              )}
              {vehicles.length > 0 && <Characteristics elem={elem} />}
              {vehicles.length > 0 && (
                <Link className={css.linkCatalog} to={`/catalog/${elem.id}`}>
                  Show more
                </Link>
              )}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
