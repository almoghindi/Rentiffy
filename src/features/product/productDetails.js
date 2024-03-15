import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";

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
      style={{ width: "50%", height: "300px", borderRadius: "16px" }}
      ref={ref}
      id="map"
    />
  );
}

const ProductDetails = () => {
  const [date, setDate] = React.useState(dayjs());

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
              }}
            >
              <h5
                style={{
                  fontSize: "18px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                }}
              >
                בחירת תאריכים
              </h5>
              <div style={{ direction: "ltr" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CalendarPicker
                    date={date}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </LocalizationProvider>
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
                    display: "block",
                    margin: "10px",
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                  }}
                >
                  <p>יום אחד</p>
                  <div
                    style={{
                      padding: "7px 24px",
                      border: "1px solid black",
                      borderRadius: "100px",
                    }}
                  >
                    ₪100
                  </div>
                </div>
                <div
                  style={{
                    display: "block",
                    margin: "10px",
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                  }}
                >
                  <p> 5+ ימים</p>
                  <div
                    style={{
                      padding: "7px 24px",
                      border: "1px solid black",
                      borderRadius: "100px",
                    }}
                  >
                    ₪90
                  </div>
                </div>
                <div
                  style={{
                    display: "block",
                    margin: "10px",
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                  }}
                >
                  <p>14+ ימים</p>
                  <div
                    style={{
                      padding: "7px 24px",
                      border: "1px solid black",
                      borderRadius: "100px",
                    }}
                  >
                    ₪70
                  </div>
                </div>
              </div>
            </div>
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
              <h5
                style={{
                  fontSize: "18px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                }}
              >
                פירוט מחיר{" "}
              </h5>
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
              <Link to="/confirmdeal">
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontFamily: "Rubik",
                    backgroundColor: "#0CC397",
                    borderRadius: "100px",
                    width: "133px",
                    height: "46px",
                    ":hover": { backgroundColor: "#0CC397" },
                  }}
                >
                  השכרה{" "}
                </Button>
              </Link>
            </div>
          </div>

          <div style={{ marginRight: "50px" }}>
            <ImageList
              sx={{ width: "1000px", height: "800px", direction: "ltr" }}
              variant="quilted"
              cols={4}
              rowHeight={250}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 190, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "16px" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "10px 36px",
                  border: "1px solid #dcdcdc",
                  borderRadius: "100px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                קטגוריה
              </div>

              <div
                style={{
                  padding: "10px 36px",
                  border: "1px solid #dcdcdc",
                  borderRadius: "100px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                תת קטגוריה
              </div>
              <div
                style={{
                  padding: "10px 36px",
                  border: "1px solid #dcdcdc",
                  borderRadius: "100px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{ color: "#0CCE97", marginLeft: "10px" }}
                />{" "}
                {"3 דירוגים"}
              </div>
              <div
                style={{
                  padding: "10px 36px",
                  border: "1px solid #dcdcdc",
                  borderRadius: "100px",
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "30px",
                  margin: "10px",
                }}
              >
                מחיר התחלתי
              </div>
            </div>
            <div style={{ display: "block" }}>
              <div
                style={{
                  float: "right",
                  marginTop: "50px",
                  textAlign: "right",
                }}
              >
                <h5
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "30px",
                  }}
                >
                  תיאור המוצר
                </h5>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                  איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום
                  ניסילורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                  איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום
                  ניסי
                </p>
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
                  אלמנקוםעעעעעכדכגככגגעגע לורם איפסום דולור סיט אמט, קונסקטורר
                  אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג
                  אלית. סת אלמנקוםעעעעעכדכגככגגעגע
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
                  אלמנקוםעעעעעכדכגככגגעגע לורם איפסום דולור סיט אמט, קונסקטורר
                  אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג
                  אלית. סת אלמנקוםעעעעעכדכגככגגעגע
                </p>
              </div>
              <div>
                <div> s</div>
                <Card sx={{ display: "flex" }}>
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
                      <Rating
                        name="read-only"
                        value={4}
                        readOnly
                        sx={{ color: "#0CCE97", marginLeft: "10px" }}
                      />{" "}
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                          fontWeight: "600",
                          fontSize: "18px",
                          fontFamily: "Rubik",
                        }}
                      >
                        שם הלקוח{" "}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                          fontWeight: "400",
                          fontSize: "18px",
                          fontFamily: "Rubik",
                        }}
                      >
                        הצטרף בתאריך 05/02/2023{" "}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                          fontWeight: "600",
                          fontSize: "18px",
                          fontFamily: "Rubik",
                          textDecoration: "underline",
                        }}
                      >
                        לצפיה בפרופיל{" "}
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                      marginRight: "auto",
                    }}
                  >
                    <Button
                      sx={{
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "30px",
                        fontFamily: "Rubik",
                        borderRadius: "100px",
                        border: "1px solid #0CC397",
                        color: "#0CC397",
                        width: "133px",
                        height: "46px",
                        ":hover": {
                          backgroundColor: "#0CC397",
                          color: "white",
                        },
                        marginLeft: "10px",
                      }}
                    >
                      הודעה{" "}
                    </Button>
                  </Box>
                </Card>
              </div>
              <div style={{ marginTop: "50px", display: "flex" }}>
                <Wrapper apiKey={"AIzaSyAr2huAaENhwhPCZInY1C_SY8M9Hx31Bm4"}>
                  <MyMapComponent
                    zoom={4}
                    center={{
                      lat: 10.99835602,
                      lng: 77.01502627,
                    }}
                  />
                </Wrapper>
                <div style={{ margin: "10px", textAlign: "right" }}>
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
                      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                    </li>
                    <li>לורם איפסום דולור סיט אמט</li>
                    <li>לורם איפסום דולור סיט אמט</li>
                    <li>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית</li>
                    <li>לורם איפסום דולור סיט אמט, קונסקטורר</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: "50px" }}>
                <h5
                  style={{
                    fontSize: "18px",
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    textAlign: "right",
                  }}
                >
                  לקוחות ממליצים{" "}
                </h5>
                <Card sx={{ display: "flex", boxShadow: "none" }}>
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
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                        איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                        אלמנקום ניסי{" "}
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
                </Card>{" "}
                <Divider />
                <Card sx={{ display: "flex", boxShadow: "none" }}>
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
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                        איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                        אלמנקום ניסי{" "}
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
                </Card>{" "}
                <Divider />
                <Card sx={{ display: "flex", boxShadow: "none" }}>
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
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם
                        איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                        אלמנקום ניסי{" "}
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
                </Card>{" "}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                >
                  <Button
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "30px",
                      fontFamily: "Rubik",
                      borderRadius: "100px",
                      border: "1px solid #0CC397",
                      color: "#0CC397",
                      width: "180px",
                      height: "46px",
                      ":hover": { backgroundColor: "#0CC397", color: "white" },
                      marginLeft: "auto",
                    }}
                  >
                    הוספת דירוג וביקורת{" "}
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 3,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];

export default ProductDetails;
