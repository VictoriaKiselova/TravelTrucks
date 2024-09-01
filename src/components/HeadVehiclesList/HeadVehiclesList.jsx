import sprite from "../../Image/Icons.svg";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import { useSelector } from "react-redux";
import { selectorVehicles } from "../../redux/vehicles/selectors";
import css from "./HeadVehiclesList.module.css";

export default function HeadVehiclesList({ elem }) {
  const { name, price, reviews, rating, location } = elem;
  const vehicles = useSelector(selectorVehicles);
  const numberOfReviews = Array.isArray(reviews) ? reviews.length : 0;

  return (
    <div className={css.vehiclesDescription}>
      <div className={css.listItem}>
        <h2 className={css.vehiclesName}>{name}</h2>
        {vehicles.length > 0 && (
          <div className={css.priceBox}>
            <h2 className={css.vehiclesPrice}>€{price},00</h2>
            <svg className={css.iconHeart}>
              <use href={sprite + "#icon-heart"} />
            </svg>
          </div>
        )}
      </div>
      <div className={css.ratingWrapper}>
        <svg className={css.iconStar}>
          <use href={sprite + "#icon-star"} />
        </svg>
        <span className={css.rating}>
          {rating} ({numberOfReviews} Reviews)
        </span>
        <span className={css.rating}>
          <svg className={css.iconLocation}>
            <use href={sprite + "#icon-Map"} />
          </svg>
          {location}
        </span>
      </div>
      <h2 className={css.vehiclesPriceDetails}>€{price}.00</h2>
    </div>
  );
}
