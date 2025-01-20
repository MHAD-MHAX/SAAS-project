import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const OurJourney = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor:'white', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom 
      sx={{
        color:'black',
        fontWeight:'bold',
      }}
      >
        Framgångsresor
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Card 1: Ärtholmsgården */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 'none', elevation: 0 }}>
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                height: 400,
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://cda.actlocal.se/assets/successstories/artholmsgarden.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Button
                href="/kunder/aertholmsgarden"
                variant="contained"
                color="primary"
                sx={{
                  position: 'absolute',
                  bottom: '20px', // Position button near the bottom of the image
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: 20,
                  width: '150px',
                }}
              >
                Läs mer
              </Button>
            </CardMedia>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'white' }}>
                Ärtholmsgården
              </Typography>
            </CardContent>
          </Card>
        </Grid>



        {/* Card 4: YogaPalatset */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 'none', elevation: 0 }}>
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                height: 400,
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://cda.actlocal.se/assets/actlocal_blue.png")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <Button
                href="/kunder/yogapalatset"
                variant="contained"
                color="primary"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: 20,
                  width: '150px',
                }}
              >
                Läs mer
              </Button>
            </CardMedia>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'white' }}>
                YogaPalatset
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Button
        href="/kunder"
        variant="contained"
        color="primary"
        sx={{ borderRadius: 20, width: '250px', marginTop: '40px' }}
      >
        Se fler kunder
      </Button>
    </Box>
  );
};

export default OurJourney;