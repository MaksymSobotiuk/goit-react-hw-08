import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function EditContact({ contact }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    dispatch(updateContact({ id: contact.id, updates: { name, number } }));
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editing a Contact</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
