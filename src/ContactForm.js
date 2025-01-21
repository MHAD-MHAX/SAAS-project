import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContactForm = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Header Section */}
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 2 }}
          data-aos="fade-up"
        >
          Låter det intressant?
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{ mb: 5, color:'black'}}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Fyll i dina uppgifter nedan så berättar vi gärna mer om hur vi kan hjälpa ert företag!
        </Typography>

        {/* Form Section */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: 800,
            mx: "auto",
            p: 5,
            mt: 5,
            textAlign: "left",
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <form method="post" action="/thanks" id="checkForm">
            <Grid container spacing={3}>
              {/* Name and Email */}
              <Grid item xs={12} md={6} data-aos="fade-right">
                <TextField
                  required
                  id="name"
                  label="Namn"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <TextField
                  required
                  id="email"
                  label="E-postadress"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* Phone and Website */}
              <Grid item xs={12} md={6} data-aos="fade-right">
                <TextField
                  required
                  id="phone"
                  label="Telefon"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <TextField
                  required
                  id="website"
                  label="Webbplats"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* Message */}
              <Grid item xs={12} data-aos="fade-up">
                <TextField
                  required
                  id="message"
                  label="Meddelande"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box
              sx={{ textAlign: "center", mt: 5 }}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ borderRadius: 50, px: 5, backgroundColor:'black', color:'white' }}
              >
                Skicka
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactForm;