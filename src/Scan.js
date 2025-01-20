// Scan.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Scan = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Box
        sx={{
          padding: "px 0px 0px",
        }}
      >
        <Box
          sx={{
            background: "black",
            height: "100vh",
            color: "white",
          }}
        >
          <Container sx={{ py: 0,  textAlign:'left'}}>
            <Grid container sx={{ minHeight: "100vh" }}>
              {/* Left Content */}
              <Grid item xs={12} md={6} sx={{ p: { xs: 0, md: 4 }, display: "flex", alignItems: "center", }}>
                <Box>
                  <Typography variant="h2" sx={{ mb: 3, color: "white", fontWeight:'bold' }}>
                    Skanna ditt företag
                  </Typography>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar sx={{ bgcolor: "green", height: 40, width: 40 }}>
                        <CheckCircleIcon />
                      </Avatar>
                      <Typography sx={{ ml: 2 }}>
                        Fyll i dina företagsuppgifter i formuläret.
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar sx={{ bgcolor: "green", height: 40, width: 40 }}>
                        <CheckCircleIcon />
                      </Avatar>
                      <Typography sx={{ ml: 2 }}>
                        Vi skannar av de 30 största tjänsterna på nätet.
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar sx={{ bgcolor: "green", height: 40, width: 40 }}>
                        <CheckCircleIcon />
                      </Avatar>
                      <Typography sx={{ ml: 2 }}>
                        Efter 10 sekunder får du en kostnadsfri rapport som visar
                        din närvaro på nätet.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Right Content */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "50vw",
                    height: "100%",
                    bgcolor: "white",
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 5,
                    bgcolor: "white",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Company Presence Check
                  </Typography>
                  <form>
                    <TextField
                      fullWidth
                      label="Namn på företaget"
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Gatunamn och nummer"
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Postnummer"
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="E-postaddress"
                      required
                      sx={{ mb: 3 }}
                    />                 
                  <TextField
                    fullWidth
                    label="För och efternamn"
                    required
                    sx={{ mb: 3 }}
                  />
                      <TextField
                    fullWidth
                    label="Telefon"
                    required
                    sx={{ mb: 3 }}
                  />
                  

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                    >
                      SKANNA NU
                    </Button>
                    </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0', color:'black' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section 1 */}
        <Grid container spacing={2} direction={{ xs: 'column', md: 'row-reverse' }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingBottom: '74.93%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/UB-29047-6.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '0',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight:'bold' }}>
              Rätt information om ert<br></br> 
              företag på alla plattformar
            </Typography>
            <Typography paragraph>
              Har du också råkat ut för att du sökt upp ett företag och öppettiderna eller telefonnumret har visat sig vara fel? Det har vi också. Det är oftast bättre att inte synas alls än att synas med felaktig information, då det skapar en stor badwill för er verksamhet.
            </Typography>
            <Typography paragraph>
              Genom att du värnar om ditt företag och ser till att du syns med rätt och konsekvent information på trovärdiga plattformar så anses du som ett mer trovärdigt företag och Google känner sig mer bekväma med att visa upp just ditt företag oftare och högre upp i sökresultatet.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 2 */}
        <Grid container spacing={2} direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" sx={{ marginTop: '3rem' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingBottom: '75%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/UB-29047-5.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '0',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight:'bold' }}>
              Automatisera er digitala närvaro
            </Typography>
            <Typography paragraph>
              Genom att vi samlat dessa trovärdiga plattformar i ett och samma system med API-lösningar så har vi förenklat och automatiserat hanteringen av att se till att din företagsinformation är korrekt och konsekvent på alla dessa plattformar. Ändra på ett ställe och det synkas på alla ställen, helt automatiskt.
            </Typography>
            <Typography paragraph>
              Du kan även i vårt system enkelt besvarar recensioner och posta inlägg/erbjudanden direkt på bl.a. Google, Facebook, Trustpilot och en mängd andra plattformar.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 3 */}
        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems="center" sx={{ marginTop: '3rem' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingBottom: '72.77%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/landingpage-icon-first.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '0',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight:'bold'}}>
              Fler kunder till er verksamhet via Google varje månad
            </Typography>
            <Typography paragraph>
            Genom att vi samlat dessa trovärdiga plattformar i ett och samma system med API-lösningar så har vi förenklat och automatiserat hanteringen av att se till att din företagsinformation är korrekt och konsekvent på alla dessa plattformar. Ändra på ett ställe och det synkas på alla ställen, helt automatiskt.
            </Typography>
            <Typography paragraph>
              Du kan även i vårt system enkelt besvarar recensioner och posta inlägg/erbjudanden direkt på bl.a. Google, Facebook, Trustpilot och en mängd andra plattformar.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>


<Footer/>
    </main>
    </>
  );
};

export default Scan;