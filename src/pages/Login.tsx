import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { loginUser } from "../app/usersSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import UserLogin from "../components/Users/UserLogin";

const Login = () => {
	const navigate = useNavigate();
	const authUser = useAppSelector((state) => state.users.authUser);

	useEffect(() => {
		authUser && navigate(ROUTES.DASHBOARD);
	}, [authUser]);

	return (
			<UserLogin />
	);
};

export default Login;
