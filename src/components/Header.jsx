import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
 
import { BiSolidHomeHeart } from "react-icons/bi";
import { GrServicePlay } from "react-icons/gr";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

const navItems = [
  { href: "#home", label: "Home" ,icon:<BiSolidHomeHeart/>},
  { href: "#aboutus", label: "About",icon:<HiUserGroup/> },
  { href: "#services", label: "Services",icon:<GrServicePlay/> },
  { href: "#gallery", label: "Gallery",icon:<HiOutlinePhotograph/> },
  { href: "#contact", label: "Contact",icon:<BiSolidContact/> },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
     
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{    

           background: "linear-gradient(261.49deg , rgb(232, 147, 197), rgb(224, 47, 117) )",
          // backgroundColor: "#E893C5",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          transition: "all 0.3s ease",
          height:100,
          justifyItems:"center",
          flexDirection:"column",
          justifyContent:"center",
          display:"flex"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{display:"flex",flexDirection:"row" ,justifyContent:"center",alignItems:"center"}}>

          <img src="/ess.png" alt=" PrincessCelestia"   width={180} />
          <Typography variant="h5" color="white" fontWeight="bold" m="2px">
           
          </Typography>
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setIsOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={3}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    color: " white",
                    textDecoration: "none",
                    position: "relative",
                    fontWeight:"bold",
                    fontSize:20,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { backgroundColor: " ", color: "#fff",transform:"revert"},
        }}
      >
        <Box width="250px">
          <IconButton
            onClick={() => setIsOpen(false)}
            sx={{ ml: "auto", color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.href}
                component="a"
                href={item.href}
                
                onClick={() => setIsOpen(false)}
              >
              <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} style={{color:'rgb(43, 21, 24)'}} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
