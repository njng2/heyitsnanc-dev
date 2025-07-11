import { ToolBar } from "./components/toolbar/toolbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import "./App.css";
import Box from "@mui/material/Box";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "#e8d1c5",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CssBaseline />
        <ToolBar />
        <IconButton
          aria-label="open contact dialog"
          target = "_blank"
          href="https://www.linkedin.com/in/nancyjng/"
          sx={{
            position: "absolute", 
            bottom: 24, 
            right: 24, 
            zIndex: 1000,
            boxShadow: 3, 
            backgroundColor: "primary.main", 
            color: "primary.contrastText", 
            "&:hover": {
              backgroundColor: "primary.dark", 
              transform: "scale(1.1)", 
            },
            width: 56, 
            height: 56, 
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}
