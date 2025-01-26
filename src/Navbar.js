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
  Collapse,
} from '@mui/material';
import { Menu as MenuIcon, Phone, ExpandMore, ExpandLess } from '@mui/icons-material';

import Logo from "./Images/LOGO3.jpeg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // For drawer dropdown

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerMenuToggle = () => {
    setMenuOpen(!menuOpen);
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
            backgroundColor: 'white',
            color: 'white',
          },
        }}
        variant="temporary"
        anchor="left"
      >
        <List>
        <ListItem button onClick={handleDrawerMenuToggle}>
            <ListItemText style={{ color: 'black' }} primary="Tjänster" />
            {menuOpen ? <ExpandLess sx={{color:'black'}} /> : <ExpandMore sx={{color:'black'}}  />}
          </ListItem>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component="a" href="/act">
                <ListItemText style={{ textDecoration: 'none', color: 'grey' }} primary="BC+" />
              </ListItem>
              <ListItem button component="a" href="/scan">
                <ListItemText style={{ textDecoration: 'none', color: 'grey' }} primary="Synlighetsanalys" />
              </ListItem>
              <ListItem button component="a" href="/seo">
                <ListItemText style={{ textDecoration: 'none', color: 'grey' }} primary="SEO – Sökmotoroptimering" />
              </ListItem>
              <ListItem button component="a" href="/landing">
                <ListItemText style={{ textDecoration: 'none', color: 'grey' }} primary="Landningssidor" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component="a" href="/">
            <ListItemText style={{ textDecoration: 'none', color: 'black' }} primary="Hem" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemText style={{ textDecoration: 'none', color: 'black' }} primary="Om oss" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText style={{ textDecoration: 'none', color: 'black' }} primary="Kontakta oss" />
          </ListItem>

          {/* Tjänster Dropdown in Drawer */}

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
          backgroundColor: 'white',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '64px' }}>
          {/* Mobile menu button */}
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '36px' }} />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '100%',
            }}
          >
            <a href="/" aria-current="page">
              <img src={Logo} alt="Logo" width="40" />
            </a>
          </Box>

          {/* Desktop navigation links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '30px' }}>
            {/* Tjänster Dropdown */}
            <Button
              sx={{ color: 'black', textTransform: 'none' }}
              aria-controls="tjanster-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              endIcon={<ExpandMore />}
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
                width: '70%',
              }}
            >
              <Grid container spacing={2} sx={{ padding: 1 }}>
                <Grid item xs={6}>
                  <MenuItem onClick={handleMenuClose}>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="/act">
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          BC+
                        </Typography>
                        <Typography variant="body2">Nå dina lokala besökare på rätt sätt.</Typography>
                      </Box>
                    </a>
                  </MenuItem>
                </Grid>
                <Grid item xs={6}>
                  <MenuItem onClick={handleMenuClose}>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="/scan">
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          Synlighetsanalys
                        </Typography>
                        <Typography variant="body2">Kolla om du är synlig överallt på nätet.</Typography>
                      </Box>
                    </a>
                  </MenuItem>
                </Grid>
                <Grid item xs={6}>
                  <MenuItem onClick={handleMenuClose}>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="/seo">
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          SEO – Sökmotoroptimering
                        </Typography>
                        <Typography variant="body2">Vi hjälper ditt företag att toppa sökresultaten på Google.</Typography>
                      </Box>
                    </a>
                  </MenuItem>
                </Grid>
                <Grid item xs={6}>
                  <MenuItem onClick={handleMenuClose}>
                    <a style={{ textDecoration: 'none', color: 'inherit' }} href="/landing">
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          Landningssidor
                        </Typography>
                        <Typography variant="body2">Effektiva och konverteringsoptimerade landningssidor.</Typography>
                      </Box>
                    </a>
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

          {/* Contact button */}
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
        </Box>
      </Toolbar>
    </AppBar>
  </div>
);
};

export default Navbar;