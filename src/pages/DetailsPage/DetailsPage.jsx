import HeadVehiclesList from "../../components/HeadVehiclesList/HeadVehiclesList.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import { fetchDetailsById } from "../../redux/vehicles/operations.js";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const details = useSelector(selectorDetails);
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(`${location.pathname}/features`);
  console.log(activeLink);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailsById(id));
    }
  }, [dispatch, id]);

  return (
    <div className={css.detailsPageWrapper}>
      <div className={css.wrapper}>
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
      <p className={css.detailsDeskr}>{details.description}</p>
      <div className={css.detailsLinks}>
        <Link
          to="features"
          className={`${css.linkFeatures} ${
            activeLink.includes("features") ? css.active : ""
          }`}
          onClick={() => setActiveLink(`${location.pathname}/features`)}>
          Features
        </Link>
        <Link
          to="reviews"
          className={`${css.linkReviews} ${
            activeLink.includes("reviews") ? css.active : ""
          }`}
          onClick={() => setActiveLink(`${location.pathname}/reviews`)}>
          Reviews
        </Link>
      </div>
      <hr className={css.line} />
      <Outlet />
    </div>
  );
}
