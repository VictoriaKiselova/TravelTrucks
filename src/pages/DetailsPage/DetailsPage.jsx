import ModalImage from "../../components/ModalImage/ModalImage.jsx";
import HeadVehiclesList from "../../components/HeadVehiclesList/HeadVehiclesList.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetailsById } from "../../redux/vehicles/operations.js";
import {
  selectorDetails,
  selectorModalIsOpen,
} from "../../redux/vehicles/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { openModal } from "../../redux/vehicles/slice.js";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const details = useSelector(selectorDetails);
  const dispatch = useDispatch();
  const location = useLocation();
  const modalIsOpen = useSelector(selectorModalIsOpen);
  const [activeLink, setActiveLink] = useState(`${location.pathname}/features`);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailsById(id));
    }
  }, [dispatch, id]);

  const handleImageClick = originalSrc => {
    dispatch(openModal(originalSrc));
  };

  return (
    <div className={css.detailsPageWrapper}>
      {details && (
        <>
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
                    onClick={() => handleImageClick(item.original)}
                  />
                  {modalIsOpen && <ModalImage />}
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

          <div className={css.optionDetails}>
            <Outlet />
            {(activeLink.includes("features") ||
              activeLink.includes("reviews")) && <BookingForm />}
          </div>
        </>
      )}
    </div>
  );
}
