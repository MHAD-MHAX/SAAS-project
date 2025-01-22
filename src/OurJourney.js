import React from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia } from '@mui/material';
import Amsterdam from './Images/Amsterdam.jpg';
import Barber from './Images/Barber.jpg';

const OurJourney = () => {
  return (
    <Box
      sx={{
        padding: '40px',
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: 'black',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}
      >
        Framgångsresor
      </Typography>

      {/* Card Grid */}
      <Grid container spacing={3} justifyContent="center">
        {/* Card 1: Ärtholmsgården */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: 'none',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                paddingTop: '100%', // Ensures the card is square
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Amsterdam})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* Text centered in the middle */}
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  zIndex: 1,
                  textAlign: 'center',
                }}
              >
                Augun Spa Therapy
              </Typography>
              {/* Button */}
              <Button
                href="/kunder/aertholmsgarden"
                variant="contained"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: 20,
                  width: '150px',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Läs mer
              </Button>
            </CardMedia>
          </Card>
        </Grid>

        {/* Card 2: YogaPalatset */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: 'none',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="div"
              sx={{
                position: 'relative',
                paddingTop: '100%', // Ensures the card is square
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Barber})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* Text centered in the middle */}
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  zIndex: 1,
                  textAlign: 'center',
                }}
              >
                Elite Barbers NYC 
              </Typography>
              {/* Button */}
              <Button
                href="/kunder/yogapalatset"
                variant="contained"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: 20,
                  width: '150px',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Läs mer
              </Button>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>

      {/* See More Customers Button */}
      <Button
        href="/kunder"
        variant="contained"
        sx={{
          borderRadius: 20,
          width: '250px',
          marginTop: '40px',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Se fler kunder
      </Button>
    </Box>
  );
};

export default OurJourney;