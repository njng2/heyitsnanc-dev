import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        p: 2,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Avatar
            src="/landing-page-pics/portrait.png"
            alt="laptop"
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h4" text-align="center" gutterBottom>
            Hey there, I'm Nancy!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "fixed",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Welcome, friends to my portfolio!
          </Typography>
        </Box>
      </Box>

      {/* <IconButton
        aria-label="open contact dialog"
        onClick={handleOpenDialog}
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
        <ConnectWithoutContactIcon fontSize="medium" />
      </IconButton>
      <Contact
        open={isDialogOpen}
        onClose={handleCloseDialog}
        linkedInUrl={linkedIn}
      /> */}
    </Box>
  );
}
