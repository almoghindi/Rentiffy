import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import UploadImage from "../../assets/uploadimage.png";
import PrimaryUploadImage from "../../assets/primaryUploadImage.png";
import { Link } from "react-router-dom";

import "./uploadProduct.css";

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

const ColorSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#0CCE97",
    "&:hover": {
      backgroundColor: "#0CCE97",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#0CCE97",
  },
}));

const UploadProduct = () => {
  const [img1, setImg1] = React.useState("");
  const [img2, setImg2] = React.useState("");
  const [img3, setImg3] = React.useState("");
  const [img4, setImg4] = React.useState("");

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

  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
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

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f2f2f2",
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
          className="container-upload"
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
            פרסם מוצר{" "}
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
          background: "#f2f2f2",
        }}
      >
        <div className="container-upload">
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 0.9fr)",
                gridTemplateRows: "repeat(8, 2.5vw)",
                gridGap: "15px",
                width: "90%",
                height: "100%",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  gridColumnStart: 4,
                  gridColumnEnd: 12,
                  gridRowStart: 1,
                  gridRowEnd: 9,
                }}
              >
                <img
                  src={img1 ? URL.createObjectURL(img1) : PrimaryUploadImage}
                  alt="aa"
                  style={{ width: "100%", height: "100%" }}
                />
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImg1(e.target.files[0])}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  gridColumnStart: 1,
                  gridColumnEnd: 3,
                  gridRowStart: 1,
                  gridRowEnd: 3,
                }}
              >
                <img
                  src={img2 ? URL.createObjectURL(img2) : UploadImage}
                  alt="aa"
                  style={{ width: "100%", height: "100%" }}
                />
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImg2(e.target.files[0])}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  gridColumnStart: 1,
                  gridColumnEnd: 3,
                  gridRowStart: 4,
                  gridRowEnd: 6,
                }}
              >
                <img
                  src={img3 ? URL.createObjectURL(img3) : UploadImage}
                  alt="aa"
                  style={{ width: "100%", height: "100%" }}
                />{" "}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImg3(e.target.files[0])}
                />{" "}
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  gridColumnStart: 1,
                  gridColumnEnd: 3,
                  gridRowStart: 7,
                  gridRowEnd: 9,
                }}
              >
                <img
                  src={img4 ? URL.createObjectURL(img4) : UploadImage}
                  alt="aa"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />{" "}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImg4(e.target.files[0])}
                />{" "}
              </div>
            </div>
          </div>
          <Box
            sx={{
              marginTop: "70px",
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
                כותרת
              </h5>
              <StyledTextField
                placeholder="שם המוצר"
                style={{ width: "90%" }}
              />
            </div>
            <div style={{ marginTop: "40px" }}>
              {" "}
              <h5
                style={{
                  fontFamily: "Rubik",
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "right",
                  marginRight: "5%",
                  marginBottom: "2%",
                }}
              >
                קטגוריה{" "}
              </h5>
              <NativeSelect
                id="demo-customized-select-native"
                input={<BootstrapInput />}
                value={category}
                onChange={handleChangeCategory}
                style={{ width: "90%" }}
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
              <h5
                style={{
                  fontFamily: "Rubik",
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "right",
                  marginRight: "5%",
                  marginBottom: "2%",
                }}
              >
                תת קטגוריה{" "}
              </h5>
              <NativeSelect
                id="demo-customized-select-native"
                input={<BootstrapInput />}
                style={{ width: "90%" }}
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
                תיאור{" "}
              </h5>
              <StyledTextField
                placeholder="פירוט על המוצר"
                style={{ width: "90%" }}
                rows={4}
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
                כתובת
              </h5>
              <StyledTextField
                placeholder="עיר/ישוב"
                style={{ width: "90%" }}
              />
              <StyledTextField placeholder="רחוב" style={{ width: "90%" }} />
              <StyledTextField placeholder="מיקוד" style={{ width: "43%" }} />
              <StyledTextField
                placeholder="מספר בית"
                style={{ width: "43%", marginRight: "4%" }}
              />
            </div>
            <div
              style={{
                marginRight: "5%",
                textAlign: "right",
                marginTop: "20px",
                fontFamily: "Rubik",
                fontSize: "18px",
              }}
            >
              {" "}
              <BpCheckbox defaultChecked />
              הוספת אפשרות למשלוח{" "}
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
                מחיר לפי{" "}
              </h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <BpCheckbox defaultChecked />
                <StyledTextField placeholder="יום" style={{ width: "27%" }} />
                <BpCheckbox defaultChecked />
                <StyledTextField placeholder="שבוע" style={{ width: "27%" }} />
                <BpCheckbox defaultChecked />
                <StyledTextField placeholder="חודש" style={{ width: "27%" }} />
              </div>
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
                כמות{" "}
              </h5>
              <div style={{ display: "flex" }}>
                <StyledTextField
                  defaultValue={1}
                  sx={{
                    marginRight: "5%",
                    width: { md: "10%", xs: "20%" },
                  }}
                  type="number"
                />
              </div>
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
                מינימום ימים להשכרה{" "}
              </h5>
              <div style={{ display: "flex" }}>
                <StyledTextField
                  defaultValue={1}
                  sx={{
                    marginRight: "5%",
                    width: { md: "10%", xs: "20%" },
                  }}
                  type="number"
                />
              </div>
            </div>
            <div
              style={{
                marginRight: "5%",
                textAlign: "right",
                marginTop: "20px",
                fontFamily: "Rubik",
                fontSize: "18px",
              }}
            >
              {" "}
              <BpCheckbox defaultChecked />
              זמינות בסופי שבוע{" "}
            </div>
            <div
              style={{
                marginRight: "5%",
                textAlign: "right",
                marginTop: "20px",
                marginBottom: "20px",
                fontFamily: "Rubik",
                fontSize: "18px",
              }}
            >
              {" "}
              <BpCheckbox defaultChecked />
              זמינות באמצע שבוע{" "}
            </div>
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
            {" "}
            <h5
              style={{
                fontFamily: "Rubik",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "right",
                marginRight: "5%",
                marginTop: "40px",
              }}
            >
              תנאי ביטול/עסקה/ביטוח{" "}
            </h5>{" "}
            <div
              style={{
                textAlign: "right",
                marginRight: "5%",
                width: "90%",
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
                  תנאים גמישים{" "}
                </h5>
                <ColorSwitch defaultChecked />
              </div>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
                דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                אלמנקוםעעעעעכדכגככגגעגע לורם איפסום דולור סיט אמט, קונסקטורר
                אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג
                אלית. סת אלמנקוםעעעעעכדכגככגגעגע
              </p>
            </div>
            <Divider variant="middle" />
            <div
              style={{
                textAlign: "right",
                marginRight: "5%",
                width: "90%",
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
                  תנאים מותאמים{" "}
                </h5>
                <ColorSwitch defaultChecked />
              </div>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
                דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                אלמנקוםעעעעעכדכגככגגעגע לורם איפסום דולור סיט אמט, קונסקטורר
                אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג
                אלית. סת אלמנקוםעעעעעכדכגככגגעגע
              </p>
            </div>
          </Box>
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
            <Link to="/preview-product">
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
                תצוגה מקדימה{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadProduct;
