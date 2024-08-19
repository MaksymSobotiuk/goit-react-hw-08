import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form className={css.Form}>
          <div className={css.div}>
            <label>Name</label>
            <Field type="text" name="name" />
          </div>
          <div className={css.div}>
            <label>Number</label>
            <Field type="text" name="number" />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
