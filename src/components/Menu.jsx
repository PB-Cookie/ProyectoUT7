import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FeedIcon from '@mui/icons-material/Feed';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function Menu() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);



  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* HOME */}
        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
          <ListItem key={"Inicio"} disablePadding>
            <Tooltip title='Ir a Home'>
              <ListItemButton>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary={"Inicio"} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </Link>


        {/* AYUDA */}
        <Link to='/manual.pdf' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
          <ListItem key={"Ayuda"} disablePadding>
            <Tooltip title='Ir a Ayuda'>
              <ListItemButton>
                <ListItemIcon><HelpIcon /></ListItemIcon>
                <ListItemText primary={"Ayuda"} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </Link>

        <Divider />

      </List>
    </Box>
  );

  return (
    <Box sx={{ width: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <Tooltip title='Abrir menú'>
              <MenuIcon />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
