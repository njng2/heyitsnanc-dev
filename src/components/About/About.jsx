import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Divider, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  const [tabIndex, setTabContent] = useState(0);
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100vh",
        width: "95vw",
        paddingTop: "64px"
      }}
    >
      <Box sx={{ minWidth: 230,  ml:5, mr: 5}}>
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
          <Tab label="Why did I get into tech?" />
          <Tab label="My technical background" />
          <Tab label="Outside of tech.." />
        </Tabs>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {tabIndex === 0 && (
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
            I was originally studying to become a pediatrician, but after
            working in a clinic for 2 years, I realized this was not the path I
            wanted to do. 
            <br></br>
            <br></br>
            I still wanted to help my community and make a
            difference, but also challenge myself in a new way. That's when I
            discovered software engineering. I am passionate about creating
            innovative solutions that can improve people's lives, and I believe
            that technology can be a powerful tool for positive change.
          </Typography>
        )}
        {tabIndex === 1 && (
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            I was a backend developer at ADP, working with Java, Spring, AWS,
            and SQL.
            <br></br>
            <br></br>I have also have frontend experience with React,
            Javascript, HTML and CSS. I've worked with other languages such as
            Python and C++, along with other technologies such as MongoDB,
            Material UI, I am always eager to learn new technologies and improve
            my skills.
          </Typography>
        )}
        {tabIndex === 2 && (
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            I love to go to solidcore (100 classes in and counting), pilates,
            barre, hiking, long walks with a podcast.
            <br />
            <br />
            <Divider sx={{ mx: 4, borderColor: "#bfa08f" }} />
            <br />
            I also can make a mean batch of kimchi and other korean side dishes
            and share with my friends and family.
            <br />
            <br />
            <Divider sx={{ mx: 4, borderColor: "#bfa08f" }} />
            <br />
            I'm also learning how to make latte art! See some of my work
            <MuiLink
              component={Link}
              to="/about/latte-art-gallery"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              here!
            </MuiLink>
            <br />
            <br />
            <Divider sx={{ mx: 4, borderColor: "#bfa08f" }} />
            <br />I am a labrador-mix mom to a 6 year old named Brownie, who is
            obsessed with food (except certain vegetables). Meet him
            <MuiLink
              component={Link}
              to="/about/brownie-gallery"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              here!
            </MuiLink>
            <br />
            <br />
            <Divider sx={{ mx: 4, borderColor: "#bfa08f" }} />
            <br />I am also a bombay cat mom to a 4 year old named Sammy. Meet
            him
            <MuiLink
              component={Link}
              to="/about/sammy-gallery"
              target="_blank"
              color="inherit"
              underline="hover"
              sx={{ margin: "0 10px", cursor: "pointer" }}
            >
              here!
            </MuiLink>
          </Typography>
        )}
      </Box>
    </Box>
  );
}
