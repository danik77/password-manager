import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Button, Box, TextField } from "@mui/material";
import { logoutUser } from "../../app/usersSlice";

const UserLogout = () => {
  const dispatch = useAppDispatch();

  const Logout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
      <Button onClick={Logout}  variant="contained" sx={{ mt: 2}}>Logout</Button>
  );
};

export default UserLogout;
