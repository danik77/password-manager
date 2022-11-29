import PasswordList from "../components/Passwords/PasswordList";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import UserLogout from "../components/Users/UserLogout";
import { Link } from "react-router-dom";
import ROUTES from "../routes";
import { Container, Typography} from "@mui/material";


const Dashboard = () => {
	const authUser = useAppSelector((state) => state.users.authUser);

	return (
		<div className="App">
			{ !authUser && (
				<Typography variant="h5" component="h5">
					You must <Link to={ROUTES.REGISTER}>register</Link> or{" "}
					<Link to={ROUTES.LOGIN}>login</Link>
				</Typography>
			)}
			{ authUser && (
				<Container> 
					<Typography variant="h4" component="h4">Hello, {authUser.login} </Typography>
					<UserLogout /> 
					<PasswordList />
				</Container>
			)}
		</div>
	);
};

export default Dashboard;
