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
            <Typography variant="h5" component="h2" sx={{ mt: 5, maxWidth: "450px", }}>
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


    
        <Box sx={{ backgroundColor: 'rgb(237, 245, 255)', paddingBottom: '85px', color:'black',}}>
          <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
          <Grid item xs={12} sm={6}>
              <img
                src="https://actlocal.se/_nuxt/img/landingpage-icon-first.8d81ace.svg"
                alt="Landing Page Image"
                style={{ maxHeight: '100%', width: '100%' }}
                loading="lazy"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h2" gutterBottom sx={{
                paddingTop:'90px'
              }}>
              Varför rankar en<br></br>
              landningssajt så bra?
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '16px' }}>
              Anledningen att detta faktiskt funkar har att göra med att vi <br></br>
              <br></br>
              skapar en hel hemsida som är så nischad och specifik som det bara <br></br>
              <br></br>
              går att bli för just den sökningen som personen gör som du vill <br></br>
              <br></br>
              fånga upp. Det gör att Google anser att sidan är superrelevant för just den specifika sökningen.<br></br>
              </Typography>
            </Grid>
      
          </Grid>
        </Box>

  

        <Box sx={{ backgroundColor: '#fafafa', paddingBottom: '50px', color:'black', paddingLeft:'30px' }}>
          <Grid container spacing={2} justifyContent="center" sx={{ padding: '20px' }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{
                fontWeight:'bold'
              }}>
                Ett exempel är att du arbetar inom städ och då ägnar dig åt tjänster<br></br> 
                som te.x.
              </Typography>
              <ul>
                <li>Flyttstädning</li>
                <li>Hemstädning</li>
                <li>Kontorsstädning</li>
                <li>Grovstädning</li>
              </ul>
              <Typography variant="h6" gutterBottom sx={{
                fontWeight:'bold'
              }}>
                Med dessa tjänster så är du aktiv i te.x.
              </Typography>
              <ul>
                <li>Helsingborg</li>
                <li>Malmö</li>
                <li>Lund</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{
                fontWeight:'bold'
              }}>
                Vad en landningssida då kan ge dig
              </Typography>
              <Typography variant="body1">
                Det som vi då har berättat för Google med våran hemsida är att vi vill<br></br>
                 ranka på och anses vara relevanta på alla dessa sökord, kombinerat<br></br>
                  med de orter som du är verksam i. Vilket gör att vi ”späder ut” kraften på<br></br> 
                  din sajt och du blir ”lite relevant” för många områden.<br></br>
              </Typography><br></br>
              <Typography variant="body1">
                Har vi då istället en sida som heter exempelvis<br></br>
                 "www.flyttstädningihelsingborg.se" där vi enbart pratar om och optimerar <br></br>
                 för just tjänsten "flyttstädning" i just specifikt Helsingborg så har vi <br></br>
                 berättat för Google att söker någon efter flyttstädning i Helsingborg så är <br></br>
                 vi superrelevanta för den sökningen. Det i sin tur är det som gör att <br></br>
                 externa landningssajter fungerar så pass bra som de gör.<br></br>
              </Typography>
            </Grid>
          </Grid>
        </Box>

 
             

        <section>
            <Box sx={{
                backgroundColor:'white'
            }}>
      <Typography align="center" variant="h4" gutterBottom sx={{ marginTop: '0px', marginBottom: '40px', fontWeight:'bold', color:'black' }}>
        Fördelarna med landningssajt
      </Typography>
      <Container sx={{ paddingBottom: 0, backgroundColor: '#fafafa' }}>
        {/* One Paper Card wrapping all columns */}
        <Paper elevation={3} sx={{ padding: '40px', backgroundColor: '#fafafa' }}>
          <Grid container spacing={3}>
            {/* First column */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px', fontWeight:'bold', }}>
                Hemsida med igenkänningsfaktor
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                Vi lägger givetvis fokus på att branda hemsidan med er företagslogotyp och era färgkoder, allt för att
                få en så stark igenkänningsfaktor som möjligt med er befintliga hemsida.
              </Typography>
              <Typography variant="body1">
                Vi skräddarsyr även hemsidan till den grad att det inte påverkar vårt fungerande koncept för maximal
                konvertering. De flesta kunder brukar känna sig trygga med att vi gör en så pass bra lösning som
                möjligt och vi har trots allt samma mål, att driva fler leads till ert företag.
              </Typography>
            </Grid>

            {/* Second column */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' , fontWeight:'bold',}}>
                Hyr en färdig sajt idag, Få fler kunder imorgon!
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                Våra kära SEO-experter arbetar ständigt för att proaktivt bygga upp
                ännu fler landningssajter på nischade branscher och orter då det tar
                tid att ranka högt upp på Google med en helt ny sajt. Ibland får vi
                även hemsidor som blir lediga och då har du möjlighet att hyra en
                sajt som redan rankar bra på Google och kan därmed få in nya
                kunder redan dagen efter. När en sajt blir ledig så går vi alltid
                igenom vår existerande kundstock för att se över intresset, innan vi
                annars erbjuder de till helt nya kunder.
              </Typography>
            </Grid>

            {/* Third column */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' , fontWeight:'bold', }}>
                Mätbar marknadsföring
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                Det fina med digital marknadsföring och SEO är att allt är mätbart, google ser allt och vi ser även
                till att tracka allt. Vi och du kommer att ha full koll på bl.a.:
              </Typography>
              <Box component="ul" sx={{ marginBottom: '20px', listStyleType: 'none', paddingLeft: 0 }}>
                <li> - Hur många besökare vi får</li>
                <li> - Vad de gör på sajten</li>
                <li> - Hur många nya leads som sajten genererat</li>
              </Box>
              <Typography variant="body1">
                Detta genom ett unikt koncept för leadsuppföljning som vi arbetar med på Act Local.
              </Typography>
            </Grid>

            {/* Fourth column */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' , fontWeight:'bold', }}>
                Vill du också toppa sökresultaten?
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                Vill du också toppa sökresultatet på Google inom just din bransch och nisch? På just din specifika
                ort?
              </Typography>
              <Typography variant="body1">
              Hör av dig till oss för en kostnadsfri offert där vi tillsammans ser över marknaden och vad som går
                att göra för just dig och ditt företag!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      </Box>
    </section>

    <Box sx={{ paddingTop: '80px', backgroundColor:'white', color:'black' , paddingLeft:'30px' }}>
      {/* First section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h2" sx={{ marginBottom: '20px', fontSize: '2.5rem', fontWeight:'bold' }}>
              Besökare online till <br /> kunder offline
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              <strong>När vi väl drivit in kunden</strong> till din sajt så handlar det om att få kunden<br></br>
              att göra det som vi vill att kunden ska göra, i exemplet ovan handlar det<br></br>
              om att få ett telefonsamtal eller enoffertförfrågan. Du vill trots allt att <br></br>
              besökaren online ska bli till en kund offline. Landningssajter som <br></br>
              rankar bra men inte ger några kunder eller leads bidrar trots allt inte med <br></br>
              något värde Här kommer våra specialister på konverteringsoptimering in i bilden.<br></br>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              De har under lång tid testat allt ifrån att ändra färg på en knapp till att lägga telefonnumret på sajten
              på olika platser, allt för att hitta det koncept som funkar bäst, för att konvertera mest.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              marginRight:'150px',
              width: '400px',
              height: '500px',
              backgroundImage: 'url("https://actlocal.se/_nuxt/img/handshake.e482de4.svg")',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          />
        </Grid>
      </Grid>

      {/* Second section */}
      <Typography variant="h2" align="center" sx={{ marginTop: '50px', marginBottom: '20px', fontSize: '2.5rem', fontWeight:'bold' }}>
        Fokus på vad som fungerar på Google
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="body1" sx={{ marginBottom: '20px',marginTop: '10px', }}>
              Våra medarbetare har många års erfarenhet av SEO och arbetar<br></br>
              dagligen med att ranka våra kunders hemsidor högre upp i sökresultatet. <br></br>
              Vi har genom åren åkt på många nitar och många uppdateringar i <br></br>
              Google’s sökalgoritm som jämt och ständigt uppdateras för att förbättra<br></br>
               resultatet för sökanvändaren.<br></br>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Efter dessa år så har vi också lärt oss vad Google tycker om, vad som<br></br>
              får Google att älska våran hemsida och ranka oss högre upp på det <br></br>
              sökord som vi arbetar mot.<br></br>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Här är det en mängd olika rankingfaktorer som bestämmer vad som gör <br></br>
              att man rankar högre upp på Google.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Några av de är te.x.
          </Typography>

          
          <Typography variant="body1" sx={{ fontWeight:'bold' }}>
          .Sidtitel. H1-tagg. Hastighet på din hemsida . Hastighet på din hemsida 
          </Typography>
          
          
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Ja, listan kan göras väldigt lång och ingen har det exakta facit mer än <br></br>
            Google själva.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Webbutvecklaren och SEO-specialisten hamnar ofta i klinch med <br></br>
            varandra då utvecklaren önskar göra det snyggtoch grafiskt säljande.<br></br>
            Medan SEO-specialisten vill åt enkelheten, inga tunga plugins eller stora<br></br>
            bilder/filmer som ska laddas.
          </Typography>
          <Typography variant="body1" sx={{marginBottom:'50px'}}> 
          Även här har vi jobbat fram ett mycket väl beprövat koncept som vi vet<br></br>
          fungerar och vi har möjlighet att hjälpa dig som kund i de allra tuffaste<br></br>
          branscherna, även i vår kära huvudstad Stockholm där företagen slåss om<br></br>
          kundernas uppmärksamhet på Google.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  
  <ContactForm/>
  <Footer/>
      </main>
    </div>
    </>
  );
};

export default LandingPage;                