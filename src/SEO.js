import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

import Navbar from "./Navbar";

import Image from "./Images/Image2.jpg"

const SEO = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const steps = [
    {
      title: "SEO-analys",
      description:
        "Vi inleder alltid arbetet med att göra en grundlig SEO-analys på din webbplats och en komplett sökordsanalys där vi tar fram en lista på sökord som är intressanta att ranka på.",
    },
    {
      title: "Teknisk SEO-analys",
      description:
        "Vi gör en analys ur ett tekniskt perspektiv. Här kollar vi på hur snabbt din sida laddar, eventuella brutna länkar och 404-sidor.",
    },
    {
      title: "SEO-verktyg",
      description:
        "Här sätter vi upp konton för att kunna mäta arbetet som vi utför. Det är bland annat program för att kunna följa er utveckling i Google’s sökresultat, verktyg för att kunna mäta hur många besökare som kommer till din webbplats och var de kommer ifrån.",
    },
    {
      title: "Arbetsstrategi",
      description:
        "Vi lägger upp en tydlig strategi och går gemensamt igenom potentialen i arbetet som kommer att utföras och vad som kommer att göras inledningsvis.",
    },
    {
      title: "On page-optimering",
      description:
        "Här ser vi över sidans innehåll med meta titlar, meta beskrivningar, H1-taggar och ert befintliga content och skapar ofta upp landningssidor för specifika sökord.",
    },
    {
      title: "Off page-optimering",
      description:
        "Länkar är en av de enskilt starkaste rankingfaktorerna. Här jobbar vi med länkar till din sajt för att stärka ditt förtroende i Google’s ögon. Vi arbetar alltid med kvalité framför kvantitet, då det handlar om att få ”rätt typ av röster”.",
    },
    {
      title: "Summering & uppföljning",
      description:
        "Vi följer ständigt upp arbetat på månadsbasis och uppdaterar er löpande med vad som gjorts samt hur ni rört ert i sökresultatet på Google.",
    },
    {
      title: "Något mer du undrar?",
      description:
        "Vi berättar gärna mer ingående hur stegen går till och vad vi gör för att hjälpa er att ranka bättre. Ring oss på 010 - 173 40 10 eller maila oss på hello@actlocal.se.",
      highlight: true,
    },
  ];


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
    <Navbar/>
    <div>
    
      {/* Hero Section */}
      <Box
        sx={{
            backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "470px",
          paddingTop: "50px",
          color: "#fff",
          textAlign:'left',
           
        }}
      >
        <Container sx={{}}>
          <Typography variant="h4" style={{ fontWeight: "bold", marginTop: "86px", }}>
            Toppa sökresultatet <br /> på Google och få nya kunder!
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="h5" style={{ marginTop: "16px", maxWidth: "650px"}}>
            Vi hjälper både lokala företag och E-handlare att tjäna mer pengar
            varje månad med hjälp av Google. Bara i Sverige så googlas det i
            snitt 55 milj gånger per dag av 61% av Sveriges befolkning.
          </Typography>
        
        </Container>




      </Box>
      

<Box sx={{backgroundColor:'white'}}>
      {/* Services Section */}
      <Container >
        <Grid container spacing={4} style={{ marginTop: "0px", }}>
          {[
            {
              title: "Bilhandlare",
stat: "418%",
              description: "Ökad trafik efter 6 mån",
            },
            {
              title: "Restaurang",
              stat: "657%",
              description: "Fler telefonsamtal efter 6 mån",
            },
            {
              title: "E-handel",
              stat: "37%",
              description: "Ökad omsättning efter 6 mån",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                style={{ textAlign: "center", padding: "32px" }}
              >
                <Box
                  sx={{
                    background: "#EDF8FF",
                    color: "#0072BB",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    border: "1px solid #CBECFD",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  {item.title}
                </Box>
                <Typography variant="h2" style={{ marginTop: "16px" }}>
                  {item.stat}
                </Typography>
                <Typography variant="body1" style={{ marginTop: "8px" }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Container sx={{ color:'black'}}>
      <Grid container alignItems="center" spacing={4}>
        {/* Text Column */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" sx={{ mb: 5, fontSize: "2.5rem", fontWeight:'bold'}}>
            Öka företagets   <br></br>
            omsättning med Google!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 5, fontWeight: "400", lineHeight: 1.6 }}
          >
            Att synas i toppen på Google är något som de flesta verksamheter
            eftersträvar med sin hemsida. Att det är Google man använder när man
            söker efter en tjänst eller produkt man är på jakt efter är så
            självklart idag att man t.o.m. i folkmun börjat kalla ”att söka på
            internet” för att ”googla”.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Med sökmotoroptimering så fångar vi in kunden när den är som varmast,
            när kunden själv gjort ett aktivt val och sökt efter din typ av tjänst
            eller produkt. Det är p.g.a. detta som SEO är en oslagbar och enormt
            kostnadseffektiv marknadsföringskanal att arbeta med.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            Vi har lång erfarenhet i branschen och över 1000+ nöjda kunder som vi
            hjälpt med deras SEO.
          </Typography>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Box
            sx={{
              width: "80%",
              position: "relative",
              paddingBottom: "81.97%",
              backgroundImage: 'url("https://actlocal.se/_nuxt/img/seo-increase.e024f52.svg")',
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "0 auto",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
    </Box>

    <Box sx={{ backgroundColor: "#f9f9f9", padding: "40px 0", color:'black' }}>
      <Container>
        <Typography variant="h2" align="center" sx={{ mb: 5 }}>
          Hur vi lyckas med din SEO
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ maxWidth: 570, margin: "auto", fontWeight: 400, mb: 10 }}
        >
          Som ovan nämnt så är SEO ingen quickfix, utan något som vi arbetar med
          löpande. Vi delar upp arbetet i olika steg.
        </Typography>
        
        <Grid container spacing={4} sx={{mb:4}}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} key={index} >
              <Paper
                elevation={3}
                sx={{
                  padding: "24px",
                  borderRadius: "8px",
                  backgroundColor: step.highlight ? "black" : "#ffffff",
                  color: step.highlight ? "#ffffff" : "#000000",
                  height: "100%",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    mb: 2,
                    color: step.highlight ? "#ffffff" : "#0072BB",
                    fontWeight: "bold",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography variant="body1">{step.description}</Typography>
                
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>


    <Box component="section" sx={{ py: 5,backgroundColor:'white', color:'black'}}>
      <Container>
        <Grid container alignItems="center" spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6} sx={{ pt: { xs: 5, md: 0 } }}>
            <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold" }}>
              Vad är SEO?
            </Typography>
            <Typography variant="body1" paragraph>
              SEO är förkortningen på Search Engine Optimization och den mest vanligt förekommande svenska
              översättningen är sökmotoroptimering eller sökoptimering. Anledningen till att man arbetar med sin SEO
              är med syftet att klättra högre upp i det organiska sökresultatet på Google när någon söker efter din
              typ av vara eller tjänst.
            </Typography>
            <Typography variant="body1" paragraph>
              Det organiska sökresultatet är det resultat som många väljer att kalla för det ”ärliga” resultatet, det
              som inte går att köpa sig till i form av annonsering (Google Ads) utan måste ”förtjänas” genom att bygga
              upp en bra och informativ sajt med hög trovärdighet från Google.
            </Typography>
            <Typography variant="body1" paragraph>
              Anledningen till att man brukar kalla det för att man måste ”förtjäna sin placering” i det organiska
              sökresultatet har att göra med att det är något som tar sin tid, något som man måste arbeta med
              löpande för att bygga upp förtroendet med din sajt i Google’s ögon.
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <Box
              sx={{
                width: "80%",
                paddingBottom: "100%",
                backgroundImage: 'url("https://actlocal.se/_nuxt/img/seo.aa0d05b.svg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>



    <Box
      sx={{
        backgroundColor: "#f9f9f9", 
        color:'black',
        
        // Adjust this as per your styling
        py: 5,
      }}
    >
      <Container>
        {/* Heading Section */}
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 5, fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "bold" }}
        >
          Hur funkar sökmotoroptimering?
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 10,
            maxWidth: "570px",
            margin: "auto",
           
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          Man kan dela upp SEO i flera olika delar. Utan att gå in alldeles för
          djupt på varje punkt så kommer vi fördela SEO i de två enklast
          förklarade delarna.
        </Typography>

        <br></br>

        {/* Content Section */}
        <Grid container spacing={4}>
          {/* On Page Optimization */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                p: 5,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  color: "primary.main",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                On page-optimering
              </Typography>
              <Typography variant="body1" paragraph>
                Här handlar det om att arbeta med den specifika sajten. Här
                arbetar man bl.a. med sajtens content (texterna) på sidan,
                optimering av Titel-tagg (det som visas som rubrik i
                sökresultatet), meta-beskrivningen (det som visas under rubriken
                i sökresultatet), H1-tagg (huvudrubriker) etc.
              </Typography>
              <Typography variant="body1" paragraph>
                Något som blivit allt mer viktigare genom åren är att jobba med
                de tekniska bitarna på sajten. Det handlar till stor del om att
                optimera hastigheten/laddtiden på din sajt (hur snabbt din
                hemsida laddar) och se till att den är mobilanpassad, då mer än
                hälften av alla sökningar på Google idag görs via en mobil enhet.
              </Typography>
            </Box>
          </Grid>

          {/* Off Page Optimization */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                p: 5,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 5,
                  color: "primary.main",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                Off page-optimering
              </Typography>
              <Typography variant="body1" paragraph>
                Här handlar det om att arbeta med något som är en av de enskilt
                starkaste rankingfaktorerna, länkar.
              </Typography>
              <Typography variant="body1" paragraph>
                När du får en länk till din sida ifrån en annan hemsida så har du
                väldigt enkelt förklarat fått ”en röst” på din verksamhet. Förr i
                tiden så handlade det om kvantitet, att få så många ”röster” som
                möjligt. Idag handlar det snarare om att få en så stark röst som
                möjligt för bästa resultat.
              </Typography>
              <Typography variant="body1" paragraph>
              Faktum är att en ”dålig röst” ifrån en hemsida som är flaggad som
                spam faktiskt kan ha en direkt negativ inverkan på din SEO.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

<Box sx={{backgroundColor:'white', }}>
    <Container sx={{ mt: 0 ,  color:'black'}}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ mb: 5, fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold" }}
          >
            Varför behövs en SEO-byrå?
          </Typography>
          <Typography variant="body1" paragraph>
            Anledningen att man bör anlita en SEO-byrå har att göra med att SEO är ingen quickfix
            som gör och sedan är det klart. Det är något som man behöver arbeta med löpande. Google
            ändrar ständigt sina algoritmer i takt med att folk försöker hitta genvägar och trix att
            ranka högt upp så snabbt som möjligt.
          </Typography>
          <Typography variant="body1" paragraph>
            Vi arbetar på heltid med SEO och har anställda med 10+ års erfarenhet i branschen, vi
            har varit med sedan Altavista var sökmotorn som användes när man skulle söka på
            internet. Vi håller oss ständigt uppdaterade och utbildade på området med fokus på
            Google. Vi vet vad som funkar och hur även du kan nå toppen på sökresultatet.
          </Typography>

          {/* Image Section */}
          <Box
            sx={{
              mt: 10,
              textAlign: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('https://actlocal.se/_nuxt/img/seo.aa0d05b.svg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                paddingBottom: "100%",
                width: "100%",
              }}
            />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          {/* Card 1 */}
          <Box
            sx={{
              backgroundColor: "#edf5ff",
              borderRadius: 1,
              p: 5,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              mb: 5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 5,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Fokus på lönsamhet
            </Typography>
            <Typography variant="body1" paragraph>
              Vi föredrar att arbeta med fokus på lönsamhet. För oss handlar det inte bara om att
              driva fler besökare till din sajt, för oss handlar det om att driva rätt typ av
              besökare, potentiella kunder. Vi vill driva lönsamhet till din verksamhet, att
              SEO-arbetet ska ge kronor tillbaka på kontot, inte bara bättre placeringar på sökord
              med låg (eller nästintill obefintlig) sökvolym.
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box
            sx={{
              backgroundColor: "#edf5ff",
              borderRadius: 1,
              p: 5,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 5,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Vad kostar SEO?
            </Typography>
            <Typography variant="body1" paragraph>
              Varje case och varje kund är unik, det går därför inte att sätta upp ett fast pris
              eller ett färdigt SEO-paket som kommer att på ett magiskt sätt få er högst upp på
              Google. Det går att arbeta med SEO småskaligt och storskaligt. Allting handlar om
              vilket resultat som önskas uppnå och vad vi har för budget att röra oss med.
            </Typography>
            <Typography variant="body1" paragraph>
              I vissa fall så kan vi med väldigt små medel uppnå mycket goda resultat, om
              konkurrensen inte är supertuff. Talar vi däremot om att ranka på första sidan på te.x.
              ”Elektriker Stockholm” så har vi ett hårdare arbete som kommer att krävas både mer tid
              och fler länkar och därmed blir en dyrare kostnad.
            </Typography>
            <Typography variant="body1" paragraph>
              Det viktiga för oss är att det investerade kapitalet ska ge avkastning, vi ska inte
              bara ta placeringar på Google, vi ska också driva fler nya kunder till företaget.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>


<ContactForm/>
<Footer/>

    </div>
    </>
  );
};

export default SEO;