import React from "react";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import FacebookIcon from "../../assets/facebook-icon.png";
import GoogleIcon from "../../assets/google-icon.png";

const SocialMediaButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: "40px",
      }}
    >
      <Button
        sx={{
          color: "white",
          border: "1px solid #e2e2e1",
          display: "block",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "30px",
          fontFamily: "Rubik",
          borderRadius: "100px",
          width: "200px",
          height: "46px",
        }}
        startIcon={
          <Avatar
            sx={{ width: "24px", height: "24px", marginRight: "67px" }}
            src={FacebookIcon}
          />
        }
      />
      <Button
        sx={{
          color: "white",
          border: "1px solid #e2e2e1",
          display: "block",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "30px",
          fontFamily: "Rubik",
          borderRadius: "100px",
          width: "200px",
          height: "46px",
        }}
        startIcon={
          <Avatar
            sx={{ width: "24px", height: "24px", marginRight: "67px" }}
            src={GoogleIcon}
          />
        }
      />
    </div>
  );
};

export default SocialMediaButtons;
