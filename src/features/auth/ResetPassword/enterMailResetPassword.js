import React from "react";
import Layout from "./Layout";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const EnterMailResetPassword = () => {
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
      <Layout title="ברוכים הבאים לRentiffy" subtitle="שכחתם את הסיסמה?">
        <h5
          style={{
            fontFamily: "Rubik",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "24.3px",
          }}
        >
          שכחתם את הסיסמה?{" "}
        </h5>
        <p
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "24.3px",
            marginTop: "-20px",
          }}
        >
          הזינו כתובת מייל לקבלת קישור לאיפוס הסיסמה{" "}
        </p>
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
        <Link to="/resetpassword/enterpassword">
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
            שליחה{" "}
          </Button>
        </Link>
      </Layout>
    </>
  );
};
export default EnterMailResetPassword;
