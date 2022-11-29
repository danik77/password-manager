import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Button, Box, TextField } from "@mui/material";
import { loginUser } from "../../app/usersSlice";
import { redirect } from "react-router-dom";

const initialUserData = {
  login: "",
  password: "",
};

const UserRegister = () => {
  const [userData, setUserData] = useState(initialUserData);
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  const onChange = (e: React.SyntheticEvent) => {
    setUserData({
      ...userData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
  };

  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const loggedUser = users.find((i) => i.login === userData.login && i.password === userData.password);

    if (loggedUser) {
      dispatch(loginUser(loggedUser));
    } else {
      alert("Login or password is wrong");
    }

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
          defaultValue={userData.login}
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
          defaultValue={userData.password}
          required={true}
        />
        <Button  variant="contained" type="submit">Login</Button>
      </Box>
  );
};

export default UserRegister;
