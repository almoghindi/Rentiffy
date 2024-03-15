import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Rubik",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, dates, days, expenses) {
  return { name, dates, days, expenses };
}

const rows = [
  createData("Frozen yoghurt", "12-16/02/2023", 24, 4.0),
  createData("Ice cream sandwich", "12-16/02/2023", 37, 4.3),
  createData("Eclair", "12-16/02/2023", 24, 6.0),
  createData("Cupcake", "12-16/02/2023", 67, 4.3),
  createData("Gingerbread", "12-16/02/2023", 49, 3.9),
];

const RentedItems = () => {
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
            פריטים ששכרתי{" "}
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
                  {" "}
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
                פריטים ששכרתי{" "}
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

          <div
            style={{
              marginRight: "50px",
            }}
          >
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
                  כל הפריטים{" "}
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1200 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="center">תאריכים</StyledTableCell>
                    <StyledTableCell align="center">מספר ימים </StyledTableCell>
                    <StyledTableCell align="center">סך הוצאות </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        <Card sx={{ display: "flex", textAlign: "right" }}>
                          {" "}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: 4,
                            }}
                          >
                            <CardMedia
                              component="img"
                              sx={{
                                width: "110px",
                                height: "110px",
                                borderRadius: "16px",
                              }}
                              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaUGoUD5Pakm6Wjfp6YfpvqnN5vPUnW45kQ&usqp=CAU"
                              alt="Live from space album cover"
                            />
                          </Box>
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <CardContent
                              sx={{
                                flex: "1 0 auto",
                                marginTop: "20px",
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
                                שם המוצר{" "}
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
                                פורסם ב-12/02/2023{" "}
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
                                <Button
                                  sx={{
                                    width: "16px",
                                    minWidth: 0,
                                    height: "16px",
                                    backgroundColor: "#0CCE97",
                                    borderRadius: "100px",
                                    boxShadow: "0px 0px 3px #0CCE97",
                                    marginLeft: "10px",
                                    "&:hover": {
                                      backgroundColor: "#0CCE97",
                                    },
                                  }}
                                />
                                מתפנה ב-29/12/2023{" "}
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
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          fontSize: "18px",
                          fontFamily: "Rubik",
                        }}
                      >
                        {row.dates}
                      </StyledTableCell>

                      <StyledTableCell
                        align="center"
                        style={{
                          fontSize: "18px",
                          fontFamily: "Rubik",
                        }}
                      >
                        {row.days}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{
                          fontWeight: "600",
                          fontSize: "18px",
                          fontFamily: "Rubik",
                        }}
                      >
                        ₪{row.expenses}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentedItems;
