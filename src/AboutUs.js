import React from 'react';
import { Button, Container, Typography, Box, IconButton, AppBar, Toolbar, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import UserIcon from '@mui/icons-material/AccountCircle';
import VideoPlayer from 'react-player'; // Optional, for embedding video

import Vid from "./Images/Vid.mp4";

import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor:'#fafafa'}}>

        <main >
{/* Video Section with Text on Top */}
       <Box
          sx={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
            <source
              src={Vid}
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

      {/* Text Overlay */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'black',
        zIndex: 10, // Ensures the text appears on top of the video
      }}>
        <Typography variant="h4" sx={{ color: 'white' }}>
          Specialister inom SEO
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
          Resan startade i vår vackra huvudstad Stockholm, därefter har vi öppnat kontor i Helsingborg (som numera blivit vårt huvudkontor) och även satellitkontor i Göteborg och Norrköping.
        </Typography>
        <br></br>
        <Button variant="contained" sx={{ borderRadius: '30px', backgroundColor: 'black' }}>
        Vår personal
      </Button>
      </Box>
    </Box>

   

          <Container>

          {/* Company Info */}
          <Box sx={{
  mb: 0,
  color: 'black',
  display: 'flex',
  flexDirection: 'column', // Stack content vertically
  paddingLeft:'20px',
  justifyContent: 'center', // Center content vertically (if needed)
  textAlign:'left',
  paddingTop:'30px'
 
}}>
  <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2.0em', textAlign:'left'}}>
    Startade i Stockholm
  </Typography>
  <Typography variant="body1" sx={{ mb: 3, textAlign:'left' }}>
    Act Local grundades hösten 2017 och vi tog in vår första kund januari 2018.<br />
    Sedan dess så har det hänt mycket, fler kunder, fler anställda och nya<br />
    kontor. Bolaget grundades med en klar vision, att bli Sveriges ledande <br />
    SEO-byrå inom lokal sökmotoroptimering. Det som gör oss unika är vår<br />
    högt prisade tjänst Act+ som hjälpt lokala företagen att i snitt öka antalet<br />
    telefonsamtal inom 6 månader via Google med hela 82%!<br />
    <br /><br />
    Resan startade i vår vackra huvudstad Stockholm, därefter har vi öppnat <br />
    upp kontor i Helsingborg (som numera blivit vårt huvudkontor) och även så <br />
    kallade satellitkontor i Göteborg och Norrköping.
  </Typography>

  <Typography variant="h5" sx={{ mb: 3, fontSize: '2.0em', fontWeight: 'bold',  textAlign:'left' }}>
    Kompetent personal
  </Typography>
  <Typography variant="body1" sx={{ mb: 3 , textAlign:'left' }}>
    Vi har alltid strävat efter att utföra varje rekrytering med stor omsorg. <br />
    Vi har under åren lärt oss att duktiga SEO-specialister inte växer på träd. <br />
    Detta har i korta perioder lett så långt att vi fått tacka nej till nya kunder.<br />
    Vilket självklart inte är roligt! Dock har vi alltid haft det klara mindsetet att oavsett <br />
    hur stora vi blir så ska vi aldrig tappa det personliga och genuina i vår<br />
    kontakt med våra kunder.<br /><br />
    Vi har också alltid varit noga med att varje medarbetare verkligen ska trivas<br />
    på sin arbetsplats och med sin arbetsuppgift. För vi vet att det är det lilla<br />
    extra som gör den faktiska stora skillnaden. Har man kul på jobbet och gör<br />
    det man tycker är roligt så kommer det att avspegla slutgiltiga resultatet.<br /><br />
    Vi arbetar ständigt med att vidareutbilda och vidareutveckla våra <br />
    medarbetare och alla med en vision att klättra inom bolaget ska få den <br />
    möjligheten, vi tror att med rätt vilja och inställning så är allt möjligt.<br />
  </Typography>

  <Typography variant="h5" sx={{ mb: 3, fontSize: '2.0em', fontWeight: 'bold',  textAlign:'left' }}>
  Egen kontaktperson
  </Typography>
  <Typography variant="body1" sx={{ mb: 3 , textAlign:'left' }}>
  Som kund hos oss så blir du alltid tilldelad en egen kontaktperson när vi inleder ett samarbete. <br></br>
  Detta för att vi själva vet hur jobbigt det är att återberätta saker och att det tar tid att lära känna <br></br>
  varje unik kund och deras vision. Att arbeta med SEO och för att lyckas långsiktigt så krävs en<br></br>
   löpande dialog, vi har alltid kvartalsuppföljningar där vi tillsammans avrundar det kvartal som varit <br></br>
   och ser om det finns något som vi kan göra för att optimera det kommande kvartalet.<br></br>
  </Typography>

  <Typography variant="h5" sx={{ mb: 3, fontSize: '2.0em', fontWeight: 'bold',  textAlign:'left' }}>
  Komplett SEO-byrå
  </Typography>
  <Typography variant="body1" sx={{ mb: 3 , textAlign:'left' }}>
  Vi erbjuder våra kunder en komplett lösning där vi ska kunna tillgodose hela behovet när det gäller <br></br>
  digital marknadsföring, dock vet vi om att vi inte kan vara bäst på allt, även om vi självklart hade<br></br>
  önskat det. Vi har ett flertal branschkollegor som vi gärna hänvisar till i unika fall där det krävs en <br></br>
  mer ingående spetskompetens, för vi vet att det för dig som kund är näst intill omöjligt att ”välja  <br></br>
  rätt” aktör genom att bara läsa på en hemsida.
  </Typography>  
</Box>
        </Container>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default AboutUs;