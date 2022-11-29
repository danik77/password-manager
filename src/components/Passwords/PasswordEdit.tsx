import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useAppDispatch } from "../../app/hooks";
import { editPassword } from "../../app/passwordsSlice";
import { Password } from "../../app/passwordsSlice";

const PasswordEdit = ({ password }: { password: Password }) => {

  const initialUserData = {
    id: password.id,
    text: password.text,
    origin: password.origin,
  };

  const [passwordData, setPasswordData] = useState(initialUserData);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e: React.SyntheticEvent) => {
    setPasswordData({
      ...passwordData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const onSaveUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(editPassword(passwordData));
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit password</DialogTitle>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          autoComplete="off"
          onSubmit={onSaveUser}
        >
          <DialogContent>
            <TextField
              key="text"
              margin="dense"
              id="text"
              label="Text"
              type="text"
              fullWidth
              variant="standard"
              name="text"
              onChange={onChange}
              defaultValue={passwordData.text}
              required={true}
            />
            <TextField
              key="origin"
              margin="dense"
              id="origin"
              label="Origin"
              type="text"
              fullWidth
              variant="standard"
              name="origin"
              onChange={onChange}
              defaultValue={passwordData.origin}
              required={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Edit password</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PasswordEdit;
