import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails.jsx";
import css from "./Features.module.css";

export default function Features() {
  return (
    <div className={css.features}>
      <VehicleDetails />
      <BookingForm />
    </div>
  );
}
