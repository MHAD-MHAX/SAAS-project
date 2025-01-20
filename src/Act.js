import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  CardMedia,
  TextField,
} from "@mui/material";


import Navbar from "./Navbar";
import Footer from "./Footer";

const Act = () => {
  return (
    <>
    <Navbar/>
    <main>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://cda.actlocal.se/assets/Depositphotos_103761392_l-2015.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "620px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          paddingTop:'40px'
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom  sx={{ fontWeight:'bold', textAlign:'left', color:'white'}}>
            Bli synlig på alla digitala<br></br>
             plattformar
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textAlign:'left'}}>
            Google, Google Maps, Facebook, Instagram, Trustpilot,<br></br>
            TripAdvisor, Yelp, Foursquare är ett urval av de samarbetspartner<br></br>
            som vi har direktkopplade API’er med. Det betyder att vårt system <br></br>
            synkar i realtid och bidrar till att ditt företag syns och <br></br>
            varumärkesskyddats automatiskt på alla dessa plattformar. <br></br>
            Utöver dessa så har vi även kart och GPS-system och företagskataloger.<br></br>
            <br></br>
          </Typography>
          <Box display="flex" alignItems="left" mt={3}>
            <Box
              sx={{
                background: "rgba(0, 0, 0, 0.2)",
                padding: "10px 15px",
                borderRadius: "45px",
                marginRight: "15px",
                fontSize: "11.5px",
              }}
            >
              Jämför att vara kund och inte kund hos oss
            </Box>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{
                backgroundColor: "#49B978",
                "&:hover": {
                  backgroundColor: "#3DA869",
                },
              }}
            >
              här!
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box py={8} sx={{backgroundColor:'#dadcd7', color:'black'}}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{fontWeight:'bold', fontSize:'2.5em'}} >
                Trovärdighet hos Google
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              Anledningen att du ska synas på alla dessa plattformar med din <br></br>
              företagsinformation är för att de har hög <br></br>
              trovärdighet hos Google.<br></br>
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              För varje trovärdig plattform som du syns på med korrekt <br></br>
              och konsekvent information så tjänar du som företag en<br></br> 
              ”röst” i Googles ögon. För varje plattform som du syns på <br></br>
              med felaktig information så kan det vara direkt skadligt <br></br> 
              mot ditt företag.<br></br> 
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              Google vill kunna känna sig säker på att informationen<br></br>
              som presenteras på er Google My Business-profil stämmer <br></br>
              med 100% säkerhet. Detta gör i sin tur att Google väljer<br></br>
              att visa upp ert företag högre upp i sökresultatet när en <br></br>
              sökning på er typ av tjänst eller produkt görs.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="video"
                src="https://cda.actlocal.se/assets/googlesafety.png"
                autoPlay
                loop
                muted
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* More Sections */}
      <Box py={8} sx={{backgroundColor:'#dadcd7', color:'black'}}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <CardMedia
                component="video"
                src="https://cda.actlocal.se/assets/UB-29047-5.png"
                autoPlay
                loop
                muted
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom  sx={{fontWeight:'bold', fontSize:'2.5em'}}>
                Hantera ert företag från ett inlogg
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              Vi vill göra det enkelt för dig som företagare att hålla koll på era<br></br>
               företagsuppgifter. Att synas med korrekt och konsekvent<br></br>
                information är något som både dina kunder och Google älskar. <br></br>
                Win-Win!<br></br>
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              Med Act+ kan du hantera alla företagsuppgifter i realtid från en <br></br>
              och samma plattform. Har ni speciella öppettider under <br></br>
              midsommar eller jul? Ändra på ett ställe. Har ni en nyhet att  <br></br>
              kommunicera ut på alla plattformar? Posta på ett ställe. Har ni <br></br>
              fått ett omdöme på någon av era profiler? Besvara på ett ställe.<br></br>
              </Typography>
            </Grid>
            </Grid>
        </Container>
      </Box>



           {/* More Sections */}
           <Box py={8} sx={{backgroundColor:'#dadcd7', color:'black'}}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <CardMedia
                component="video"
                src="https://cda.actlocal.se/assets/UB-29047-5.png"
                autoPlay
                loop
                muted
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom  sx={{fontWeight:'bold', fontSize:'2.5em'}}>
              Posta inlägg i digitala <br></br>
              ekosystemet
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
               Från vår plattform så har du även möjlighet att posta både<br></br>
               nyheter/erbjudanden och inlägg på alla kopplade plattformar.<br></br>
               Du kan te.x. posta ett inlägg om att ni har en ny produkt<br></br>
               i sortimentet på Facebook, Google, Cylex, Brownbook, WhereTo,<br></br>
               Find Open och Navmii,med ett enda knapptryck. Detta gör det <br></br>
               tydligt för både era kunder och <br></br>
               Googla att uppfatta budskapet och hjälpa till att sprida det!<br></br>
              </Typography>
              <Typography variant="body1" paragraph sx={{  fontSize:'1.0em' , width:'900px' }}>
              Har ni ett tillfälligt erbjudande? Stick ut ur mängden mot dina<br></br>
              konkurrenter genom att posta det direkt synligt på er Google<br></br>
              My Business-profil i sökresultatet! Det är inte bara viktigt <br></br>
              att synas högt upp.på Google, det är också viktigt att när er<br></br>
               kund ser just er profil, så ska den se bra och säljande ut!<br></br>
              </Typography>
            </Grid>
            </Grid>
        </Container>
      </Box>



      {/* Partners Section */}
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
                  color="primary"
                  size="large"
                  sx={{ borderRadius: "20px" }}
                >
                  Skicka
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>

<Footer/>
    </main>
    </>
  );
};

export default Act;