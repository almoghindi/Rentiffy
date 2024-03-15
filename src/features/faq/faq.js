import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Save from "../../assets/save-home.png";
import Friendly from "../../assets/friendly-home.png";
import Touch from "../../assets/touch-home.png";
import Shield from "../../assets/shield-home.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FAQCard from "./FAQCard";
import FaqItem from "./FaqItem";

const FAQ = () => {
  const StyledTextField = styled(TextField)`
    background: white;
    border: 1px solid #e2e2e1;
    height: 54px;
    padding: 8px, 16px, 16px, 8px;
    gap: 20px;
    border-radius: 100px;
    backgroundcolor: #fff;
    justify-content: center;
    margin-top: 20px;
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
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div>
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
              שאלות ותשובות{" "}
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
        </div>{" "}
        <h5
          style={{
            fontSize: "18px",
            fontFamily: "Rubik",
            fontWeight: "600",
          }}
        >
          יש לך שאלות? אנחנו כאן כדי לעזור
        </h5>
        <StyledTextField
          placeholder="מה תרצו לדעת?"
          sx={{ width: { md: "60%", xs: "90%" } }}
          InputProps={{
            endAdornment: (
              <InputAdornment sx={{ marginRight: "6px" }}>
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
                    height: "54px",
                    width: "140px",
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
              </InputAdornment>
            ),
          }}
        />{" "}
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
            <FAQCard image={Save} title="מחירים" />
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
            <FAQCard image={Friendly} title="ידידותי לסביבה" />
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
            <FAQCard image={Touch} title="ביטוח" />
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
            <FAQCard image={Shield} title="ביטול והחזרים" />
          </Grid>
        </Grid>
        <Box
          sx={{
            flexGrow: 1,
            width: { md: "60%", xs: "90%" },
            padding: "16px",
            border: "1px solid #DCDCDC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "0px 0px 14px rgba(0,26,59,0.08)",
            borderRadius: "16px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "100px",
          }}
        >
          <FaqItem
            question="שאלה 1"
            answer="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי"
            expanded={expanded}
            handleChange={handleChange}
            panelId="panel1"
          />
          <FaqItem
            question="שאלה 2"
            answer="לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי"
            expanded={expanded}
            handleChange={handleChange}
            panelId="panel2"
          />
        </Box>
      </div>
    </>
  );
};

export default FAQ;
