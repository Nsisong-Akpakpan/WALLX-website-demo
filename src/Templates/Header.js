import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Tab,
  Tabs,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import wallxDesktopLogo from "../pictureGalllery/wallxDesktopLogo.png";
import wallxPhoneLogo from "../pictureGalllery/wallxPhoneLogo.png";
import headerbackground from "../pictureGalllery/headerbackground.png"

// import wallxDesktopLogo from "../../src/pictureGalllery/wallxDesktopLogo.png"
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState();

  // This state determines the positioning of the menuitems
  const [anchorEl, setAnchorEl] = useState(null);
  // This determines if the MenuItem should be open or not
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  // To close the MenuItem
  const handleClose = () => {
    setAnchorEl(null);
  } 
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
      <AppBar sx={{background: `url(${headerbackground})`, height:"50vh"}}>
      <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"} }}>
        <Toolbar>
          {isMatch ? (
            <>
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <img src={wallxPhoneLogo} height={40} alt="" />
              <DrawerComp />
            </>
          ) : (
            <>
              <img src={wallxDesktopLogo} height={40} alt="" />
              {/* <wal?lxDesktopLogo/> */}
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <Tabs
                sx={{ marginLeft: "auto",  }}
                indicatorColor="secondary"
                // textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab sx={{color:"white", textTransform:"none"}} label="Home" />
                <Tab sx={{color:"white", textTransform:"none"}} label="About" />
                
                <Tab sx={{color:"white", textTransform:"none"}} label="Services"
                 aria-controls='basic-menu'
                 aria-haspopup='true' 
                 aria-expanded={openMenu ? 'true' : undefined}
                 onClick={handleClick}/>
                {/* Dropdown Items */}
                <Menu 
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Printing</MenuItem>
                  <MenuItem onClick={handleClose}>Buying</MenuItem>
                  <MenuItem onClick={handleClose}>Selling</MenuItem>
                </Menu>


                <Tab sx={{color:"white", textTransform:"none"}} label="Pricing" />
                <Tab sx={{color:"white", textTransform:"none"}} label="Contact" />
              </Tabs>
              <Button variant="text" sx={{ marginLeft: "auto", color:"white", textTransform:"none" }} >
                Login
              </Button>
              <Divider orientation="vertical" sx={{borderColor: "white", height:"55px"}}/>
              <Button sx={{ marginLeft: "10px", color:"#443792", textTransform:"none"  }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
