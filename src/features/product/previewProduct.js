import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Rating from "@mui/material/Rating";
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

const PreviewProduct = () => {
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
            width: "50%",
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
            width: "50%",
            marginTop: "50px",
          }}
        >
          <div style={{ marginRight: "50px" }}>
            <ImageList
              sx={{
                width: "1000px",
                height: "800px",
                direction: "ltr",
                margin: "auto",
              }}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <Link to="/">
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
                </Link>
                <Link to="/product-details">
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
                    אישור ופרסום{" "}
                  </Button>
                </Link>
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

export default PreviewProduct;
