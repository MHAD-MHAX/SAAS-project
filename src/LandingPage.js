import React from 'react';
import { Box, Button, Typography, Grid, IconButton, Container, Paper, List, ListItem, ListItemText, ListItemAvatar,Avatar, } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckIcon from '@mui/icons-material/Check';

import ContactForm from './ContactForm';
import Image from "./Images/Image2.jpg";

import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
   <Navbar/>
    <div sx={{
        backgroundColor:'#fafafa'
    }}>
      <main>
      <Box
      sx={{
        position: "relative",
        height: "1000px",
         backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        <Grid container alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} sm={5} md={6}>
            <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
              <span style={{ fontSize: "1.5rem", fontWeight:'bold' }}>SEO-optimerad</span>
              <br />
              <span style={{ fontSize: "3.5rem", fontWeight:'bold' }}> Landingssajt</span>
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mt: 5, maxWidth: "450px",color:'white' }}>
              Fördelar med landingssajter
            </Typography>
            <List sx={{ mt: 2 }}>
              {[
                "Hemsida med igenkänningsfaktor",
                "Mätbar marknadsföring",
                "Toppa sökresultaten",
              ].map((text, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: "rgb(57, 201, 23)",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "white" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={7} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                bgcolor: "white",
                color: "black",
                borderRadius: "8px",
                mt: { xs: 4, sm: 0 },
              }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
                Varför en landningssajt?
              </Typography>
              <Typography paragraph>
                Har du kört fast med din befintliga hemsida eller vill nå topplaceringarna på Google i ett hårt
                konkurrensutsatt område eller nisch? Då kan en SEO-optimerad landningssajt vara det som behövs.
              </Typography>
              <Typography paragraph>
                Kortfattat beskrivet så är en landningssajt en extern och egen hemsida som vi sätter upp med fokus på
                en enda sak, att ranka så högt upp som möjligt på Google på ett specifikt sökord. Därefter vill vi
                självklart att besökarna ska konvertera till ett köp när de väl surfar in på sajten men där är vi inne
                på nästa steg!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>


    
    <div style={{ background: 'white', position: 'relative', paddingBottom: '85px' }}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          {/* First Row */}
          <Grid item xs={12} sm={6} md={6}>
            <div style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  paddingBottom: '72.7672%',
                  backgroundImage: 'url(https://actlocal.se/_nuxt/img/landingpage-icon-first.8d81ace.svg)',
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  height: '0',
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" gutterBottom>
              Varför rankar en<br />
              landningssajt så bra?
            </Typography>
            <Typography variant="body1" gutterBottom sx={{color:"black"}}>
              Anledningen att detta faktiskt funkar har att göra med att vi skapar en hel hemsida som är så nischad
              och specifik som det bara går att bli för just den sökningen som personen gör som du vill fånga upp. Det
              gör att Google anser att sidan är superrelevant för just den specifika sökningen.
            </Typography>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={3} style={{ marginTop: '40px', color:'black', backgroundColor:'white' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
              Ett exempel är att du arbetar inom städ och då ägnar dig åt tjänster som te.x.
            </Typography>
            <List>
              <ListItem>Flyttstädning</ListItem>
              <ListItem>Hemstädning</ListItem>
              <ListItem>Kontorsstädning</ListItem>
              <ListItem>Grovstädning</ListItem>
            </List>
            <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
              Med dessa tjänster så är du aktiv i te.x.
            </Typography>
            <List>
              <ListItem>Helsingborg</ListItem>
              <ListItem>Malmö</ListItem>
              <ListItem>Lund</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
              Vad en landningssida då kan ge dig
            </Typography>
            <Typography variant="body1" gutterBottom>
              Det som vi då har berättat för Google med våran hemsida är att vi vill ranka på och anses vara relevanta
              på alla dessa sökort, kombinerad med de orter som du är verksam i. Vilket gör att vi ”späder ut” kraften
              på din sajt och du blir ”lite relevant” för många områden.
            </Typography><br></br>
            <br></br>
            <br></br>
        
            <Typography variant="body1" gutterBottom>
              Har vi då istället en sida som heter exempelvis ”www.flyttstädningihelsingborg.se” där vi enbart pratar
              om och optimerar för just tjänsten ”flyttstädning” i just specifikt Helsingborg så har vi berättat för
              Google att söker någon efter flyttstädning i Helsingborg så är vi superrelevanta för den sökningen. Det
              i sin tur är det som gör att externa landningssajter fungerar så pass bra som de gör.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Section: Fördelarna med landningssajt */}
      <section style={{color:'black' }}>
        <Typography variant="h2" align="center" gutterBottom style={{ marginTop: '40px', }}>
          Fördelarna med landningssajt
        </Typography>
        <Container>
          <Grid container spacing={3} style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Hemsida med igenkänningsfaktor
              </Typography>
              <Typography variant="body1" gutterBottom>
              Vi lägger givetvis fokus på att branda hemsidan med er företagslogotyp och era färgkoder, allt för att
                få en så stark igenkänningsfaktor som möjligt med er befintliga hemsida.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vi skräddarsyr även hemsidan till den grad att det inte påverkar vårt fungerande koncept för maximal
                konvertering. De flesta kunder brukar känna sig trygga med att vi gör en så pass bra lösning som
                möjligt och vi har trots allt samma mål, att driva fler leads till ert företag.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Hyr en färdig sajt idag, Få fler kunder imorgon!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Våra kära SEO-experter arbetar ständigt för att proaktivt bygga upp ännu fler landningssajter på
                nischade branscher och orter då det tar tid att ranka högt upp på Google med en helt ny sajt. Ibland
                får vi även hemsidor som blir lediga och då har du möjlighet att hyra en sajt som redan rankar bra på
                Google och kan därmed få in nya kunder redan dagen efter.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Mätbar marknadsföring
              </Typography>
              <Typography variant="body1" gutterBottom>
                Det fina med digital marknadsföring och SEO är att allt är mätbart, google ser allt och vi ser även
                till att tracka allt. Vi och du kommer att ha full koll på bl.a.:
              </Typography>
              <List>
                <ListItem>Hur många besökare vi får</ListItem>
                <ListItem>Vad de gör på sajten</ListItem>
                <ListItem>Hur många nya leads som sajten genererat</ListItem>
              </List>
              <Typography variant="body1">
                Detta genom ett unikt koncept för leadsuppföljning som vi arbetar med på Act Local.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Vill du också toppa sötresultaten?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Vill du också toppa sökresultatet på Google inom just din bransch och nisch? På just din specifika
                ort?
              </Typography>
              <Typography variant="body1">
                Hör av dig till oss för en kostnadsfri offert där vi tillsammans ser över marknaden och vad som går
                att göra för just dig och ditt företag!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>

    <section style={{ paddingTop: '40px', backgroundColor:'white', color:'grey' }}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          {/* First Row */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Besökare online till <br /> kunder offline
            </Typography>
            <Typography variant="body1" gutterBottom sx={{fontSize:'1.1em'}}> 
              <b>När vi väl drivit in kunden</b> till din sajt så handlar det om att få kunden att göra det som vi vill
              att kunden ska göra, i exemplet ovan handlar det om att få ett telefonsamtal eller en offertförfrågan. Du
              vill trots allt att besökaren online ska bli till en kund offline. Landningssajter som ranka bra men inte
              ger några kunder eller leads bidrar trots allt inte med något värde. Här kommer våra specialister på
              konverteringsoptimering in i bilden.
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom sx={{fontSize:'1.1em'}}>
              De har under lång tid testat allt ifrån att ändra färg på en knapp till att lägga telefonnumret på sajten
              på olika platser, allt för att hitta det koncept som funkar bäst, för att konvertera mest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '0',
                paddingBottom: '100%',
                width: '85%',
                backgroundImage: 'url(https://actlocal.se/_nuxt/img/handshake.e482de4.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                marginLeft: 'auto',
              }}
            />
          </Grid>
        </Grid>

        {/* Second Section Title */}
        <Typography variant="h2" align="center" gutterBottom style={{ marginTop: '40px', marginBottom: '40px' }}>
          Fokus på vad som fungerar på Google
        </Typography>

        {/* Second Row */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom sx={{fontSize:'1.3em'}}>
              Våra medarbetare har många års erfarenhet av SEO och arbetar dagligen med att ranka våra kunders hemsidor
              högre upp i sökresultatet. Vi har genom åren åkt på många nitar och många uppdateringar i Google’s
              sökalgoritm som jämt och ständigt uppdateras för att förbättra resultatet för sökanvändaren.
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom sx={{fontSize:'1.3em'}}>
              Efter dessa år så har vi också lärt oss vad Google tycker om, vad som får Google att älska våran hemsida
              och ranka oss högre upp på det sökord som vi arbetar mot.
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom sx={{fontSize:'1.3em'}}>
              Här är det en mängd olika rankingfaktorer som bestämmer vad som gör att man rankar högre upp på Google.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Några av de är te.x.
            </Typography>
            <ul>
              <li>Sidtitel</li>
              <li>H1-tagg</li>
              <li>Hastighet på din hemsida</li>
              <li>Mobilanpassad</li>
            </ul>
            <Typography variant="body1" gutterBottom>
              Ja, listan kan göras väldigt lång och ingen har det exakta facit mer än Google själva.
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom>
              Webbutvecklaren och SEO-specialisten hamnar ofta i klinch med varandra då utvecklaren önskar göra det
              snyggt och grafiskt säljande, medan SEO-specialisten vill åt enkelheten, inga tunga plugins eller stora
              bilder/filmer som ska laddas.
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="body1" gutterBottom>
            Även här har vi jobbat fram ett mycket väl beprövat koncept som vi vet fungerar och vi har möjlighet att
              hjälpa dig som kund i de allra tuffaste branscherna, även i vår kära huvudstad Stockholm där företagen
              slåss om kundernas uppmärksamhet på Google.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
 
    


  
  <ContactForm/>
  <Footer/>
      </main>
    </div>
    </>
  );
};

export default LandingPage;                