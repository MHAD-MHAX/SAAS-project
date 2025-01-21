import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import Amsterdam from "./Images/Amsterdam.jpg";
import Barber from "./Images/Barber.jpg";

const OurJourney = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: 'white', textAlign: 'center' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: 'black',
          fontWeight: 'bold',
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
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Amsterdam})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* Text on top of the image */}
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  zIndex: 1, // Ensure the text is above the image
                }}
              >
                Amsterdam
              </Typography>
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
          </Card>
        </Grid>

        {/* Card 2: YogaPalatset */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 'none', elevation: 0 }}>
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                height: 400,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Barber})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* Text on top of the image */}
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  zIndex: 1, // Ensure the text is above the image
                }}
              >
                Sweden
              </Typography>
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