import React from "react";
import ProductsPic from "../assets/products-landingOage.png";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./landing-page.css";
import Save from "../assets/save-home.png";
import Friendly from "../assets/friendly-home.png";
import Touch from "../assets/touch-home.png";
import Shield from "../assets/shield-home.png";
import Rating from "@mui/material/Rating";
import Almog from "../assets/almog.jpeg";
import Ben from "../assets/ben.jpg";
import Naor from "../assets/naor.jfif";
import Mike from "../assets/mike.jfif";
import Ensurence from "../assets/ensurence.png";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Slider from "@mui/material/Slider";
import Phone from "../assets/phone-section.png";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

const items = [
  [
    {
      title: "אופניים",
      img: "https://breadwinnercycles.com/wp-content/uploads/2016/02/Profile-e1667513138452.jpg",
    },
    {
      title: "צילום ואודיו",
      img: "https://cdn.shopify.com/s/files/1/0521/9496/7750/files/Kamerastore_all_cameras_ad_550x.jpg?v=1652856189",
    },
    {
      title: "אירועים",
      img: "https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ",
    },
    {
      title: "מסיבות",
      img: "https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg",
    },
  ],
  [
    {
      title: "קמפינג וטיולים",
      img: "https://static.wixstatic.com/media/nsplsh_98b9913621de415eb2d12568d30f67ef~mv2.jpg/v1/crop/x_0,y_0,w_4032,h_2839/fill/w_600,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Michael%20Rivera%20%F0%9F%87%B5%F0%9F%87%AD.jpg",
    },
    {
      title: "שמלות וחליפות",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDVufWy6kOlfqk9lFKMXFoxho-hTWRJd60g&usqp=CAU",
    },
    {
      title: "ספורט ימי",
      img: "https://hips.hearstapps.com/hmg-prod/images/excited-young-woman-riding-wakeboard-royalty-free-image-1622050074.jpg",
    },
    {
      title: "ספורט חורפי",
      img: "https://images.ctfassets.net/4ml977zzzy8h/3cC3Ypndjyt8kuF64f0wFo/054a47924651a17d02b6528eefd97166/winter-sports-mini-lesson.jpg?fm=webp",
    },
  ],
];

const reviews = [
  {
    image: Naor,
    title: "נאור רוזנס, באר שבע",
    rating: 5,
    review: "חסכתי מאות שקלים בחודש ועזרתי לסביבה יש יותר טוב מזה ?",
  },
  {
    image: Mike,
    title: "מיכאל זילברמן, תל אביב",
    rating: 4,
    review:
      "פלטפורמה מצויינת וזמינה, מענה אמיתי ומהיר לכל בעיה, אוכלוסייה וקהילה איכותית במיוחד ועוזר לכדור הארץ שלנו.",
  },
  {
    image: Ben,
    title: "בן לנדרמן, חיפה",
    rating: 5,
    review:
      " לא האמנתי שכל כך אהיה מרוצה, מחירים מצויינים ושינוי שלם במחשבה לגבי רכישת פריטים חדשים ! בנוסף להכנסה צדדית נוספת עזר לי מאוד !",
  },
  {
    image: Almog,
    title: "אלמוג הינדי, חדרה",
    rating: 5,
    review:
      "פלטפורמה מדהימה ! בהתחלה חששתי להשתמש מחשש למוצרים שלי אך בהמשך הבנתי שהקהילה מדהימה ואכפתית ותמיד יש ביטוח להכל ! מומלץ בחום !!!",
  },
];

function Item(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={6}
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
              width: "240px",
              height: "251px",
              borderRadius: "16px",
              margin: "12px",
            }}
          >
            <CardMedia
              sx={{ height: "173px" }}
              image={props.item[0].img}
              title="shield"
            />{" "}
            <CardContent>
              <h3
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "10px",
                }}
              >
                {props.item[0].title}
              </h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
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
              width: "240px",
              height: "251px",
              borderRadius: "16px",
              margin: "12px",
            }}
          >
            <CardMedia
              sx={{ height: "173px" }}
              image={props.item[1].img}
              title="shield"
            />
            <CardContent>
              <h3
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "10px",
                }}
              >
                {props.item[1].title}
              </h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
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
              width: "240px",
              height: "251px",
              borderRadius: "16px",
              margin: "12px",
            }}
          >
            <CardMedia
              sx={{ height: "173px" }}
              image={props.item[2].img}
              title="shield"
            />{" "}
            <CardContent>
              <h3
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "10px",
                }}
              >
                {props.item[2].title}
              </h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
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
              width: "240px",
              height: "251px",
              borderRadius: "16px",
              margin: "12px",
            }}
          >
            <CardMedia
              sx={{ height: "173px" }}
              image={props.item[3].img}
              title="shield"
            />
            <CardContent>
              <h3
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "10px",
                }}
              >
                {props.item[3].title}
              </h3>
            </CardContent>
          </Card>
        </Grid>
      </Grid>{" "}
    </Box>
  );
}

function ReviewCard(props) {
  return (
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
          width: "480px",
          height: "320px",
          borderRadius: "16px",
          margin: "12px",
          marginTop: "100px",
        }}
      >
        <CardMedia
          sx={{
            width: "85px",
            height: "85px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "100px",
            marginTop: "38.5px",
          }}
          image={props.item.image}
          title="almog"
        />
        <CardContent>
          <h3
            style={{
              fontFamily: "Rubik",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "10px",
            }}
          >
            {props.item.title}{" "}
          </h3>
          <Rating
            name="read-only"
            value={props.item.rating}
            readOnly
            sx={{ color: "#0CCE97" }}
          />
          <Typography variant="body2" color="text.secondary">
            {props.item.review}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const LandingPage = () => {
  const StyledTextField = styled(TextField)`
    background: white;
    border: 1px solid #e2e2e1;
    padding: 8px, 16px, 16px, 8px;
    gap: 20px;
    border-radius: 100px;
    backgroundcolor: #fff;
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
  function valuetext(value) {
    return `${value}°C`;
  }
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: "100px",
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: "18px",
      fontWeight: "600",
      width: "283px",
      height: "46px",
      padding: "7px 24px 7px 24px",
      margin: "2px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: "Rubik",
      "&:focus": {
        borderRadius: "100px",
        borderColor: "#0CCE97",
      },
    },
  }));
  const [calculatorValue, setCalculatorValue] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [categoryPrice, setCategoryPrice] = React.useState(0);
  const [calculatorDays, setCalculatorDays] = React.useState(0);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setCategoryPrice(event.target.value);
  };

  const handleDaysChange = (event) => {
    setCalculatorDays(event.target.value);
  };

  React.useEffect(() => {
    if (category === 0) {
      setCategories([]);
    }
    if (Number(category) === 1) {
      setCategories([
        { title: "אופניים חשמליים", price: 80 },
        { title: "אופני ילדים", price: 50 },
        { title: "אופני הרים", price: 90 },
        { title: "חלקי חילוף", price: 20 },
      ]);
    }
    if (Number(category) === 2) {
      setCategories([
        { title: "מצלמה דיגיטלית", price: 60 },
        { title: "מצלמת וידאו", price: 50 },
        { title: "רמקולים", price: 80 },
        { title: "מגברים", price: 90 },
      ]);
    }
    if (Number(category) === 3) {
      setCategories([
        { title: "אוהל", price: 120 },
        { title: "בר", price: 400 },
        { title: "חופה", price: 600 },
      ]);
    }
    if (Number(category) === 4) {
      setCategories([
        { title: "רמקולים", price: 120 },
        { title: "תאורה", price: 300 },
        { title: "שולחנות בר", price: 245 },
      ]);
    }
    if (Number(category) === 5) {
      setCategories([
        { title: "אוהלים", price: 140 },
        { title: "גזייה", price: 20 },
        { title: "חרמונית", price: 30 },
        { title: "ביגוד", price: 30 },
      ]);
    }
    if (Number(category) === 6) {
      setCategories([
        { title: "שמלת כלה", price: 800 },
        { title: "שמלת אירועים", price: 400 },
        { title: "חליפת חתן", price: 600 },
        { title: "חליפת אירועים", price: 300 },
      ]);
    }
    if (Number(category) === 7) {
      setCategories([
        { title: "גלשנים", price: 120 },
        { title: "וויקבורד", price: 90 },
        { title: "קייאקים", price: 220 },
        { title: "קייט סרפינג", price: 190 },
      ]);
    }
    if (Number(category) === 8) {
      setCategories([
        { title: "גלשני סקי", price: 250 },
        { title: "סנובורד", price: 235 },
        { title: "ציוד סקי", price: 175 },
      ]);
    }
    if (Number(category) === 9) {
      setCategories([
        { title: "משטחי החתלה", price: 30 },
        { title: "צעצועי תינוקות", price: 20 },
        { title: "מגני מזרן", price: 30 },
      ]);
    }
    if (Number(category) === 10) {
      setCategories([
        { title: "מקדחות", price: 80 },
        { title: "פטישונים", price: 120 },
        { title: "מכונות", price: 400 },
      ]);
    }
  }, [category]);

  React.useEffect(() => {
    setCalculatorValue(calculatorDays * categoryPrice);
  }, [categoryPrice, calculatorDays]);
  return (
    <>
      <section className="section1">
        <div className="search-section1">
          <h1>ההזדמנות שלך להשכיר ולחסוך</h1>
          <p>
            כל המוצרים זמינים להשכרה עכשיו בלחיצת כפתור, פלטפורמה יחידה מסוגה...
          </p>
          <StyledTextField
            placeholder="ציוד צילום, רחפנים..."
            className="styled-textfield"
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{ marginRight: "6px" }}>
                  <Link to="/search">
                    <Button
                      startIcon={
                        <SearchIcon
                          style={{
                            width: "25px",
                            height: "25px",
                            marginLeft: "8.2px",
                            fontWeight: "700",
                          }}
                        />
                      }
                      style={{
                        color: "#fff",
                        backgroundColor: "#0CCE97",
                        height: "56px",
                        width: "160px",
                        borderRadius: "100px",
                        fontWeight: "700",
                        fontFamily: "Rubik",
                        fontSize: "20px",
                        lineHeight: "23.7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      חיפוש
                    </Button>
                  </Link>
                </InputAdornment>
              ),
            }}
          />{" "}
          <p>
            או{" "}
            <Link to="/upload-product">
              <u
                style={{ cursor: "pointer", color: "black", fontWeight: "700" }}
              >
                פרסם מוצר
              </u>
            </Link>
          </p>
        </div>
        <img alt="logo" src={ProductsPic} className="img-section1" />
      </section>

      <section
        className="section2"
        style={{
          marginTop: "160px",
          display: "block",
          width: "80%",
          //height: "563px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontWeight: "600",
            fontFamily: "Rubik",
            fontSize: "36px",
            lineHeight: "42.66px",
            marginTop: "100px",
            marginBottom: "40px",
          }}
        >
          למה להשתמש ב-Rentiffy ?
        </h1>
        <Grid
          container
          spacing={2}
          className="grid-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
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
                borderRadius: "16px",
                margin: "4px",
                // width: "280px",
                // height: "280px",
              }}
              className="section2-card"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={Save}
                title="save"
                className="img-card-section2"
              />
              <CardContent
                sx={{ display: "block" }}
                className="card-content-section2"
              >
                <h3
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "10px",
                  }}
                >
                  חסכון בכסף
                </h3>
                <Typography variant="body2" color="text.secondary">
                  צריך מוצר לשימוש חד פעמי ? <br />
                  השכר עכשיו ותחסוך אלפי שקלים בשנה
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
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
                borderRadius: "16px",
                margin: "4px",
                // width: "280px",
                // height: "280px",
              }}
              className="section2-card"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={Friendly}
                title="friendly"
                className="img-card-section2"
              />
              <CardContent
                sx={{ display: "block" }}
                className="card-content-section2"
              >
                <h3
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "10px",
                  }}
                >
                  ידידותי לסביבה
                </h3>
                <Typography variant="body2" color="text.secondary">
                  רכישת מוצרים חדשים מזמהמת את הסביבה שלנו, בואו נעזור לעולם
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
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
                borderRadius: "16px",
                margin: "4px",
                // width: "280px",
                // height: "280px",
              }}
              className="section2-card"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={Touch}
                title="touch"
                className="img-card-section2"
              />
              <CardContent
                sx={{ display: "block" }}
                className="card-content-section2"
              >
                <h3
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "14px",
                  }}
                >
                  שימוש במוצר מבלי לקנות אותו
                </h3>
                <Typography variant="body2" color="text.secondary">
                  לא בטוח אם ברצונך לרכוש מוצר מסוים ? השכר ובחן אותו
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
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
                borderRadius: "16px",
                margin: "4px",
                // width: "280px",
                // height: "280px",
              }}
              className="section2-card"
            >
              <CardMedia
                sx={{ height: 140 }}
                image={Shield}
                title="shield"
                className="img-card-section2"
              />
              <CardContent
                sx={{ display: "block" }}
                className="card-content-section2"
              >
                <h3
                  style={{
                    fontFamily: "Rubik",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "14px",
                  }}
                >
                  כל המוצרים באתר מבוטחים
                </h3>
                <Typography variant="body2" color="text.secondary">
                  אל תחשוש למוצר שלך, אנחנו מציעים ביטוח מלא לכל מקרה של
                  נזק/גניבה
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>{" "}
      </section>
      <section>
        <svg
          width="100%"
          //height="182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", marginBottom: "-1px" }}
          className="wave-section3"
        >
          <path
            d="M1920 181.116H0V5.11578C20.8333 -0.550886 81.8 -5.08422 159 22.1158C255.5 56.1158 489.5 65.6158 639 43.6158C788.5 21.6158 841.5 118.616 974 118.616C1106.5 118.616 1159.5 63.1158 1389 118.616C1572.6 163.016 1819.5 178.782 1920 181.116Z"
            fill="#F2F2F2"
          />
        </svg>
        <div
          className="section3"
          style={{
            backgroundColor: "#f2f2f2",
            width: "100%",
            height: "520px",
          }}
        >
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            className="box3"
          >
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {reviews.map((item) => (
                <ReviewCard key={item.id} item={item} />
              ))}
            </Grid>{" "}
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
            className="box3"
          >
            <Carousel>
              {reviews.map((item) => (
                <ReviewCard key={item.id} item={item} />
              ))}
            </Carousel>
          </Box>
        </div>
      </section>
      <section
        className="section4"
        style={{
          width: "80%",
          height: "300px",
          marginTop: "100px",
          marginRight: "10%",
        }}
      >
        <Carousel className="section4-carousel">
          {items.map((item) => (
            <Link to="/search" key={item.id}>
              <Item item={item} />
            </Link>
          ))}
        </Carousel>
      </section>
      <section className="section5">
        <img
          alt="logo"
          src={Ensurence}
          style={{ marginTop: "120px", marginLeft: "40px" }}
          className="logo-section5"
        />
        <div className="details-section5">
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "Rubik",
              lineHeight: "42.66px",
            }}
          >
            כל המוצרים באתר מבוטחים
          </h1>
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Rubik",
              lineHeight: "22.66px",
            }}
          >
            חושש למוצרייך ? כל הפריטים באתר מבוטחים לכל מקרה של גניבה\נזק.
          </h4>

          <p
            style={{
              fontWeight: "400",
              fontFamily: "Rubik",
              fontSize: "18px",
              lineHeight: "24px",
              marginTop: "10px",
            }}
          >
            אנחנו מציעים ביטוח לכל המוצרים אשר עולים לפלטפורמה, אמנם גובים מעט
            עמלה אך מבטיחים שזה שווה את זה ! מעה מיידי לכל פנייה בנושא נזק
            ואיחורים בהחזרה ופיצויים מיידיים לכל מקרה של בעיה!
          </p>
        </div>
      </section>
      <section
        className="section6"
        style={{
          marginTop: "160px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          height: "563px",
        }}
      >
        <h1
          style={{
            fontWeight: "600",
            fontFamily: "Rubik",
            fontSize: "36px",
            lineHeight: "42.66px",
            marginTop: "100px",
            marginBottom: "40px",
          }}
        >
          איך זה עובד ?
        </h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
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
                  borderRadius: "16px",
                  margin: "4px",
                }}
                className="section2-card"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={Touch}
                  title="touch"
                  className="img-card-section2"
                />
                <CardContent>
                  <h3
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "10px",
                    }}
                    className="card-content-section2"
                  >
                    שלב ראשון{" "}
                  </h3>
                  <Typography variant="body2" color="text.secondary">
                    נרשמים לאתר ומחפשים את המוצר שאנו רוצים להשכיר.
                  </Typography>
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
                  borderRadius: "16px",
                  margin: "12px",
                }}
                className="section2-card"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={Save}
                  title="save"
                  className="img-card-section2"
                />
                <CardContent>
                  <h3
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "10px",
                    }}
                    className="card-content-section2"
                  >
                    שלב שני{" "}
                  </h3>
                  <Typography variant="body2" color="text.secondary">
                    בודקים אם זמין בתאריך שרוצים משכירים וחוסכים אלפי שקלים בשנה
                    !
                  </Typography>
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
                  borderRadius: "16px",
                  margin: "12px",
                }}
                className="section2-card"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={Friendly}
                  title="friendly"
                  className="img-card-section2"
                />
                <CardContent>
                  <h3
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "10px",
                    }}
                    className="card-content-section2"
                  >
                    שלב שלישי{" "}
                  </h3>
                  <Typography variant="body2" color="text.secondary">
                    מקבלים את המוצר ונהנים ממנו במחיר מוזל וידידותי לסביבה
                    ועוזרים לטבע.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>{" "}
        </Box>
      </section>
      <section
        className="section7"
        style={{
          backgroundColor: "#f2f2f2",
          height: "635px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box className="section7-box">
          <h1
            style={{
              fontFamily: "Rubik",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "42.66px",
              marginTop: "80px",
            }}
          >
            תוכלו להרוויח{" "}
            <span style={{ color: "#0CCE97" }}>₪{calculatorValue}</span>
          </h1>
          <h4
            style={{
              fontFamily: "Rubik",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            לפי ממוצע המחירים <u>בגוש דן</u>
          </h4>
          <div>
            <NativeSelect
              id="demo-customized-select-native"
              input={<BootstrapInput />}
              value={category}
              onChange={handleChangeCategory}
            >
              <option aria-label="None" value={0}>
                קטגוריה
              </option>
              <option value={1}>אופניים</option>
              <option value={2}>צילום ואודיו</option>
              <option value={3}>אירועים</option>
              <option value={4}>מסיבות</option>
              <option value={5}>קמפינג וטיולים</option>
              <option value={6}>שמלות וחליפות</option>
              <option value={7}>ספורט ימי</option>
              <option value={8}>ספורט חורפי</option>
              <option value={9}>צעצועים וציוד לתינוקות</option>
              <option value={10}>כלים וציוד בנייה</option>
            </NativeSelect>
            <NativeSelect
              id="demo-customized-select-native"
              input={<BootstrapInput />}
              value={categoryPrice}
              onChange={handleChangeSubCategory}
            >
              <option aria-label="None" value={0}>
                תת קטגוריה
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.price} value={category.price}>
                    {category.title}
                  </option>
                );
              })}
            </NativeSelect>
          </div>
          <h4
            style={{
              fontFamily: "Rubik",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            מספר ימים
          </h4>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            style={{ color: "#0CCE97", marginTop: "", width: "60%" }}
            valueLabelDisplay="auto"
            max={30}
            onChange={handleDaysChange}
            value={calculatorDays}
          />
        </Box>
      </section>
      <svg
        width="75%"
        height="181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          marginTop: "-1px",
        }}
      >
        <path
          d="M1.57622e-05 0.485855L1920 0.486023L1920 176.486C1899.17 182.153 1838.2 186.686 1761 159.486C1664.5 125.486 1430.5 115.986 1281 137.986C1131.5 159.986 1078.5 62.9859 946 62.9859C813.5 62.9859 760.5 118.486 531 62.9859C347.4 18.5859 100.5 2.81919 1.57622e-05 0.485855Z"
          fill="#F2F2F2"
        />
      </svg>

      <section className="section8">
        <div className="details-section8">
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "Rubik",
              lineHeight: "42.66px",
            }}
          >
            להרוויח ממוצרים שאינם בשימוש{" "}
          </h1>

          <p
            style={{
              fontWeight: "400",
              fontFamily: "Rubik",
              fontSize: "18px",
              lineHeight: "24ץ3px",
              marginTop: "40px",
            }}
          >
            מוצר שוכב לך בבית ללא שימוש ותופס מקום ? למה שלא תרוויח עליו ? אנחנו
            מציעים לך להשכיר את המוצר בימים שאינך צריך אותו, לקבל עליו ביטוח מלא
            לכל מקרה פגיעות וגניבות וכך תוכל להרוויח הכנסה פסיבית על מוצר שלא
            בשימוש
          </p>
          <Link to="/upload-product">
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
              פרסום מוצר
            </Button>
          </Link>
        </div>
        <img
          alt="logo"
          src={Phone}
          style={{ marginTop: "120px", marginRight: "40px" }}
          className="logo-section5"
        />
      </section>

      <div className="section9">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            alt="logo"
            src={Phone}
            style={{ marginTop: "120px", marginLeft: "40px" }}
            className="logo-section5 logo-section9"
          />
        </Box>
        <div className="details-section9">
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "Rubik",
              lineHeight: "42.66px",
            }}
          >
            גישה למגוון רחב של מוצרים{" "}
          </h1>

          <p
            style={{
              fontWeight: "400",
              fontFamily: "Rubik",
              fontSize: "18px",
              lineHeight: "24ץ3px",
              marginTop: "40px",
            }}
          >
            כל מוצר אשר ברצונך להשכיר קיים בפלטפורמה לכל החפץ בכך
          </p>
          <Link to="/upload-product">
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
              פרסום מוצר
            </Button>
          </Link>
        </div>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img
            alt="logo"
            src={Phone}
            style={{ marginTop: "120px", marginLeft: "40px" }}
            className="logo-section5 logo-section9"
          />
        </Box>
      </div>
    </>
  );
};

export default LandingPage;
