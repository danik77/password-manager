import { Button } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { deletePassword } from "../../app/passwordsSlice";
import { Password } from "../../app/passwordsSlice";

const PasswordDelete = ({ passwordId }: { passwordId: number }) => {
  const dispatch = useAppDispatch();

  const onDeletePassword = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePassword(passwordId));
    }
  };

  return (
    <Button variant="contained" onClick={onDeletePassword} sx={{ mr: 1 }}>
      Delete
    </Button>
  );
};

export default PasswordDelete;
