// Scan.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
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
    <Box
        sx={{
        
        }}
      >
        <Box
          sx={{
            background: "black",
            height: "140vh",
            color: "white",
          }}
        >
          <Container sx={{ py: 0,  textAlign:'left'}}>
            <Grid container sx={{ minHeight: "100vh" }}>
              {/* Left Content */}
              <Grid item xs={12} md={6} sx={{ p: { xs: 0, md: 4 }, display: "flex", }}>
                <Box>
                  <Typography variant="h2" sx={{ mt: 10, color: "white", fontWeight:'bold',   }}>
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
                    position: "",
                    paddingLeft:'20px',
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
                      style={{backgroundColor:'black', color:'white'}}
                      fullWidth
                      size="large"
                    >
                         
                      SKANNA NU
                    </Button>
                    </form>
                    
                </Box>
                <br></br>
<br></br>
<br></br>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>




<Box sx={{paddingTop:'50px'}}>

<Box
      sx={{
        backgroundColor: '#edf5ff',
        position: 'relative',
        paddingBottom: '15px',
        color:'black'
      }}
    >
      <Container>
        {/* First Section */}
        <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row-reverse' } }}>
          <Grid item xs={12} md={6} sx={{ height: '100%', width: '100%' }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/UB-29047-6.png")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                paddingBottom: '74.9268%',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ marginBottom: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Rätt information om ert företag på alla plattformar
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              Har du också råkat ut för att du sökt upp ett företag och öppettiderna eller telefonnumret har visat sig vara fel? Det har vi också. Det är oftast bättre att inte synas alls än att synas med felaktig information, då det skapar en stor badwill för er verksamhet.
            </Typography>
            <Typography variant="body1">
              Genom att du värnar om ditt företag och ser till att du syns med rätt och konsekvent information på trovärdiga plattformar så anses du som ett mer trovärdigt företag och Google känner sig mer bekväma med att visa upp just ditt företag oftare och högre upp i sökresultatet.
            </Typography>
          </Grid>
        </Grid>

        <br></br>
        <br></br>
        <br></br>
        {/* Second Section */}
        <Grid container spacing={2} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          <Grid item xs={12} md={6} sx={{ height: '100%', width: '100%' }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/UB-29047-5.png")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                paddingBottom: '75%',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ marginBottom: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
              Automatisera er digitala närvaro
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              Genom att vi samlat dessa trovärdiga plattformar i ett och samma system med API-lösningar så har vi förenklat och automatiserat hanteringen av att se till att din företagsinformation är korrekt och konsekvent på alla dessa plattformar. Ändra på ett ställe och det synkas på alla ställen, helt automatiskt.
            </Typography>
            <Typography variant="body1">
              Du kan även i vårt system enkelt besvara recensioner och posta inlägg/erbjudanden direkt på bl.a. Google, Facebook, Trustpilot och en mängd andra plattformar.
            </Typography>
          </Grid>
        </Grid>

        <br></br>
        <br></br>
        <br></br>

        {/* Third Section */}
        <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row-reverse' } }}>
          <Grid item xs={12} md={6} sx={{ height: '100%', width: '100%' }}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                backgroundImage: 'url("https://cda.actlocal.se/assets/landingpage-icon-first.svg")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                paddingBottom: '72.7672%',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ marginBottom: 5, fontSize: { xs: '2rem', md: '3rem' } }}>
            Fler kunder till er verksamhet via Google varje månad
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
              Genom att vi samlat dessa trovärdiga plattformar i ett och samma system med API-lösningar så har vi förenklat och automatiserat hanteringen av att se till att din företagsinformation är korrekt och konsekvent på alla dessa plattformar. Ändra på ett ställe och det synkas på alla ställen, helt automatiskt.
            </Typography>
            <Typography variant="body1">
              Du kan även i vårt system enkelt besvara recensioner och posta inlägg/erbjudanden direkt på bl.a. Google, Facebook, Trustpilot och en mängd andra plattformar.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  


<Footer/>
</Box>
    
    </>
  );
};

export default Scan;