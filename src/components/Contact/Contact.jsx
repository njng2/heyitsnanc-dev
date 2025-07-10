import Box from "@mui/material/Box";
import * as React from "react";
import { Link as MuiLink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function Contact({ open, onClose, linkedInUrl }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
      >
        <DialogTitle id="contact-dialog-title">
          Let's Connect
        </DialogTitle>
        <DialogContent>
          <MuiLink
            href={linkedInUrl}
            target="_blank"
            color="inherit"
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            <IconButton aria-label="connect">
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          </MuiLink>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
