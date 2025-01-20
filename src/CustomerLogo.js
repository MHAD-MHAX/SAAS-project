import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const CustomersSection = () => {
  const customers = [
    {
      url: 'https://media.cdn.teamtailor.com/images/s3/teamtailor-production/gallery_picture/image_uploads/ea55aad7-35c3-4bdc-b074-32e331a270cc/original.png',
      width: 180,
      paddingBottom: '18.8333%',
    },
    {
      url: 'https://actlocal.se/_nuxt/img/hawaii.bf5d9e1.png',
      width: 60,
      paddingBottom: '100%',
    },
    {
      url: 'https://actlocal.se/_nuxt/img/jbil.3abc89c.png',
      width: 120,
      paddingBottom: '34.6667%',
    },
    {
      url: 'https://actlocal.se/_nuxt/img/hinton.7cb596b.png',
      width: 80,
      paddingBottom: '37.4101%',
    },
    {
      url: 'https://actlocal.se/_nuxt/img/mobilpart.93f7020.png',
      width: 80,
      paddingBottom: '68.4211%',
    },
    {
      url: 'https://drivknuten.se/pub/media/theme_options/default/logo_1.png',
      width: 120,
      paddingBottom: '12.3457%',
    },
  ];

  return (
    <Box sx={{ marginTop: 10, marginBottom: 10 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{fontWeight:'bold'}}>
        Ett urval av våra kunder
      </Typography>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {customers.map((customer, index) => (
            <Grid item key={index} xs="auto" align="center">
              <Box
                sx={{
                  width: `${customer.width}px`,
                  position: 'relative',
                  paddingBottom: customer.paddingBottom,
                  backgroundImage: `url(${customer.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomersSection;