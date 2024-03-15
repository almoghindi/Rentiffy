import React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "100px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: "18px",
    fontWeight: "400",
    height: "36px",
    padding: "8px, 16px, 16px, 8px",
    justifyContent: "center",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: "Rubik",
    "&:focus": {
      borderRadius: "100px",
      borderColor: "#0CCE97",
    },
  },
}));

const Notifications = () => {
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
            התראות{" "}
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
              <Link to="/profile/payment-details">
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
                  פרטי תשלום{" "}
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
                {" "}
                התראות{" "}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "40px",
              }}
            >
              <NativeSelect
                id="demo-customized-select-native"
                input={<BootstrapInput />}
                style={{
                  width: "180px",
                  marginLeft: "auto",
                }}
              >
                <option aria-label="None" value={0}>
                  כל ההתראות{" "}
                </option>
                <option value={1}>30 ימים אחרונים</option>
                <option value={2}>שבוע אחרון</option>
                <option value={3}>יום אחרון</option>
              </NativeSelect>{" "}
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
                <MoreHorizIcon
                  sx={{ width: "18px", height: "25px", fontWeight: "400" }}
                />
              </button>
            </div>{" "}
            <h5
              style={{
                fontSize: "18px",
                fontFamily: "Rubik",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              השבוע האחרון{" "}
            </h5>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 70,
                    height: 70,
                    marginRight: "auto",
                  }}
                />{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    שם הלקוח מעוניין להשכיר מכם את הפריט שם הפריט בין התאריכים
                    12-14/4/2023{" "}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0 auto",
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
                    width: "93px",
                    height: "46px",
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

                    width: "93px",
                    height: "46px",
                    ":hover": { backgroundColor: "#0CC397" },
                    marginBottom: "40px",
                  }}
                >
                  שמירה{" "}
                </Button>
              </div>{" "}
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                }}
              >
                <MoreHorizIcon
                  sx={{
                    width: "18px",
                    height: "25px",
                    fontWeight: "400",
                    flex: "flex-end",
                  }}
                />
              </button>{" "}
            </Card>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <button
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#ffffff",
                    borderRadius: "83.3333px",
                    border: "0.83333px solid #dcdcdc",
                    margin: "10px",
                    marginRight: "auto",
                  }}
                >
                  <NotificationsIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      fontWeight: "400",
                      color: "lightgrey",
                    }}
                  />
                </button>{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    פריט חדש פורסם תחת הקטגוריה רחפנים שהתעניינתם בה
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                  marginRight: "auto",
                }}
              >
                <MoreHorizIcon
                  sx={{
                    width: "18px",
                    height: "25px",
                    fontWeight: "400",
                  }}
                />
              </button>{" "}
            </Card>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 70,
                    height: 70,
                    marginRight: "auto",
                  }}
                />{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    שם הלקוח מעוניין להשכיר מכם את הפריט שם הפריט בין התאריכים
                    12-14/4/2023{" "}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0 auto",
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
                    width: "93px",
                    height: "46px",
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

                    width: "93px",
                    height: "46px",
                    ":hover": { backgroundColor: "#0CC397" },
                    marginBottom: "40px",
                  }}
                >
                  שמירה{" "}
                </Button>
              </div>{" "}
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                }}
              >
                <MoreHorizIcon
                  sx={{ width: "18px", height: "25px", fontWeight: "400" }}
                />
              </button>{" "}
            </Card>
            <h5
              style={{
                fontSize: "18px",
                fontFamily: "Rubik",
                fontWeight: "600",
                textAlign: "right",
              }}
            >
              מוקדם יותר{" "}
            </h5>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 70,
                    height: 70,
                    marginRight: "auto",
                  }}
                />{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                    color: "#7B7B7B",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    שם הלקוח מעוניין להשכיר מכם את הפריט שם הפריט בין התאריכים
                    12-14/4/2023{" "}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0 auto",
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
                    width: "93px",
                    height: "46px",
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

                    width: "93px",
                    height: "46px",
                    ":hover": { backgroundColor: "#0CC397" },
                    marginBottom: "40px",
                  }}
                >
                  שמירה{" "}
                </Button>
              </div>{" "}
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                }}
              >
                <MoreHorizIcon
                  sx={{
                    width: "18px",
                    height: "25px",
                    fontWeight: "400",
                    flex: "flex-end",
                  }}
                />
              </button>{" "}
            </Card>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <button
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#ffffff",
                    borderRadius: "83.3333px",
                    border: "0.83333px solid #dcdcdc",
                    margin: "10px",
                    marginRight: "auto",
                  }}
                >
                  <NotificationsIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      fontWeight: "400",
                      color: "lightgrey",
                    }}
                  />
                </button>{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                    color: "#7B7B7B",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    פריט חדש פורסם תחת הקטגוריה רחפנים שהתעניינתם בה
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                  marginRight: "auto",
                }}
              >
                <MoreHorizIcon
                  sx={{
                    width: "18px",
                    height: "25px",
                    fontWeight: "400",
                  }}
                />
              </button>{" "}
            </Card>
            <Card
              sx={{
                display: "flex",
                border: "1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 4,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 70,
                    height: 70,
                    marginRight: "auto",
                  }}
                />{" "}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    textAlign: "right",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                    color: "#7B7B7B",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                    }}
                  >
                    שם הלקוח מעוניין להשכיר מכם את הפריט שם הפריט בין התאריכים
                    12-14/4/2023{" "}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      color: "#0CC397",
                    }}
                  >
                    לפני 32 דקות{" "}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                ></Box>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  margin: "0 auto",
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
                    width: "93px",
                    height: "46px",
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

                    width: "93px",
                    height: "46px",
                    ":hover": { backgroundColor: "#0CC397" },
                    marginBottom: "40px",
                  }}
                >
                  שמירה{" "}
                </Button>
              </div>{" "}
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  background: "#ffffff",
                  borderRadius: "83.3333px",
                  border: "0.83333px solid #dcdcdc",
                  margin: "10px",
                }}
              >
                <MoreHorizIcon
                  sx={{ width: "18px", height: "25px", fontWeight: "400" }}
                />
              </button>{" "}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
