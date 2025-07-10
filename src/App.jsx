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
            position: "absolute", // Absolutely position the button
            bottom: 24, // Distance from the bottom (adjust as needed for spacing)
            right: 24, // Distance from the right (adjust as needed for spacing)
            zIndex: 1000,
            // Add some FAB-like styling for better appearance:
            boxShadow: 3, // Adds a subtle shadow
            backgroundColor: "primary.main", // Use theme's primary color
            color: "primary.contrastText", // Use theme's contrast text for icon color
            "&:hover": {
              backgroundColor: "primary.dark", // Darken on hover
              transform: "scale(1.1)", // Slightly enlarge on hover for feedback
            },
            width: 56, // Standard FAB size
            height: 56, // Standard FAB size
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}
