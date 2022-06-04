import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoTp from "../../images/logoTp.png";
import { useStoreActions } from "easy-peasy";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      // color="text.secondary"
      align="center"
      {...props}
    >
      Developed by Reza Shahnazar M.D.
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    background: {
      // default: "#e3366c",
      default: "#ffffff",
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "rgb(101,122,232)",
          "&.Mui-checked": {
            color: "rgb(101,122,232)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "rgb(101,122,232)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(101,122,232)",
          boxShadow: "none!important",
          "&:hover": {
            backgroundColor: "rgb(61,72,81)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "rgb(101,122,232)",
        },
        // notchedOutline: {
        //   borderColor: "#e3366c",
        // },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#e3366c",
          "&.Mui-focused": {
            color: "#e3366c",
          },
        },
      },
    },
  },
});

export default function SignIn() {
  const setGlogged = useStoreActions((actions) => actions.setGlogged);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    setGlogged(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={logoTp} alt="THC AF clinic" style={{ maxWidth: "200px" }} />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: 3,
              color: "#e3366c",
              fontSize: 18,
            }}
          >
            Theran Heart Center AF clininc
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              sx={{
                // "& label.Mui-focused": {
                //   color: "white",
                // },
                // "& .MuiInput-underline:after": {
                //   borderBottomColor: "yellow",
                // },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e3366c",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e3366c",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#e3366c",
                  },
                },
              }}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              sx={{
                // "& label.Mui-focused": {
                //   color: "white",
                // },
                // "& .MuiInput-underline:after": {
                //   borderBottomColor: "yellow",
                // },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e3366c",
                  },
                  "&:hover fieldset": {
                    borderColor: "#e3366c",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#e3366c",
                  },
                },
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Box
          sx={{
            color: "rgba(0,0,0,0.4)",
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
          }}
        >
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
