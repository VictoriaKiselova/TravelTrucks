import sprite from "../../Image/Icons.svg";
import { addFavorite, removeFavorite } from "../../redux/vehicles/slice.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorVehicles,
  selectorFavorites,
} from "../../redux/vehicles/selectors";
import css from "./HeadVehiclesList.module.css";

export default function HeadVehiclesList({ elem }) {
  const { id, name, price, reviews, rating, location } = elem;
  const vehicles = useSelector(selectorVehicles);
  const dispatch = useDispatch();
  const favorites = useSelector(selectorFavorites);
  const numberOfReviews = Array.isArray(reviews) ? reviews.length : 0;
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className={css.vehiclesDescription}>
      <div className={css.listItem}>
        <h2 className={css.vehiclesName}>{name}</h2>
        {vehicles.length > 0 && (
          <div className={css.priceBox}>
            <h2 className={css.vehiclesPrice}>€{price},00</h2>
            <button
              className={
                favorites.includes(id) ? css.favourite : css.favouriteButton
              }
              onClick={handleToggleFavorite}>
              <svg className={css.iconHeart}>
                <use href={sprite + "#icon-heart"} />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className={css.ratingWrapper}>
        <span className={css.rating}>
          <svg className={css.iconStar}>
            <use href={sprite + "#icon-star"} />
          </svg>
          {rating} ({numberOfReviews} Reviews)
        </span>
        <span className={css.location}>
          <svg className={css.iconLocation}>
            <use href={sprite + "#icon-Map"} />
          </svg>
          {location}
        </span>
      </div>
      <h2 className={css.vehiclesPriceDetails}>€{price},00</h2>
    </div>
  );
}
