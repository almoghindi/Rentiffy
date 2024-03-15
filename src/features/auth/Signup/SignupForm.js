import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Checkbox from "@mui/material/Checkbox";

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

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#0CC397",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#0CC397",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const SignupForm = () => {
  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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

      <div style={{ alignSelf: "flex-start", marginTop: "20px" }}>
        <BpCheckbox defaultChecked />
        הסכמה לתנאי השימוש
      </div>

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
        הרשמה
      </Button>
      <Divider flexItem style={{ height: "4%", width: "400px" }}>
        או התחבר באמצעות
      </Divider>
    </div>
  );
};

export default SignupForm;
