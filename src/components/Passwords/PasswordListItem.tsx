import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, TableCell, TableRow } from "@mui/material";
import PasswordReveal from "./PasswordReveal";
import PasswordEdit from "./PasswordEdit";
import PasswordDelete from "./PasswordDelete";
import { Password } from "../../app/passwordsSlice";

const PasswordListItem = ({ password }: { password: Password }) => {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <TableRow
      key={password.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        <PasswordReveal text={password.text} />
      </TableCell>
      <TableCell>
        <Typography variant="body1" component="p">
          {password.origin}
        </Typography>
      </TableCell>
      <TableCell>
        <PasswordEdit password={password} />
      </TableCell>
      <TableCell>
        <PasswordDelete passwordId={password.id} />
      </TableCell>
    </TableRow>
  );
};

export default PasswordListItem;
