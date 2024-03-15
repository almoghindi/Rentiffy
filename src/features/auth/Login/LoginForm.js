import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { InputAdornment, TextField, Divider } from "@mui/material";

const StyledTextField = styled(TextField)`
  background: white;
  border: 1px solid #e2e2e1;
  width: 350px;
  height: 46px;
  padding: 8px, 16px, 16px, 8px;
  gap: 8px;
  border-radius: 100px;
  backgroundcolor: #fff;
  margin-top: 10px;
  justify-content: center;
  & label.Mui-focused {
    color: transparent;
  }
  & .MuiInput-underline:after {
    border-bottom-color: transparent;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: transparent;
    }
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }
`;

const LoginForm = () => {
  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StyledTextField
        placeholder="כתובת מייל"
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{ marginRight: "6px" }}>
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <StyledTextField
        placeholder="סיסמא"
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{ marginRight: "6px" }}>
              <LockOpenIcon />
            </InputAdornment>
          ),
        }}
      />
      <p
        style={{
          fontFamily: "Rubik",
          fontSize: "18px",
          fontWeight: "600",
          textDecoration: "underline",
          alignSelf: "flex-end",
        }}
      >
        <Link to="/resetpassword" style={{ color: "black" }}>
          שכחתי סיסמא
        </Link>
      </p>
      <Link to="/profile">
        <Button
          sx={{
            my: 2,
            color: "white",
            display: "block",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "30px",
            fontFamily: "Rubik",
            backgroundColor: "#0CC397",
            borderRadius: "100px",
            width: "159px",
            height: "56px",
            ":hover": { backgroundColor: "#0CC397" },
            marginBottom: "40px",
          }}
        >
          התחבר
        </Button>
      </Link>
      <Divider flexItem style={{ height: "4%", width: "400px" }}>
        או התחבר באמצעות
      </Divider>
    </div>
  );
};

export default LoginForm;
