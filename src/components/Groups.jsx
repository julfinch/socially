import React from "react";
import { List, ListItem, ListItemIcon, Divider, Typography, Box, Paper, styled } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import image1 from "../images/kkk.jpg";
import image2 from "../images/liga.jpg";
import image3 from "../images/tinola.jpg";
import image4 from "../images/dmc.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '33vh',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  objectFit: 'stretch',
  width: '30px',
  height: '30px',
});

const Groups = () => {
  return (
    <>
      <Item>
        <Box pl={1} pr={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            Groups
          </Typography>
          <MoreHorizOutlinedIcon/>
        </Box>
        <List aria-label="about me" >
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <Img src={image1} alt="Katipunan101" />
              </ListItemIcon>
              <Box sx={{margin: '-9px'}}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                Katipunan101
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
              10, 400 Members
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <Divider component="li" />
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <Img src={image2} alt="La Liga Filipina" />
              </ListItemIcon>
              <Box sx={{margin: '-9px'}}>
              <Typography sx={{ fontSize: '0.8rem', }}>
                La Liga Filipina
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
              124 Members
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <Divider component="li" />
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <Img src={image3} alt="Tinola Connoisseurs" />
              </ListItemIcon>
              <Box sx={{margin: '-9px'}}>
              <Typography sx={{ fontSize: '0.8rem', }}>
                Tinola Connoisseurs
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                200, 500 Members
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <Divider component="li" />
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <Img src={image4} alt="DMCI Condo Owners" />
              </ListItemIcon>
              <Box sx={{margin: '-9px'}}>
              <Typography sx={{ fontSize: '0.8rem', }}>
                DMCI Condo Owners
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                500 Members
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
        </List>
      </Item>    
    </>
  );
};

export default Groups;
