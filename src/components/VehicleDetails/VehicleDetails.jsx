import Characteristics from "../Characteristics/Characteristics.jsx";
import ListDetails from "../ListDetails/ListDetails.jsx";
import { useSelector } from "react-redux";
import { selectorDetails } from "../../redux/vehicles/selectors.js";
import css from "./VehicleDetails.module.css";

export default function VehicleDetails() {
  const details = useSelector(selectorDetails);

  return (
    <div className={css.detailsBox}>
      <Characteristics elem={details} />
      <ListDetails elem={details} />
    </div>
  );
}
