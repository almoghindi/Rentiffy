import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { InputAdornment } from "@mui/material";
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

const Profile = () => {
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
            פרופיל{" "}
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
                  marginTop: "100px",
                }}
              >
                פרופיל{" "}
              </Button>{" "}
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
              <Avatar
                sx={{
                  margin: "auto",
                  width: "240px",
                  height: "240px",
                  marginTop: "60px",
                  marginBottom: "40px",
                }}
              >
                <ImageIcon sx={{ width: "90px", height: "90px" }} />
              </Avatar>
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
                  width: "180px",
                  height: "46px",
                  margin: "auto",
                  ":hover": { backgroundColor: "#fff" },
                  marginBottom: "40px",
                }}
              >
                שינוי תמונת פרופיל{" "}
              </Button>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontFamily: "Rubik",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                בדרך כלל מגיב תוך מספר שעות
              </p>
            </Box>

            <Box
              sx={{
                marginTop: "50px",
                background: "#fff",
                border: " 1px solid #DCDCDC",
                boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                borderRadius: " 16px",
              }}
            >
              <div style={{ display: "flex" }}>
                <NativeSelect
                  id="demo-customized-select-native"
                  input={<BootstrapInput />}
                  style={{
                    width: "180px",
                    marginTop: "60px",
                    marginRight: "17%",
                  }}
                >
                  <option aria-label="None" value={0}>
                    כל הזמן{" "}
                  </option>
                  <option value={1}>30 ימים אחרונים</option>
                  <option value={2}>שבוע אחרון</option>
                  <option value={3}>יום אחרון</option>
                </NativeSelect>{" "}
              </div>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "95%",
                  marginBottom: "40px",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: "187px",
                      height: "187px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardContent>
                      <h3
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "400",
                          fontSize: "18px",
                          lineHeight: "10px",
                          marginTop: "40px",
                        }}
                      >
                        מספר עסקאות{" "}
                      </h3>
                      <h2
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "600",
                          fontSize: "36px",
                          lineHeight: "10px",
                          marginTop: "40px",
                          color: "#0CCE97",
                        }}
                      >
                        4
                      </h2>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: "187px",
                      height: "187px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardContent>
                      <h3
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "10px",
                          marginTop: "40px",
                        }}
                      >
                        מספר פניות{" "}
                      </h3>{" "}
                      <h2
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "600",
                          fontSize: "36px",
                          lineHeight: "10px",
                          marginTop: "40px",
                          color: "#0CCE97",
                        }}
                      >
                        7
                      </h2>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: "187px",
                      height: "187px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardContent>
                      <h3
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "400",
                          fontSize: "18px",
                          lineHeight: "10px",
                          marginTop: "40px",
                        }}
                      >
                        רווח{" "}
                      </h3>
                      <h2
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "600",
                          fontSize: "36px",
                          lineHeight: "10px",
                          marginTop: "40px",
                          color: "#0CCE97",
                        }}
                      >
                        ₪362
                      </h2>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: "187px",
                      height: "187px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardContent>
                      <h3
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "400",
                          fontSize: "18px",
                          lineHeight: "10px",
                          marginTop: "40px",
                        }}
                      >
                        דירוג ממוצע{" "}
                      </h3>
                      <h2
                        style={{
                          fontFamily: "Rubik",
                          fontWeight: "600",
                          fontSize: "36px",
                          lineHeight: "10px",
                          marginTop: "40px",
                          color: "#0CCE97",
                        }}
                      >
                        4.3★{" "}
                      </h2>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>{" "}
            </Box>

            <div style={{ display: "block" }}>
              <Box
                sx={{
                  marginTop: "50px",
                  background: "#fff",
                  border: " 1px solid #DCDCDC",
                  boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                  borderRadius: " 16px",
                }}
              >
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  >
                    שם מלא{" "}
                  </h5>
                  <StyledTextField
                    placeholder="שם מלא"
                    style={{ width: "90%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  >
                    מייל{" "}
                  </h5>
                  <StyledTextField
                    placeholder="mail@gmail.com"
                    style={{ width: "90%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  >
                    טלפון ליצירת קשר{" "}
                  </h5>
                  <StyledTextField
                    placeholder="000-0000000"
                    style={{ width: "90%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  >
                    על עצמי{" "}
                  </h5>
                  <StyledTextField
                    placeholder="פירוט על עצמי"
                    style={{ width: "90%" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  >
                    כתובת מגורים{" "}
                  </h5>
                  <StyledTextField
                    placeholder="עיר, רחוב ומספר בית"
                    style={{ width: "90%" }}
                  />
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
              <div style={{ marginTop: "50px", marginBottom: "30px" }}>
                <Box
                  sx={{
                    marginTop: "50px",
                    background: "#fff",
                    border: " 1px solid #DCDCDC",
                    boxShadow: "0px 0px 14px rgba(0, 26, 59, 0.08)",
                    borderRadius: " 16px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      textAlign: "right",
                      marginRight: "7.5%",
                      marginTop: "80px",
                    }}
                  >
                    לקוחות ממליצים{" "}
                  </h5>
                  <Card
                    sx={{
                      display: "flex",
                      boxShadow: "none",
                      width: "90%",
                      marginRight: "5%",
                    }}
                  >
                    {" "}
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
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              textAlign: "right",
                            }}
                          >
                            שם הלקוח{" "}
                          </Typography>{" "}
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              marginRight: "auto",
                            }}
                          >
                            05/02/2023{" "}
                          </Typography>{" "}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Rating
                            name="read-only"
                            value={4}
                            readOnly
                            sx={{
                              color: "#0CCE97",
                              flex: "right",
                              marginLeft: "auto",
                            }}
                          />{" "}
                        </Box>

                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                            fontFamily: "Rubik",
                          }}
                        >
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.
                          סת אלמנקום ניסי{" "}
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
                      <StyledTextField
                        placeholder="תגובה ללקוח"
                        style={{ width: "90%", marginBottom: "20px" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{ marginLeft: "6px" }}>
                              <SendIcon
                                sx={{
                                  transform: "rotate(180deg)",
                                  cursor: "pointer",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Card>{" "}
                  <Divider />
                  <Card
                    sx={{
                      display: "flex",
                      boxShadow: "none",
                      width: "90%",
                      marginRight: "5%",
                    }}
                  >
                    {" "}
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
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              textAlign: "right",
                            }}
                          >
                            שם הלקוח{" "}
                          </Typography>{" "}
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              marginRight: "auto",
                            }}
                          >
                            05/02/2023{" "}
                          </Typography>{" "}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Rating
                            name="read-only"
                            value={4}
                            readOnly
                            sx={{
                              color: "#0CCE97",
                              flex: "right",
                              marginLeft: "auto",
                            }}
                          />{" "}
                        </Box>

                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                            fontFamily: "Rubik",
                          }}
                        >
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.
                          סת אלמנקום ניסי{" "}
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
                      <StyledTextField
                        placeholder="תגובה ללקוח"
                        style={{ width: "90%", marginBottom: "20px" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{ marginLeft: "6px" }}>
                              <SendIcon
                                sx={{
                                  transform: "rotate(180deg)",
                                  cursor: "pointer",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Card>{" "}
                  <Divider />
                  <Card
                    sx={{
                      display: "flex",
                      boxShadow: "none",
                      width: "90%",
                      marginRight: "5%",
                    }}
                  >
                    {" "}
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
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              textAlign: "right",
                            }}
                          >
                            שם הלקוח{" "}
                          </Typography>{" "}
                          <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              fontFamily: "Rubik",
                              marginRight: "auto",
                            }}
                          >
                            05/02/2023{" "}
                          </Typography>{" "}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <Rating
                            name="read-only"
                            value={4}
                            readOnly
                            sx={{
                              color: "#0CCE97",
                              flex: "right",
                              marginLeft: "auto",
                            }}
                          />{" "}
                        </Box>

                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                            fontFamily: "Rubik",
                          }}
                        >
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית.
                          סת אלמנקום ניסי{" "}
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
                      <StyledTextField
                        placeholder="תגובה ללקוח"
                        style={{ width: "90%", marginBottom: "20px" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{ marginLeft: "6px" }}>
                              <SendIcon
                                sx={{
                                  transform: "rotate(180deg)",
                                  cursor: "pointer",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Card>{" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  ></Box>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
