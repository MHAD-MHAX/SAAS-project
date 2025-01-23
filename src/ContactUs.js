import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

import Navbar from './Navbar';

import Footer from './Footer';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';

import Image from "./Images/Image2.jpg"

// Define the URLs explicitly
const heroImageUrl = "https://cda.actlocal.se/assets/Depositphotos_106262598_l-2015.jpg";
const contactImageUrl =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const HeroImage = styled('div')(({ theme }) => ({
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '650px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(4),
}));


const ContactForm = styled('form')(({ theme }) => ({
  background: '#EDF5FF',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
}));

const ContactUs = () => {
  return (
    <>
<Navbar/>

      <main>
      <HeroImage
  sx={{
    display: 'flex', // Enable flexbox for alignment
    justifyContent: 'flex-start', // Align content to the left
    alignItems: 'center', // Center vertically
    position: 'relative', // Make HeroImage the positioning reference
  }}
>
  <Container
    sx={{
      // Align text inside the container to the left
      MaxWidth: '300px', // Restrict the container width
      marginLeft: '0px', // Add some space from the left edge of the image
       // Optional: background for readability
      padding: '20px', // Add padding for better spacing
      borderRadius: '8px', // Optional: rounded corners
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ textAlign:'center', paddingBottom:'30px', fontWeight:'bold'}}>
      Boka ett möte med oss
    </Typography>
    <Typography variant="body1" paragraph>
      Vi vet att det kan bli mycket information på en gång när man läser runt på sidan.<br></br>
      Allting är alltid enkelt när man vet precis hur man ska göra. Därför brukar vi<br></br>
      rekommendera att vi tar ett webbmöte eller fysiskt möte där vi kan berätta mer<br></br>
      om hur det fungerar och varje kund och case är alltid unikt.<br></br>
    </Typography>
    <Typography variant="body1" paragraph>
      Vi använder oss av Pipedrive som är vårt bokningssystem där du har möjlighet<br></br>
      att boka in ett webbmöte med en av våra specialister. Klicka in nedan och boka<br></br>
      upp en tid som passar dig bäst.
    </Typography>
  </Container>
</HeroImage>

<Box sx={{ background: '#EDF5FF', padding: 4 }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h3" gutterBottom sx={{ color: 'black' }}>
          Kontakta oss
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black' }}>
          Vi finns här när du behöver oss. Vi bjuder gärna in dig på en kopp kaffe på
          vårt kontor, eller kommer ut till ert företag för att få en bättre bild av
          vilka ni är och vad ni gör.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black' }}>
          Vi har våra kontor i Helsingborg och Stockholm men har kunder ifrån Ystad
          till Luleå i dagsläget och tar annars gärna ett telefonsamtal eller webbmöte
          där vi kan göra en behovsanalys tillsammans och se hur ni hade kunnat haft
          nytta av våra tjänster.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black' }}>
          För oss är ingen kund för liten eller för stor, vi hjälper dig som ensam
          företagare men även er som stor koncern.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            backgroundImage: `url(${contactImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            paddingBottom: '66.67%',
          }}
        />
      </Grid>
    </Grid>
  </Container>
</Box>

<Box sx={{ background: '#EDF5FF', padding: 4 }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
          Fler frågor om vår tjänst?
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black' }}>
          Känner du att du har fler frågor om våra tjänster? Låt en av våra experter
          förklara det över ett telefonsamtal. Fyll i formuläret till höger med dina
          kontaktuppgifter så kontaktar en av våra experter er så snart vi har
          möjlighet.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'black' }}>
          Det går självklart även bra att ringa in till oss direkt, du når oss då på
          010 - 173 40 10. Föredrar du att maila direkt så gör du det enklast på
          hello@actlocal.se.
        </Typography>
        <br></br>
        <br></br>

        <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
          Våra kontor
        </Typography>
        <Box sx={{ background: '#FFF', padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ color: 'black' }}>Helsingborg</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>010 - 173 40 10</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>hello@actlocal.se</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>
            Kullagatan 30, 254 66 Helsingborg
          </Typography>
        </Box>
        <Box sx={{ background: '#FFF', padding: 2 }}>
          <Typography variant="h6" sx={{ color: 'black' }}>Stockholm</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>010 - 173 40 10</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>hello@actlocal.se</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>
            Strandvägen 7A, 114 51 Stockholm
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm method="post" action="/thanks">
          <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
            Skriv till oss!
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'black' }}>
            Skicka iväg en förfrågan till oss så återkommer vi så fort vi kan.
          </Typography>
          <TextField
            required
            fullWidth
            label="Namn"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="E-postadress"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Telefon"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Webbplats"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Meddelande"
            multiline
            rows={5}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            
            fullWidth
            sx={{ marginTop: 2, backgroundColor:'black', color:'white' }}
          >
            Skicka
          </Button>
        </ContactForm>
      </Grid>
    </Grid>
  </Container>
</Box>
<Footer/>
      </main>
    </>
  );
};

export default ContactUs;