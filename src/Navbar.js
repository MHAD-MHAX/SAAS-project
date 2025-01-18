import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import Logo from "./Images/LOGO3.jpeg"
import Profile from "./Images/Profile.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Services', link: '/services' },
    { text: 'Clients', link: '/clients' },
    { text: 'Articles', link: '/articles' },
    { text: 'Careers', link: '/careers' },
    { text: 'About Us', link: '/about' },
    { text: 'Contact Us', link: '/contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar position="fixed" color="primary" sx={{ zIndex: 1300 }}>
        <Toolbar>
          {/* Hamburger Menu Icon for Mobile */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>

          {/* Navbar Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div >
            <img src={Logo} className='bar-logo'/>
            <span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate al icon al icon-user theme--dark"></i></span>
            <img src={Profile} className="narvaro"/>
            </div>
            
          </Typography>

          {/* Desktop Menu Items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.link}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginLeft: '20px',
                }}
              >
                {item.text}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <IconButton sx={{ float: 'right', margin: '10px' }} onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
