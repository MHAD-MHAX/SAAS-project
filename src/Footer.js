import React from 'react';
import { Container, Grid, Button, Typography, Link, Box } from '@mui/material';
import { Phone, LocalShipping, Inbox, AccountCircle, Facebook, Instagram } from '@mui/icons-material';


import Logo from "./Images/LOGO3.jpeg";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', borderColor: '#111' }}>
      <Container>
        {/* Contact and Links Section */}
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              fullWidth
              sx={{ height: '80px', backgroundColor: 'rgba(255,255,255,.02)', borderColor: 'rgba(255,255,255,.02)' }}
            >
              <Phone sx={{ fontSize: 36 }} />
              <Box sx={{ pl: 2 }}>
                <Typography variant="caption">Kontakta kundservice</Typography>
                <Typography variant="body2">010 173 40 10</Typography>
              </Box>
            </Button>
          </Grid>
     
 
        </Grid>

        {/* Footer Links */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item md={3} xs={12}>
            <h5>Tjänster</h5>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link
                href="/partners"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                BC+
              </Link>
              <Link
                href="/seo"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                Sökmotoroptimering
              </Link>
              <Link
                href="/landing"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                Landningssidor
              </Link>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <h6>Företaget</h6>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link
                href="/about"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                Om oss
              </Link>
      
              <Link
                href="/contact"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                Kontakta oss
              </Link>
     
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <h6>Act Local AB - Lokal SEO</h6>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Vi är en SEO-byrå med fokus på lokala företag. Med sökmotoroptimering hjälper vi våra kunder att skaffa nya kunder varje månad via världens största sökmotor, Google.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Link
                href="/seo"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  fontSize: '1.2rem', // Increased font size
                }}
              >
                Vad är SEO
              </Link>
          
            </Box>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box>
                  <img src={Logo} width="40" alt="Act Local Logo" />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Kullagatan 30, 254 66 Helsingborg</Typography>
                <Typography variant="h6">010 173 40 10</Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;