import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { addPassword } from "../../app/passwordsSlice";

const initialPasswordData = {
  text: "",
  origin: "",
};

const PasswordAdd = () => {
  const [passwordData, setPasswordData] = useState(initialPasswordData);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.users.authUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e: React.SyntheticEvent) => {
    setPasswordData({
      ...passwordData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const onCreate = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!authUser) {
      return;
    }

    //create id from current timestamp
    const id = Date.now();
    const userId = authUser.id;

    dispatch(addPassword({ ...passwordData, id, userId }));
    setOpen(false);
    setPasswordData(initialPasswordData);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          autoComplete="off"
          onSubmit={onCreate}
        >
          <DialogTitle>Add user</DialogTitle>
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
            <Button type="submit">Add password</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PasswordAdd;
