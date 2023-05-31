import React from "react";
import { useState, useEffect } from "react";
import { ButtonBase } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
function ScrollTop() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    showScroll && (
      <ButtonBase
        sx={{
          position: "fixed",
          bottom: 15,
          right: 20,
          width: { xs: 20, md: 40 },
          height: { xs: 20, md: 40 },
          borderRadius: "50%",
          border: 2,
        }}
        onClick={scrollToTop}
      >
        <KeyboardDoubleArrowUpIcon />
      </ButtonBase>
    )
  );
}

export default ScrollTop;
