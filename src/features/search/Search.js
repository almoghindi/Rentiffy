import React from "react";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./search.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";

const Search = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const prices = ["1-50₪", "51-100₪", "101-200₪", "201-500₪", "500+₪"];
  const orderFilters = [
    "מיון לפי תאריך",
    "מיון מהמחיר הגבוה לנמוך",
    "מחיר מהמחיר הנמוך לגבוה",
    "מיון לפי מרחק",
  ];

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
      width: "210px",
      height: "31px",
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

  const BootstrapSelectInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: "100px",
      position: "relative",
      textAlign: "right",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: "18px",
      fontWeight: "600",
      width: "180px",
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
  const BootstrapDisplay = styled(Button)({
    borderRadius: "100px",
    position: "relative",
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #0CCE97",
    fontSize: "18px",
    fontWeight: "600",
    width: "180px",
    height: "42px",
    color: "#0CCE97",
    padding: "7px 24px 7px 24px",
    margin: "2px",
    // Use the system font instead of the default Roboto font.
    fontFamily: "Rubik",
    "&:focus": {
      borderRadius: "100px",
      borderColor: "#0CCE97",
    },
  });
  const BootstrapDateInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: "100px",
      position: "relative",
      textAlign: "right",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: "18px",
      fontWeight: "600",
      width: "180px",
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

  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const [priceFilter, setPriceFilter] = React.useState(["מחיר"]);

  const handleChangePrice = (event) => {
    const {
      target: { value },
    } = event;
    setPriceFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [orderFilter, setOrderFilter] = React.useState(["מיון לפי"]);

  const handleChangeOrder = (event) => {
    const {
      target: { value },
    } = event;
    setOrderFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [displayMap, setDisplayMap] = React.useState(false);

  const handleDisplayChange = (event) => {
    setDisplayMap((prev) => !prev);
  };

  const [dateFilter, setDateFilter] = React.useState(["תאריך"]);
  const [dateField, setDateField] = React.useState([]);

  React.useEffect(() => {
    if (category === 0) {
      setCategories([]);
    }
    if (category == 1) {
      setCategories([
        { title: "אופניים חשמליים", price: 140 },
        { title: "אופני ילדים", price: 80 },
        { title: "אופני הרים", price: 200 },
        { title: "חלקי חילוף", price: 40 },
      ]);
    }
    if (category == 2) {
      setCategories([
        { category: "מצלמה דיגיטלית", price: 100 },
        { category: "מצלמת וידאו", price: 90 },
        { title: "רמקולים", price: 200 },
        { title: "מגברים", price: 150 },
      ]);
    }
    if (category == 3) {
      setCategories([
        { title: "אוהל", price: 120 },
        { title: "בר", price: 400 },
        { title: "חופה", price: 600 },
      ]);
    }
    if (category == 4) {
      setCategories([
        { title: "רמקולים", price: 230 },
        { title: "תאורה", price: 410 },
        { title: "שולחנות בר", price: 340 },
      ]);
    }
    if (category == 5) {
      setCategories([
        { title: "אוהלים", price: 200 },
        { title: "גזייה", price: 30 },
        { title: "חרמונית", price: 60 },
        { title: "ביגוד", price: 60 },
      ]);
    }
    if (category == 6) {
      setCategories([
        { title: "שמלת כלה", price: 800 },
        { title: "שמלת אירועים", price: 400 },
        { title: "חליפת חתן", price: 600 },
        { title: "חליפת אירועים", price: 300 },
      ]);
    }
    if (category == 7) {
      setCategories([
        { title: "גלשנים", price: 300 },
        { title: "וויקבורד", price: 260 },
        { title: "קייאקים", price: 670 },
        { title: "קייט סרפינג", price: 450 },
      ]);
    }
    if (category == 8) {
      setCategories([
        { title: "גלשני סקי", price: 450 },
        { title: "סנובורד", price: 350 },
        { title: "ציוד סקי", price: 230 },
      ]);
    }
    if (category == 9) {
      setCategories([
        { title: "משטחי החתלה", price: 30 },
        { title: "צעצועי תינוקות", price: 50 },
        { title: "מגני מזרן", price: 30 },
      ]);
    }
    if (category == 10) {
      setCategories([
        { title: "מקדחות", price: 430 },
        { title: "פטישונים", price: 730 },
        { title: "מכונות", price: 1200 },
      ]);
    }
  }, [category]);

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        {" "}
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
        <Select
          id="demo-multiple-checkbox"
          value={priceFilter}
          onChange={handleChangePrice}
          input={<BootstrapSelectInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>מחיר</em>
          </MenuItem>
          {prices.map((price) => (
            <MenuItem key={price} value={price}>
              <Checkbox
                checked={priceFilter.indexOf(price) > -1}
                style={{ color: "#0CCE97" }}
              />
              <ListItemText primary={price} />
            </MenuItem>
          ))}
        </Select>
        <Select
          id="date-filter"
          input={<BootstrapDateInput label="Tag" />}
          // onChange={handleChangeDate}
          renderValue={(selected) => selected}
          value={dateFilter}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>תאריך</em>
          </MenuItem>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dateField}
              style={{ color: "#0CCE97" }}
              onChange={(newValue) => {
                setDateFilter(
                  newValue.$D +
                    "/" +
                    parseInt(parseInt(newValue.$M) + 1) +
                    "/" +
                    newValue.$y
                );
                setDateField(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Select>
        <Select
          id="demo-multiple-checkbox"
          value={orderFilter}
          onChange={handleChangeOrder}
          input={<BootstrapSelectInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {orderFilters.map((order) => (
            <MenuItem key={order} value={order}>
              <Checkbox
                checked={orderFilter.indexOf(order) > -1}
                style={{ color: "#0CCE97" }}
              />
              <ListItemText primary={order} />
            </MenuItem>
          ))}
        </Select>
        <BootstrapDisplay onClick={handleDisplayChange}>
          תצוגת {displayMap ? "רשימה" : "מפה"}
        </BootstrapDisplay>
      </div>
      {!displayMap && (
        <div>
          <div style={{ marginTop: "120px" }}>
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>{" "}
            </Box>
          </div>
          <div>
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
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
                      width: "302px",
                      height: "340px",
                      borderRadius: "16px",
                      margin: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: "170px" }}
                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6H-9ZHrX2DEQ6sfuY1ZG57LI7rYMoJqweQ&usqp=CAU"
                      title="save"
                    />{" "}
                    <CardContent style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-10px",
                        }}
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
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "8px",
                          }}
                        >
                          0.3 ק"מ
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "-20px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "10px",
                          }}
                        >
                          ₪100{" "}
                        </h3>
                        <p
                          style={{
                            fontFamily: "Rubik",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "10px",
                            marginRight: "4px",
                          }}
                        >
                          ליום
                        </p>
                      </div>
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
                        תיאור המוצר ופרטי המשכיר לורם איפסום דולור סיט אמט..
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>{" "}
            </Box>
          </div>
        </div>
      )}
      {displayMap && (
        <div
          style={{
            display: "flex",
            backgroundColor: "#F8F8F8",
            marginTop: "40px",
          }}
        >
          <div style={{ margin: "20px" }}>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "110px",
                borderRadius: "16px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "110px", height: "110px" }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-10px",
                    }}
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
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "8px",
                        marginLeft: "100px",
                      }}
                    >
                      0.3 ק"מ
                    </p>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      sx={{ color: "#0CCE97" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-15px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "10px",
                      }}
                    >
                      ₪100{" "}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Rubik",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "10px",
                        marginRight: "4px",
                      }}
                    >
                      ליום
                    </p>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "Rubik",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginTop: "-5px",
                      width: "300px",
                      textAlign: "right",
                    }}
                  >
                    תיאור המוצר ופרטדולור סיט אמט..
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </div>

          <Wrapper apiKey={"AIzaSyAr2huAaENhwhPCZInY1C_SY8M9Hx31Bm4"}>
            <Map
              zoom={10}
              center={{
                lat: 10.99835602,
                lng: 77.01502627,
              }}
            />
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Search;
