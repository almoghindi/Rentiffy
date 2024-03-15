import React from "react";
import Layout from "./Layout";
import CompleteLogo from "../../../assets/CompleteResetPasswordLogo.png";

const CompleteResetPassword = () => {
  return (
    <>
      <Layout title="ברוכים הבאים לRentiffy">
        <div
          style={{
            width: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img alt="complete" src={CompleteLogo} />
          <h5
            style={{
              fontFamily: "Rubik",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24.3px",
            }}
          >
            הסיסמה אופסה בהצלחה{" "}
          </h5>
        </div>
      </Layout>
    </>
  );
};
export default CompleteResetPassword;
