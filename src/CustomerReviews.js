import React from 'react';
import { Card, CardContent, Typography, CardHeader, Avatar, Grid, Box, Rating } from '@mui/material';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 'fe42d906f183b7bc3e8d954d0c99630d',
      name: 'Emma',
      date: 'January 18, 2025',
      text: 'Nicholas i Göteborg var väldigt informativ och tog sin tid till att förstå hur vår verksamhet fungerar. Ser fram emot ett långt och bra samarbete.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKIoklxL2mwHaXB0DrfgUSBYDfjAtRxPEqnXCz9QSSCV9Ok7w=w40-h40-c-rp-mo-br100',
      rating: 5, // Rating value out of 5
    },
    {
      id: '18f483a9055fe2c01a6a824ff71e5d22',
      name: 'M',
      date: 'November 28, 2024',
      text: 'En mycket bra tjänst, och Laura är en stjärna på att ställa upp oavsett dag och tid.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKNvLjCZGkknKFCUpsbl-2Wos_YQwekocmhOIp6Udwh1T4kCw=w40-h40-c-rp-mo-br100',
      rating: 4, // Rating value out of 5
    },
    {
      id: '1a2b3c4d5e6f7g8h9i0j',
      name: 'Olivia',
      date: 'January 10, 2024',
      text: 'Jag är verkligen imponerad av hur snabbt och effektivt teamet hanterade vår förfrågan. Tjänsten har verkligen hjälpt oss att förbättra vår synlighet online.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocLfBr91m8oCOlW0sJ9pOT9JpDLyZA8NjJ0xK5MRKZYQQjl0b8I=w40-h40-c-rp-mo-br100',
      rating: 5, // Rating value out of 5
    },

   
    {
      id: '1a2b3c4d5e6f7g8h9i0j',
      name: 'Olivia',
      date: 'January 10, 2024',
      text: 'Jag är verkligen imponerad av hur snabbt och effektivt teamet hanterade vår förfrågan. Tjänsten har verkligen hjälpt oss att förbättra vår synlighet online.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocLfBr91m8oCOlW0sJ9pOT9JpDLyZA8NjJ0xK5MRKZYQQjl0b8I=w40-h40-c-rp-mo-br100',
      rating: 5, // Rating value out of 5
    },
     {/*
    {
      id: '1a2b3c4d5e6f7g8h9i0j',
      name: 'Olivia',
      date: 'January 10, 2024',
      text: 'Jag är verkligen imponerad av hur snabbt och effektivt teamet hanterade vår förfrågan. Tjänsten har verkligen hjälpt oss att förbättra vår synlighet online.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocLfBr91m8oCOlW0sJ9pOT9JpDLyZA8NjJ0xK5MRKZYQQjl0b8I=w40-h40-c-rp-mo-br100',
      rating: 5, // Rating value out of 5
    },
    {
      id: '2b3c4d5e6f7g8h9i0j1a',
      name: 'Liam',
      date: 'December 20, 2023',
      text: 'Vi har haft ett fantastiskt samarbete med företaget och är väldigt nöjda med resultaten. Vi såg en ökning i trafik på vår webbplats redan efter en vecka.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocMspzvK7v5fAYUnjjgkAlNnfpZ9VHTnkB5pfdXk8wXBaN7Fwao=w40-h40-c-rp-mo-br100',
      rating: 4, // Rating value out of 5
    }
      */}
  ];

  return (
    <Box sx={{ backgroundColor: 'white', padding: 5 }}>
      <Typography variant="h2" align="center" sx={{ paddingBottom: 5, fontWeight:'bold' }}>
        Vad säger våra kunder om oss?
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 5 }}>
        Vi är stolta över förtroendet som vi fått att driva mer trafik och hjälpa företag, stora som små, att synas bättre på nätet.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id} sx={{ paddingBottom: 3 }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2 }}>
              <CardHeader
                avatar={<Avatar src={review.image} alt={review.name} />}
                title={review.name}
                subheader={review.date}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Rating value={review.rating} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {review.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerReviews;