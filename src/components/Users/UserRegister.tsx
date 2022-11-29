import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button, Box, TextField } from "@mui/material";
import { registerUser } from "../../app/usersSlice";

const initialUserData = {
  login: "",
  password: "",
};

const UserRegister = () => {
  const [userData, setUserData] = useState(initialUserData);
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);

  const onChange = (e: React.SyntheticEvent) => {
    setUserData({
      ...userData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (users.find((i) => i.login === userData.login)) {
      alert("User already exist");
      return;
    }

    //import sha256 from 'crypto-js/sha256';

    //create id from current timestamp
    const id = Date.now();

    dispatch(registerUser({ ...userData, id }));
    setUserData(initialUserData);
  };

  return (
      <Box
        component="form"
        sx={{width: 300, margin: "auto", display: "flex", flexDirection: "column"}} 
        autoComplete="off"
        onSubmit={onRegister}
      >
        <TextField
          key="login"
          margin="dense"
          id="login"
          label="Login"
          type="text"
          fullWidth
          variant="standard"
          name="login"
          onChange={onChange}
          required={true}
        />
        <TextField
          key="password"
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          name="password"
          onChange={onChange}
          required={true}
        />
        <Button  variant="contained" type="submit">Register</Button>
      </Box>
  );
};

export default UserRegister;
