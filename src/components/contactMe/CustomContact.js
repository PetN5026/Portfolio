import * as React from "react";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
const SuccessTextField = styled(TextField)(({ theme }) => ({
  width: 300,
  color: "aqua",
  // color: theme.palette.success.main,
}));

export default function BasicUsage() {
  return <SuccessTextField>Styled div</SuccessTextField>;
}
