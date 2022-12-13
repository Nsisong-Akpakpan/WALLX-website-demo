import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import MenuIcon from "@mui/icons-material/Menu";
import PixIcon from '@mui/icons-material/Pix';
import {FaTimes} from "react-icons/fa";
// const pages = ["Home", "About", "Service", "Pricing", "Contact"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openServicesMenuItems, setOpenServicesMenuItems] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        
        <List sx={{width:400, background:"grey"}}>
        <IconButton  sx={{ml:40, background:"white"}} onClick={() => setOpenDrawer(false)}>
          <FaTimes style={{ width: "24px", height: "24px" }} />
        </IconButton>
        {/* <FaTimes /> */}
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="Home"></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="About"></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem divider>
            <ListItemButton onClick={()=>setOpenServicesMenuItems(true)}>
              <ListItemText primary="Services"></ListItemText>
              <ListItemIcon sx={{fontSize:"20px"}}>{openServicesMenuItems ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
              
            </ListItemButton>
          </ListItem>
          <Collapse in={openServicesMenuItems}>
            <List component="div" disablePadding sx={{background:"white"}}>
              <ListItem divider>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setOpenServicesMenuItems(false)}>
                  <ListItemIcon>
                    <ListItemText primary="Printing"></ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem divider>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setOpenServicesMenuItems(false)}>
                  <ListItemIcon>
                    <ListItemText primary="Buying"></ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem divider>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setOpenServicesMenuItems(false)}>
                  <ListItemIcon>
                    <ListItemText primary="Selling"></ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="Pricing"></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="Contact"></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          
          
          {/* {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <PixIcon size="50px" color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
