import React from "react";
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box, Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: grey,
  },
});

const iconClass = "fa fa-circle";

function Terminal(props) {
  const { text, darkMode } = props;
  // console.log(Style);
  return (
    <Box
      component={"section"}
      // className={classNames(Style.shadowed)}
      width={{ xs: "100%", md: "100%" }}
      // borderRadius={"0.5rem"}
      mb={"4rem"}
      sx={
        darkMode
          ? { backgroundColor: grey[800] }
          : { backgroundColor: grey[200] }
      }
    >
      <Box
        py={{ xs: "1rem", md: "3rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        // borderRadius={"0 0 0.5rem 0.5rem"}
        // sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
