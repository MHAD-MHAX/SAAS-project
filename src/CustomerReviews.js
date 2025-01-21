import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box, Button, Rating } from '@mui/material';

const CustomerReviews = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#edf5ff' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight:'bold' }}>
          Vad säger våra kunder om oss?
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '30px', mx: 'auto', width: '80%', color:'black' }}>
          Vi är stolta över förtroendet som vi fått att driva mer trafik och hjälpa företag, stora som små, att synas bättre på nätet.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {/* Review 1 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 0 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src="https://lh3.googleusercontent.com/a/ACg8ocKIoklxL2mwHaXB0DrfgUSBYDfjAtRxPEqnXCz9QSSCV9Ok7w=w40-h40-c-rp-mo-br100"
                  alt="Emma"
                  sx={{ width: 40, height: 40, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body2">Emma</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    January 8, 2025
                  </Typography>
                </Box>
              </Box>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ marginY: 2 }}
              />
              <Typography variant="body2">
                Nicholas i Göteborg var väldigt informativ och tog sin tid till att förstå hur vår verksamhet fungerar. Ser fram emot ett långt och bra samarbete.
                Super kille verkligen.
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>

        {/* Review 2 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 0 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src="https://lh3.googleusercontent.com/a/ACg8ocKvubj5h18yeW9VfkGWlLjo9DMpveEMhUUpkgLk3JKOJu2KtA=w40-h40-c-rp-mo-br100"
                  alt="Mando Amer"
                  sx={{ width: 40, height: 40, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body2">Mando Amer</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    December 2, 2024
                  </Typography>
                </Box>
              </Box>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ marginY: 2 }}
              />
              <Typography variant="body2">
                Super nöjd med helheten, snabb hjälp och respons. Särskilt Lara som alltid finns vid hjälp.
              </Typography>
         
            </CardContent>
          </Card>
        </Grid>

        {/* Review 3 */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ boxShadow: 0 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src="https://lh3.googleusercontent.com/a-/ALV-UjWgFMB3Wtz7SW4xQgdpZOqvb7UvTC27u49a7tA4phXigKvf5_-abw=w40-h40-c-rp-mo-br100"
                  alt="Ghazal Saberian"
                  sx={{ width: 40, height: 40, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="body2">Ghazal Saberian</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    November 29, 2024
                    </Typography>
                </Box>
              </Box>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ marginY: 2 }}
              />
              <Typography variant="body2">
                Smidigt service och trevlig personal. Lara, vår kontaktperson, är professionell och engagerad. Tack vare deras arbete.
                <br></br>
              </Typography>
         
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerReviews;