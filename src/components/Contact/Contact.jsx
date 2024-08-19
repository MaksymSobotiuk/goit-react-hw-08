import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import EditContact from "../EditContact/EditContact";
import { Button } from "@mui/material";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setOpen(false);
  };
  return (
    <li className={css.li}>
      {contact.name} <br />
      {contact.number}
      <Button onClick={handleOpen}>Delete</Button>
      <DeleteConfirmationModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
      <EditContact contact={contact} />
    </li>
  );
}
