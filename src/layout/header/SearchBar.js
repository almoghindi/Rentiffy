import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)`
  background: white;
  border: 1px solid #e2e2e1;
  width: 320px;
  height: 46px;
  padding: 8px, 16px, 16px, 8px;
  gap: 8px;
  border-radius: 100px;
  backgroundcolor: #fff;
  margin-right: 10px;
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

const SearchBar = () => {
  return (
    <StyledTextField
      placeholder="ציוד צילום, רחפנים..."
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ marginRight: "6px" }}>
            <SearchIcon sx={{ color: "#0CCE97" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
