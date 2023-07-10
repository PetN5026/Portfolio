import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import Style from "./ContactMe.module.scss";
import emailjs from "@emailjs/browser";
const ContactMe = ({ darkMode }) => {
  // console.log("dark", darkMode);
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [body, setBody] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    const mail = {
      first,
      last,
      email,
      body,
    };
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      mail,
      process.env.REACT_APP_PUBLIC_KEY
    );
  }
  return (
    <section id="contactMe">
      <Box
        width={{ xs: "100%", md: "100%" }}
        py={"1rem"}
        sx={
          darkMode
            ? {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                backgroundColor: grey[800],
              }
            : {
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                backgroundColor: grey[200],
              }
        }
      >
        <h2 className={Style.pink}>Contact Me</h2>

        <form onSubmit={submitHandler}>
          <Stack spacing={2} direction="row" sx={{ mt: 4 }}>
            <TextField
              value={first}
              variant="outlined"
              onChange={(e) => setFirst(e.target.value)}
              label="First Name"
              required
              fullWidth
              // className={Style.contactDark}
              sx={
                darkMode
                  ? {
                      mb: 4,
                      "& .MuiInputLabel-root": { color: "white" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }
                  : { mb: 4 }
              }
              SelectProps={{
                className: Style.contactDark,
              }}
            ></TextField>
            <TextField
              value={last}
              onChange={(e) => setLast(e.target.value)}
              label="Last Name"
              required
              fullWidth
              sx={
                darkMode
                  ? {
                      mb: 4,
                      "& .MuiInputLabel-root": { color: "white" }, //styles the label
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }
                  : { mb: 4 }
              }
              SelectProps={{
                className: Style.contactDark,
              }}
            ></TextField>
          </Stack>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
            fullWidth
            sx={
              darkMode
                ? {
                    mb: 4,
                    "& .MuiInputLabel-root": { color: "white" }, //styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }
                : { mb: 4 }
            }
            SelectProps={{
              className: Style.contactDark,
            }}
          ></TextField>
          <TextField
            multiline
            rows={8}
            required
            fullWidth
            label="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            sx={
              darkMode
                ? {
                    mb: 4,
                    "& .MuiInputLabel-root": { color: "white" }, //styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }
                : { mb: 4 }
            }
            SelectProps={{
              className: Style.contactDark,
            }}
          ></TextField>
          <Button
            type="submit"
            variant="outlined"
            sx={
              darkMode
                ? { color: "white", borderColor: "white" }
                : { color: "black", borderColor: "black" }
            }
          >
            Submit
          </Button>
        </form>
      </Box>
    </section>
  );
};

export default ContactMe;
