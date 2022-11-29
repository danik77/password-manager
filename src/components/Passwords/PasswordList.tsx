import PasswordListItem from "./PasswordListItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import PasswordAdd from "./PasswordAdd";
import { Password } from "../../app/passwordsSlice";

const PasswordList = () => {
  const allPasswords = useAppSelector((state) => state.passwords.passwords);
  const authUser = useAppSelector((state) => state.users.authUser);

  const passwords = authUser ? allPasswords.filter((item) => item.userId === authUser.id) : null;

  return (
    <Container sx={{ mt: 2 }}>
      <PasswordAdd />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Password</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passwords &&
              passwords.map((password: Password) => (
                <PasswordListItem key={password.id} password={password} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PasswordList;
