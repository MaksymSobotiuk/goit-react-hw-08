import { Modal, Box, Typography, Button } from "@mui/material";

export default function DeleteConfirmationModal({
  open,
  handleClose,
  handleDelete,
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalStyle }}>
        <Typography variant="h6" component="h2">
          Delete confirmation
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Are you sure you want to delete this contact?
        </Typography>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Modal>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
