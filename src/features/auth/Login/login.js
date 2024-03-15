import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import SocialMediaButtons from "../SocialMediaButtons";

const Login = () => {
  return (
    <>
      <div
        className="login-container"
        style={{
          Width: "90%",
          height: "563px",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "200px",
        }}
      >
        <h1
          style={{
            fontFamily: "Rubik",
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "42.66px",
            marginTop: "120px",
          }}
        >
          ברוכים הבאים לRentiffy
        </h1>
        <Box
          sx={{
            flexGrow: 1,
            width: { md: "60%", xs: "90%" },
            height: "560px",
            border: "1px solid #DCDCDC",
            padding: "60px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "0px 0px 14px rgba(0,26,59,0.08)",
            borderRadius: "16px",
          }}
        >
          <LoginForm />
          <SocialMediaButtons />
          <p
            style={{
              fontFamily: "Rubik",
              fontSize: "18px",
              lineHeight: "24.3px",
            }}
          >
            אין לך חשבון?{" "}
            <Link to="/signup">
              <span
                style={{
                  fontWeight: "600",
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                להרשמה
              </span>
            </Link>
          </p>
        </Box>
      </div>
    </>
  );
};

export default Login;
