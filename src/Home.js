import React from 'react';
import { Box, Typography, Button } from '@mui/material'; // Ensure you have Material-UI installed
import Vid from './Images/Vid.mp4'; // Update this path to your video file


import InfoSection from "./InfoSection";
import GoogleSection from "./GoogleSection";

import Navbar from './Navbar';

import CustomerFocusSection from "./CustomerFocus";
import DigitalEcosystem from "./Digital";
import CustomerReviews from "./CustomerReviews";
import ContactForm from "./ContactForm";

import SEO from './SEO';
import Footer from "./Footer";
import Act from './Act';
import Barber from "./Barber";

import Scan from './Scan';

import OurJourney from "./OurJourney";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box
      sx={{
        paddingTop: '64px',
        paddingBottom: 'px',
      }}
    >
      {/* Video Header */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
          <source src={Vid} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Content */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'left',
            color: 'white',
            maxWidth: '90%',
            zIndex: 2,
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: '16px', fontWeight: 'bold', fontSize: '3rem' }}>
            Närvaro online<br />
            för resultat offline
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '32px', fontWeight: 'bold', fontSize: '1rem' }}>
            Vi hjälper både dig som lokalt företag som E-handlare att synas bättre på Google och driva fler kunder varje månad till er verksamhet.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              variant="contained"
              color=""
              sx={{
                margin: '0 8px',
                width: '200px',
                borderRadius: '50px',
                padding: '10px 20px',
                backgroundColor: 'black',
                color:'white'
              }}
              href="/skanna"
            >
              Skanna Företag
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: '0 8px',
                width: '200px',
                borderRadius: '50px',
                padding: '10px 20px',
                backgroundColor: 'white',
                color: 'black',
              }}
              href="https://actlocalab2.pipedrive.com/scheduler/0R3LAqu4/actlocal-onboarding"
              target="_blank"
            >
              Boka webdemo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <InfoSection/>
      <DigitalEcosystem />
      
      <CustomerFocusSection />
      <GoogleSection />
      <CustomerReviews />
      <OurJourney/>
      <ContactForm />
      <Footer />
    </>
    
  );
};

export default Home;