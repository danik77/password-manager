import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";

const PasswordReveal = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const hideString = (text: string) => {
    return "*".repeat(text.length);
  };

  const showPassword = () => {
    return isVisible ? text : hideString(text);
  };

  return (
    <>
      {text && (
        <Container sx={{display: "flex", alignItems: "center"}}>
          <Typography variant="body1" component="p">{showPassword()}</Typography>
          <Button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</Button>
        </Container>
      )}
    </>
  );
};

export default PasswordReveal;
