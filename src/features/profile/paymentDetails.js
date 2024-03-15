import React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SecurityIcon from "@mui/icons-material/Security";
import BadgeIcon from "@mui/icons-material/Badge";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const StyledTextField = styled(TextField)`
  background: white;
  border: 1px solid #e2e2e1;
  width: 400px;
  height: 46px;
  font-family: Rubik;
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

const PaymentDetails = () => {
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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "66%",
            marginTop: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              lineHeight: "42.66px",
              fontFamily: "Rubik",
              fontweight: "600",
              margin: "auto",
            }}
          >
            פרטי תשלום{" "}
          </h2>
          <button
            style={{
              width: "30px",
              height: "30px",
              background: "#ffffff",
              borderRadius: "83.3333px",
              border: "0.83333px solid #dcdcdc",
              flex: "left",
            }}
          >
            <ArrowBackIosNewIcon
              sx={{ width: "18px", height: "25px", fontWeight: "400" }}
            />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "66%",
            marginTop: "50px",
            marginBottom: "250px",
          }}
        >
          <div style={{ marginLeft: "auto", marginTop: "48px" }}>
            {" "}
            <div
              style={{
                marginLeft: "auto",
                border: "1px solid #d0d0d0",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "8px",
                width: "400px",
              }}
            >
              <Link to="/profile">
                <Button
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "white",
                    borderRadius: "100px",
                    width: "95%",
                    height: "30px",
                    ":hover": { backgroundColor: "#0CC397", color: "white" },
                    marginTop: "100px",
                  }}
                >
                  פרופיל{" "}
                </Button>{" "}
              </Link>
              <Button
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontFamily: "Rubik",
                  backgroundColor: "#0CC397",
                  borderRadius: "100px",
                  width: "95%",
                  height: "30px",
                  ":hover": { backgroundColor: "#0CC397" },
                  marginTop: "10px",
                }}
              >
                פרטי תשלום{" "}
              </Button>{" "}
              <Link to="/profile/notifications">
                <Button
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "white",
                    borderRadius: "100px",
                    width: "95%",
                    height: "30px",
                    ":hover": { backgroundColor: "#0CC397", color: "white" },
                    marginTop: "10px",
                  }}
                >
                  התראות{" "}
                </Button>{" "}
              </Link>
              <Button
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontFamily: "Rubik",
                  backgroundColor: "white",
                  borderRadius: "100px",
                  width: "95%",
                  height: "30px",
                  ":hover": { backgroundColor: "#0CC397", color: "white" },
                  marginTop: "10px",
                }}
              >
                לוח שנה{" "}
              </Button>{" "}
              <Link to="/profile/my-items">
                <Button
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "white",
                    borderRadius: "100px",
                    width: "95%",
                    height: "30px",
                    ":hover": { backgroundColor: "#0CC397", color: "white" },
                    marginTop: "10px",
                  }}
                >
                  הפריטים שלי{" "}
                </Button>{" "}
              </Link>
              <Link to="/profile/rented-items">
                <Button
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "white",
                    borderRadius: "100px",
                    width: "95%",
                    height: "30px",
                    ":hover": { backgroundColor: "#0CC397", color: "white" },
                    marginTop: "10px",
                  }}
                >
                  פריטים ששכרתי{" "}
                </Button>{" "}
              </Link>
              <Button
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontFamily: "Rubik",
                  backgroundColor: "white",
                  borderRadius: "100px",
                  width: "95%",
                  height: "30px",
                  ":hover": { backgroundColor: "#0CC397", color: "white" },
                  marginTop: "10px",
                }}
              >
                מועדפים{" "}
              </Button>{" "}
              <Button
                sx={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontFamily: "Rubik",
                  backgroundColor: "white",
                  borderRadius: "100px",
                  width: "95%",
                  height: "30px",
                  ":hover": { backgroundColor: "#0CC397", color: "white" },
                  marginTop: "10px",
                  marginBottom: "100px",
                }}
              >
                הודעות{" "}
              </Button>{" "}
            </div>
          </div>

          <div style={{ marginRight: "50px" }}>
            <Box
              sx={{
                marginTop: "50px",
                background: "#fff",
                border: " 1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: " 16px",
              }}
            >
              <div style={{ marginRight: "10%" }}>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginBottom: "1%",
                    }}
                  >
                    שם בעל הכרטיס{" "}
                  </h5>
                  <StyledTextField
                    placeholder="שם מלא"
                    style={{ width: "90%", marginLeft: "10%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginBottom: "1%",
                    }}
                  >
                    מייל לקבלת אישור{" "}
                  </h5>
                  <StyledTextField
                    placeholder="mail@gmail.com"
                    style={{ width: "90%", marginLeft: "10%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    אמצעי תשלום{" "}
                  </h5>
                  <StyledTextField
                    placeholder="כרטיס אשראי"
                    style={{ width: "90%", float: "right" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ marginRight: "6px" }}>
                          <AddCardIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledTextField
                    placeholder="מספר כרטיס"
                    style={{ width: "90%", float: "right" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ marginRight: "6px" }}>
                          <LockOpenIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledTextField
                    placeholder="תאריך תפוגה"
                    style={{ width: "44%", float: "right" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ marginRight: "6px" }}>
                          <DateRangeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledTextField
                    placeholder="קוד אבטחה בגב הכרטיס"
                    style={{ width: "44%", float: "right", marginRight: "2%" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ marginRight: "6px" }}>
                          <SecurityIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <StyledTextField
                    placeholder="תעודת זהות של בעל הכרטיס"
                    style={{ width: "90%", float: "right" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment sx={{ marginRight: "6px" }}>
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "80%",
                    textAlign: "right",
                    marginTop: "280px",
                  }}
                >
                  <BpCheckbox defaultChecked />
                  זכור אמצעי תשלום{" "}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "#fff",
                    color: "#0CC397",
                    border: "2px solid #0CCE97",
                    borderRadius: "100px",
                    width: "159px",
                    height: "56px",
                    margin: "5px",
                    ":hover": { backgroundColor: "#fff" },
                    marginBottom: "40px",
                  }}
                >
                  ביטול{" "}
                </Button>
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
                    margin: "5px",

                    width: "159px",
                    height: "56px",
                    ":hover": { backgroundColor: "#0CC397" },
                    marginBottom: "40px",
                  }}
                >
                  שמירה{" "}
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
