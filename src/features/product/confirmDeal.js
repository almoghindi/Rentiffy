import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Wrapper } from "@googlemaps/react-wrapper";
import { InputAdornment } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SecurityIcon from "@mui/icons-material/Security";
import BadgeIcon from "@mui/icons-material/Badge";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
function MyMapComponent({ center, zoom }) {
  const ref = React.useRef();

  React.useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    <div
      style={{ width: "400px", height: "300px", borderRadius: "16px" }}
      ref={ref}
      id="map"
    />
  );
}

const ProductDetails = () => {
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
            שם המוצר
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
        }}
      >
        <div
          style={{
            display: "flex",
            width: "66%",
            marginTop: "50px",
          }}
        >
          <div style={{ marginLeft: "auto", marginTop: "18px" }}>
            {" "}
            <div
              style={{
                marginLeft: "auto",
                border: "1px solid #d0d0d0",
                borderRadius: "16px",
                padding: "8px",
                width: "400px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <CardMedia
                  sx={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "16px",
                  }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                  title="save"
                />{" "}
                <CardContent
                  style={{ marginRight: "20px", textAlign: "right" }}
                >
                  <h3
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "10px",
                    }}
                  >
                    שם מוצר{" "}
                  </h3>

                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    sx={{ color: "#0CCE97", marginTop: "-20px" }}
                  />
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                    }}
                  >
                    תיאור המוצר ופרטים{" "}
                  </Typography>
                </CardContent>{" "}
              </div>

              <Divider variant="middle" />
              <h5
                style={{
                  fontSize: "18px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                }}
              >
                פירוט מחיר{" "}
              </h5>
              <div></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    marginLeft: "auto",
                  }}
                >
                  שם המוצר{" "}
                </h5>
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                  }}
                >
                  ₪{" "}
                </h5>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-50px",
                }}
              >
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                    marginLeft: "auto",
                  }}
                >
                  אורך תקופת השימוש{" "}
                </h5>
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                  }}
                >
                  ימים{" "}
                </h5>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-40px",
                }}
              >
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    marginLeft: "auto",
                  }}
                >
                  עלויות נוספות{" "}
                </h5>
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                  }}
                >
                  ₪{" "}
                </h5>
              </div>
              <Divider variant="middle" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    marginLeft: "auto",
                  }}
                >
                  סך הכל תשלום{" "}
                </h5>
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                  }}
                >
                  ₪{" "}
                </h5>
              </div>
            </div>
          </div>

          <div style={{ marginRight: "50px" }}>
            <h5
              style={{
                fontSize: "18px",
                fontFamily: "Rubik",
                fontWeight: "600",
              }}
            >
              פרטי העסקה
            </h5>

            <div style={{ display: "block" }}>
              <div
                style={{
                  float: "right",
                  marginTop: "15px",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      marginLeft: "auto",
                    }}
                  >
                    תאריכים{" "}
                  </h5>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    עריכה{" "}
                  </h5>
                </div>
                <p style={{ width: "1000px", marginTop: "-10px" }}>
                  23-26 במרץ
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      marginLeft: "auto",
                    }}
                  >
                    הערות למשכיר{" "}
                  </h5>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    הוספה/עריכה{" "}
                  </h5>
                </div>
                <p
                  style={{
                    width: "1000px",
                    marginTop: "-10px",
                    marginBottom: "50px",
                  }}
                >
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אליתs
                </p>
              </div>

              <div
                style={{ marginTop: "50px", display: "flex", width: "100%" }}
              >
                <Wrapper apiKey={"AIzaSyAr2huAaENhwhPCZInY1C_SY8M9Hx31Bm4"}>
                  <MyMapComponent
                    zoom={4}
                    center={{
                      lat: 10.99835602,
                      lng: 77.01502627,
                    }}
                  />
                </Wrapper>
                <div
                  style={{ margin: "20px", textAlign: "right", width: "50%" }}
                >
                  <h5
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    מידע נוסף
                  </h5>
                  <ul
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      alignText: "right",
                    }}
                  >
                    <li>
                      {" "}
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם \
                      דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                    </li>
                    <li>
                      לו לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית רם
                      איפסום דולור סיט אמט
                    </li>
                    <li>
                      לורם לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                      איפסום דולור סיט אמט
                    </li>
                    <li>קונסקטורר אדיפיסינג אלית ורר אדיפיסינג אלית</li>
                    <li>
                      לורם איפסום דולור סיט אמ לורם איפסום דולור סיט אמט,
                      קונסקטורר אדיפיסינג אלית ט, קונסקטורר
                    </li>
                  </ul>
                </div>
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
                  תשלום באמצעות{" "}
                </h5>

                <StyledTextField
                  placeholder="מספר כרטיס"
                  style={{ width: "80%", float: "right" }}
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
                  style={{ width: "39%", float: "right" }}
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
                  style={{ width: "39%", float: "right", marginRight: "2%" }}
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
                  style={{ width: "80%", float: "right" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{ marginRight: "6px" }}>
                        <BadgeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
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
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    textAlign: "right",
                    textDecoration: "underline",
                  }}
                >
                  להזנת קוד קופון
                </h5>
              </div>
              <div
                style={{
                  float: "right",
                  marginTop: "50px",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      marginLeft: "auto",
                    }}
                  >
                    מדיניות ביטולים{" "}
                  </h5>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    לצפייה בפוליסה{" "}
                  </h5>
                </div>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                  איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                  אלמנקוםעעעעעכדכגככגגעגע
                </p>
              </div>
              <div
                style={{
                  float: "right",
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      marginLeft: "auto",
                    }}
                  >
                    תנאי ביטוח{" "}
                  </h5>
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    לצפייה בפוליסה{" "}
                  </h5>
                </div>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                  איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                  אלמנקוםעעעעעכדכגככגגעגע
                </p>
              </div>
              <div style={{ width: "80%" }}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
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
                  אישור ותשלום{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
