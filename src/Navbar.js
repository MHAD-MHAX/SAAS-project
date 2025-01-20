import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, Phone, Person, ExpandMore,} from '@mui/icons-material';


import Vid from "./Images/Vid.mp4";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Navigation Drawer (Mobile Menu) */}
      <Drawer
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: 350,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 350,
            backgroundColor: 'dark',
            color: 'white',
          },
        }}
        variant="temporary"
        anchor="left"
      >
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Hem" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemText primary="Om oss" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText primary="Kontakta oss" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Tjänster" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      {/* AppBar (Header) */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          height: '64px',
          top: 0,
          left: 0,
          right: 0,
          borderColor: 'white',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '64px' }}>
          {/* Mobile menu button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '36px' }} />
          </IconButton>

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" aria-current="page">
              <img
                src="https://cda.actlocal.se/assets/actlocal_blue.png"
                alt="Logo"
                width="40"
                className="none_scrolled_logo"
              />
            </a>
          </Box>

          {/* Desktop navigation links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {/* Tjänster Dropdown */}
            <Button
              sx={{ color: 'black', textTransform: 'none' }}
              aria-controls="tjanster-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              endIcon={<ExpandMore/>}
            >
              Tjänster
            </Button>
            <Menu
    id="tjanster-menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleMenuClose}
    MenuListProps={{
      sx: { padding: 0 },
    }}
    sx={{
      width:'70%', 
    }}
  >
    <Grid container spacing={2} sx={{ padding: 1 }}>
    <Grid item xs={6}>
  <MenuItem onClick={handleMenuClose}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}><a style={{ textDecoration:'none', color:'inherit'}} href="/act">Act+</a></Typography>
      <Typography variant="body2">Nå dina lokala besökare på rätt sätt.</Typography>
    </Box>
  </MenuItem>
</Grid>

<Grid item xs={6}>
        <MenuItem onClick={handleMenuClose}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}><a style={{ textDecoration:'none', color:'inherit'}} href="/scan">Synlighetsanalys</a></Typography>
          <Typography variant="body2">Kolla om du är synlig överallt på nätet.</Typography>
        </Box>
        </MenuItem>
      </Grid>
      <Grid item xs={6}>
        <MenuItem onClick={handleMenuClose}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>SEO – Sökmotoroptimering</Typography>
          <Typography variant="body2">Vi hjälper ditt företag att toppa sökresultaten på Google.</Typography>
        </Box>
        </MenuItem>
      </Grid>
   
      <Grid item xs={6}>
        <MenuItem onClick={handleMenuClose}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}><a style={{ textDecoration:'none', color:'inherit'}} href="/landing">Landningssidor</a></Typography>
          <Typography variant="body2">Effektiva och konverteringsoptimerade landningssidor.</Typography>
       </Box>
        </MenuItem>
      </Grid>
    </Grid>
  </Menu>


            <Button sx={{ color: 'black', textTransform: 'none' }} href="/about">
              Om oss
            </Button>
            <Button sx={{ color: 'black', textTransform: 'none' }} href="/contact">
              Kontakta oss
            </Button>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Contact and login buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              href="tel:010 173 40 10"
              sx={{
                color: 'black',
                textTransform: 'none',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Phone sx={{ fontSize: '16px', marginRight: '8px' }} />
              010 173 40 10
            </Button>
            <Button
              href="https://local.actlocal.se"
              sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                textTransform: 'none',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '16px',
              }}
            >
              <Person sx={{ fontSize: '16px', marginRight: '8px' }} />
              Logga in
            </Button>
          </Box>

          {/* Mobile login button */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, padding: 0 }}
            href="https://local.actlocal.se"
          >
            <Person sx={{ fontSize: '36px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      
    </div>
  );
};

export default Navbar;