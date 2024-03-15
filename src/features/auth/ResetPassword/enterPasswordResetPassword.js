import React from "react";
import Layout from "./Layout";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from "@mui/material/Button";

import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";

const EnterPasswordResetPassword = () => {
  const StyledTextField = styled(TextField)`
    background: white;
    border: 1px solid #e2e2e1;
    width: 400px;
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

  return (
    <>
      <Layout title="ברוכים הבאים לRentiffy" subtitle="הזינו סיסמה">
        <h5
          style={{
            fontFamily: "Rubik",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "24.3px",
          }}
        >
          הזינו סיסמה{" "}
        </h5>
        <StyledTextField
          placeholder="סיסמה"
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ marginRight: "6px" }}>
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <StyledTextField
          placeholder="אימות סיסמה"
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ marginRight: "6px" }}>
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <Link to="/resetpassword/complete">
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
            שינוי סיסמה{" "}
          </Button>
        </Link>
      </Layout>
    </>
  );
};
export default EnterPasswordResetPassword;
