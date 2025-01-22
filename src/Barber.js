import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
} from '@mui/material';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import Footer from './Footer';

const Barber = () => {
  return (
    <>
    <Navbar/>
    <main style={{ padding: '64px 0 0' }}>
      {/* Hero Image Section */}
      <Box
        sx={{
          position: 'relative',
          height: 400,
          textAlign: 'center',
          color: 'black',
          backgroundImage: `url(https://cda.actlocal.se/assets/successstories/ezgif-5-bf6e13d20812.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 700 }}>
          Elite Barbers NYC
        </Typography>
        <Typography variant="body1">12 Augusti, 2024</Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          pt: 8,
          backgroundColor: 'rgb(237, 245, 255)',
          mt: -6,
          pb: 5,
        }}
      >
        <Container>
          {/* Buttons */}
          <Grid container spacing={2} sx={{ mb: 5, mt: -16 }}>
            {['Utmaning', 'Lösning', 'Resultat'].map((label) => (
              <Grid item xs={12} md={4} key={label}>
                <Button
                  variant="contained"
                  sx={{
                    height: '100%',
                    width: '100%',
                    padding: '20px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                     color:'black'
                  }}
                >
                  <Typography variant="h5">{label}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* Content Sections */}
          {[
            {
              id: 'utmaning',
              title: 'Utmaningen',
              content: (
                <>
                  <Typography paragraph sx={{color:'black'}}>
                  Restaurang Mii Soo är en asiatisk restaurang med malaysisk touch i centrala Örebro. En liten restaurang med passion för maten och begränsade kunskaper inom online marketing. Restaurang Mii Soo hade till en början inget ägandeskap över sin profil på Google, de hade flertalet andra profiler som var publicerade på olika plattformar men utan möjligheter att hantera dessa. Eftersom deras kunskap samt tid till att hantera detta manuellt inte fanns tillgängligt så sökte de efter ett verktyg för att effektivisera och hantera sin information utan att andra kunde bestämma vilken information de skulle visa utåt.
                  </Typography>
                  <Typography paragraph sx={{color:'black'}}>
                  Restaurang Mii Soo har sedan start haft många nöjda kunder vilket resulterat i många recensioner som kommit in, dessa recensioner stod nu obesvarade då personalen inte hade verktygen för att enkelt besvara och hantera recensioner de fick in via flertalet olika sociala medier.
                  </Typography>
                </>
              ),
            },
            {
              id: 'losning',
              title: 'Lösningen',
              content: (
                <>
                  <Typography paragraph sx={{color:'black'}}>
                  Act Local började med att samla in de företagsprofiler som fanns publicerade på flertalet plattformar. Genom att koppla dessa till Act Locals system fick ägaren möjlighet att för första gången styra sin information från ett och samma ställe. Restaurangen fick nu även en bokningslänk som visas för alla som ser deras profil på Google. Alla recensioner samlas i en inkorg tillsammans med alla Instagram inlägg som görs från restaurangen. Det blev nu väldigt enkelt att få förståelse om vad som sades om företaget online.
                  </Typography>
                  <Typography paragraph sx={{color:'black'}}>
                  Restaurang Mii Soo har sedan starten av samarbetet i April 2018 gått från ca 3500 intryck/månad till att i December 2018 ha över 11 000 intryck. Klick till hemsidan har gått från ca 70st/månad till att i December 2018 vara 174 st. Hanteringstiden är numera ca 10 minuter i månaden där planering av posts, besvarande av recensioner och ändringar i öppettider för kommande månad görs.
                  </Typography>
                </>
              ),
            },
          ].map((section) => (
            <Box key={section.id} sx={{ mb: 6 }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              {section.content}
            </Box>
          ))}

          {/* Final Results */}
          <Box textAlign="center" sx={{ mt: 10, mb: 5 }}>
            <Typography variant="h2">Slutligt resultat</Typography>
          </Box>
          <Grid container spacing={2}>
  {[
    { label: 'Fler unika hemsideklick', value: '+145%' },
    { label: 'Fler visningar', value: '+125%' },
    { label: 'Fler sökningar', value: '' },
  ].map((stat, index) => (
    <Grid item xs={12} md={4} key={index}>
      <Box
        sx={{
          padding: 5,
          textAlign: 'center',
          backgroundColor: '#fff',
          color: 'black',
          borderRadius: 1,
          height: 200, // Set a fixed height for uniform card size
          display: 'flex', // Flexbox for content alignment
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: 'rgb(0, 114, 187)' }}>
          {stat.value} {/* Fallback for empty values */}
        </Typography>
        <Typography variant="h4">{stat.label}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>
        </Container>
      </Box>

 <Box py={8} bgcolor="grey.100">
  <Container align="center">
    <Typography
      variant="h5"
      gutterBottom
      sx={{ color: "black", fontWeight: "bold" }}
    >
      Våra partners
    </Typography>
    <br />
    <br />
    <Grid container spacing={6} justifyContent="center">
      {[
        "Apple Maps",
        "Google",
        "Trip Advisor",
        "Facebook",
        "TrustPilot",
        "Google Maps",
        "Instagram",
        "FourSquare",
        "Gm",
        "Factual",
        "Fiat",
        "Mercedes",
        "Navmii",
        "TomTom",
        "Toyota",
        "Tupalo",
        "VW",
        "Where To",
        "Brownbook",
        "Infobel",
        "Waze",
        "Uber",
        "Cylex",
        "Yelp",
        "Yandex",
        "Audi",
        "BMW",
        "Ford",
        "Baidu",
      ].map((partner, index) => (
        <Grid item key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center aligns image and text
            }}
          >
            <img
              src={`//static-prod.uberall.com/assets/directory_logo/png/${partner
                .toUpperCase()
                .replace(" ", "_")}.png`}
              alt={partner}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px", // Adds space between image and text
              }}
            />
            <Typography
              variant="caption"
              style={{ marginTop: "8px", color: "black" }}
            >
              {partner}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


    <section 
    style={{backgroundColor:'white', color:'black'}}
    >
          <Container >
            <Grid container spacing={4} alignItems="center" >
              {/* Left Column */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h3" gutterBottom sx={{fontWeight:'bold'}}>
                  Varför vara kund hos oss?
                </Typography>
                <Typography variant="h5" gutterBottom sx={{fontSize:'1.8em'}}>
                  Act+ Kund
                </Typography>
                <Typography variant="body1" paragraph>
                  Du frågar 20 mycket trovärdiga personer om de känner till ett visst<br></br>
                  företag. De svarar då ja och berättar vad företaget ägnar sig åt, berättar <br></br>
                  en kort beskrivning om företaget, var företaget ligger och vad de har för<br></br>
                   telefonnummer. Visst skulle det då kännas tryggt för dig att kontakta de?<br></br>
                </Typography>
                <Typography variant="h5" gutterBottom sx={{fontSize:'1.8em'}}>
                  Inte Act+ Kund
                </Typography>
                <Typography variant="body1" paragraph>
                  Tänk nu istället att du frågar samma 20 personer om de känner till ett <br></br>
                  annat företag. 12 svarar att de aldrig hört talas om företaget. 4 personer<br></br>
                  säger att företaget ligger på Storgatan 13. 2 personer säger att de ligger <br></br>
                  på Sveavägen 81 och sista 2 personerna ger två olika telefonnummer. <br></br>
                  Hade du känt digövertygad om att informationen är korrekt? Troligtvis<br></br>
                  inte.
                </Typography>
              </Grid>
    
              {/* Right Column */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  backgroundColor: "rgb(237, 245, 255)",
                  borderRadius: "10px",
                  padding: 4,
                }}
              >
                <Typography variant="h3" gutterBottom>
                  Få en offert idag
                </Typography>
                <Typography variant="body1" paragraph>
                  Skicka iväg en förfrågan till oss så återkommer vi så fort vi kan.
                </Typography>
                <form method="post" action="/thanks" id="checkForm">
                  <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                      required
                      id="input-name"
                      label="Namn"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      required
                      id="input-email"
                      label="E-postadress"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      required
                      id="input-phone"
                      label="Telefon"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      required
                      id="input-website"
                      label="Webbplats"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      required
                      id="input-message"
                      label="Meddelande"
                      variant="outlined"
                      multiline
                      rows={5}
                      fullWidth
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      
                      size="large"
                      sx={{ borderRadius: "20px", backgroundColor:'black', color:'white' }}
                    >
                      Skicka
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Container>
          <br></br>
        <br></br>
        <br></br>
        </section>

        <Footer/>
    
    </main>
    </>
  );
};

export default Barber;