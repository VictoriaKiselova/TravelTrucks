import HeadVehiclesList from "../../components/HeadVehiclesList/HeadVehiclesList.jsx";
import { fetchDetailsById } from "../../redux/vehicles/operations.js";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const details = useSelector(selectorDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailsById(id));
    }
  }, [dispatch, id]);

  return (
    <div className={css.detailsPageWrapper}>
      <div className={css.wrapper}>
        {" "}
        <HeadVehiclesList elem={details} />
      </div>

      <ul className={css.imageContainer}>
        {details.gallery &&
          details.gallery.length > 0 &&
          details.gallery.map((item, index) => (
            <li key={index} className={css.detailsImageItem}>
              <img
                src={item.thumb}
                alt={`Gallery image ${index}`}
                className={css.imgDetails}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
