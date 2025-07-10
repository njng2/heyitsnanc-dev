import Box from "@mui/material/Box";
import { Divider, Typography, Container, Link as MuiLink } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

export default function Experience() {
  const [tabIndex, setTabContent] = useState(0);
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "64px",
        width: "100%",
      }}
    >
      <Box sx={{ ml: 5 }}>
        <Tabs
          orientation="vertical"
          value={tabIndex}
          textColor="inherit"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#bfa08f",
            },
            "&. MuiTab-root:hover": {
              backgroundColor: "#bfa08f",
            },
          }}
          variant="scrollable"
          onChange={(e, newValue) => setTabContent(newValue)}
        >
          <Tab label="Professional Experience" />
          <Tab label="Past Projects" />
        </Tabs>
      </Box>
      {tabIndex === 0 && (
        <Container maxWidth="md">
          <br></br>
          <Typography variant="h3" gutterBottom>
            ADP- New York
          </Typography>
          <Typography variant="h5" gutterBottom>
            Software Engineer
            <br></br>
            July 2022-August 2024
          </Typography>
          <Typography variant="body" gutterBottom>
            <br></br>● Implemented highly available backend Java gRPC APIs to
            automate recurring payment requests, effectively processing over
            10,000 transactions per month and achieving a 30% reduction in
            administrative costs within a large scale system.
            <br></br>
            <br></br>● Designed, implemented and maintained distributed
            microservices for core backend workflows, leveraging Apache Kafka
            for real-time event streaming and integrating Redis caching to
            significantly enhance system performance, reliability and high
            throughput operations.
            <br></br>
            <br></br>● Developed and deployed a scalable backend reconciliation
            system that accurately detects and automatically resolves data
            discrepancies across distributed services, improving data
            consistency by 98% and ensuring data integrity for critical systems.
            <br></br>
            <br></br>● Managed cloud infrastructure security on AWS with
            Terraform, ensuring secure microservice authentication and enforcing
            least-privilege access policies for backend services.
            <br></br>
            <br></br>● Implemented feature toggle that provides increased
            flexibility and control of backend requests processing for clients.
          </Typography>
          <br></br>
          <br></br>
          <Divider sx={{ borderColor: "#bfa08f" }} />
          <br></br>
          <Typography variant="h3" gutterBottom>
            CUNY- New York, NY
          </Typography>
          <Typography variant="h5" gutterBottom>
            Undergraduate Teaching Assistant
            <br></br>
            February 2020-June 2022
          </Typography>
          <Typography variant="body" gutterBottom>
            <br></br>● Mentored and guided over 50 students in foundational
            concepts in Data Structures and Algorithms in C++ and Python,
            contributing to a 25% increase in class success rates and fostering
            strong technical skill development.
            <br></br>
            <br></br>● Led interactive mock coding interviews and algorithm
            workshops, effectively preparing students for technical evaluations
            and strengthening their problem-solving and algorithmic skills.
          </Typography>
          <br></br>
          <br></br>
        </Container>
      )}

      {tabIndex === 1 && (
        <Container maxWidth="md">
          <br></br>
          <Typography variant="h3" gutterBottom>
            RocketCoin | Stonybrook University Hacks
            <MuiLink
              href="https://github.com/njng2/rocketcoin"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              <IconButton aria-label="connect">
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </MuiLink>
          </Typography>
          <Typography variant="h5" gutterBottom>
            September 2021-October 2021
            <br></br>
          </Typography>
          <Typography variant="body">
            <u>
              <b>Technologies Used:</b>
            </u>{" "}
            Flutter/Dart, MongoDb
            <br></br>● Designed app logo, app home screen and budget transaction
            page with Flutter/Dart to match prototype on Figma.
            <br></br>● Connected budget transaction page with MongoDB, to store
            live transactions.
          </Typography>
          <br></br>
          <br></br>
          <Divider sx={{ borderColor: "#bfa08f" }} />
          <br></br>
          <Typography variant="h3">
          MealSnap | CodePath 2021
           <MuiLink
              href="https://github.com/njng2/MealSnap"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              <IconButton aria-label="connect">
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </MuiLink>
          </Typography>
          <Typography variant="h5" gutterBottom>
            February 2021-May 2021
          </Typography>
          <Typography variant="body">
            <u>
              <b>Technologies Used: </b>
            </u>
            Swift, AlamoFire Image, Back4App Parse, Cocoapods
            <br></br>● A social media app for users to share recipes of home
            cooked meals, based on their dietary preferences, allergies, or type
            of cuisine
            <br></br>● Implemented recipe feed, grid views, and data models with
            Back4App’s Parse, Swift, AlamoFireImage for image processing, and
            Cocoapods for pod installing
          </Typography>
          <br></br>
          <br></br>
          <Divider sx={{ borderColor: "#bfa08f" }} />
          <br></br>
          <Typography variant="h3" gutterBottom>
              Toilecator | Hunter College CodeFest
               <MuiLink
              href="https://github.com/njng2/winter-2021-codefest-submissions-the-three-quaranteers"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              <IconButton aria-label="connect">
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </MuiLink>
          </Typography>
          <Typography variant="h5" gutterBottom>
            December 2020-January 2021
          </Typography>
          <Typography variant="body">
            <u>
              <b>Technologies Used: </b>
            </u>
            Swift, FireBase/CloudStore
            <br></br>● Designed and developed backend and data layer to help
            users discover and evaluate public restrooms based on attributes
            like cleanliness and accessibility.
            <br></br>● Integrated Firebase/Cloud Firestore to manage and
            synchronize real-time for dynamic map markers and user reviews
          </Typography>
          <br></br>
          <br></br>
        </Container>
      )}
    </Box>
  );
}
