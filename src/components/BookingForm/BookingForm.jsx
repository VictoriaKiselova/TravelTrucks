import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { clsx } from "clsx";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string(),
});

export default function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    toast("Successfully booked");
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.bookingForm}>
      <h3 className={css.bookingFormTitle}>Book your campervan now</h3>
      <p className={css.bookingFormText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}>
        <Form className={css.formWrapper}>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            className={css.inputFormBooking}
          />
          <ErrorMessage name="name" component="div" className={css.error} />
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            className={css.inputFormBooking}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
          <Field
            type="date"
            name="date"
            id="date"
            placeholder="Booking date*"
            className={css.inputFormBooking}
          />
          <ErrorMessage name="date" component="div" className={css.error} />
          <Field
            as="textarea"
            name="comment"
            id="comment"
            placeholder="Comment"
            className={clsx(css.inputFormBooking, css.comment)}
          />
          <button type="submit" className={css.linkCatalog}>
            Send
          </button>
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "20px",
            color: "#713200",
          },
        }}
      />
    </div>
  );
}
