import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Developed by Reza Shahnazar M.D."}
      {/* <Link color="inherit" href="">
      </Link>{" "} */}
      {/* {new Date().getFullYear()}. */}
    </Typography>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      // light: "#46b1ff",
      main: "rgb(251,251,251)",
      // dark: "rgb(201,13,63)",
    },
  },
  direction: "ltr",
  typography: {
    fontFamily: "IRANSansX, Roboto",
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: 'IRANSansX';
    //       font-style: normal;
    //       src: local('IRANSansX'), local('IRANSansX-Regular'), url(${IRANSansX}) format('woff2');
    //     }
    //   `,
    // },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiTypography: {
      styleOverrides: {
        h5: {
          color: "rgb(63,73,82)!important",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgb(227,54,108)",
          borderRight: "0px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255,255,255)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "rgb(45,193,85)",
          color: "rgb(255,255,255)",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 0,
          // borderTopLeftRadius: 3,
          // borderTopRightRadius: 3,
          // backgroundColor: "rgb(61,72,81)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "10px 5px",
          minWidth: 0,
          padding: "0px 15px",
          [theme.breakpoints.up("md")]: {
            padding: 0,
            minWidth: 0,
          },
          "&.Mui-selected": {
            backgroundColor: "rgb(61,72,81)",
            color: "#ffffff",
          },
          borderRadius: "25px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255,255,255,0.5)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(227,54,108)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginLeft: "30px",
          "&.Mui-selected": {
            color: "rgb(227,54,108)",
            backgroundColor: "#ffffff",
            borderRadius: "50px 0px 0px 50px",
          },
          color: "#ffffff",
          // backgroundColor: "#ffffff",
          borderRadius: "50px 0px 0px 50px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
          "& svg": {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

export default function Panel() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    // <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: "#ffffff" }}
          >
            <Content />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: "#ffffff" }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
    // </CacheProvider>
  );
}
