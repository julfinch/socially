import React from "react";
import { List, ListItem, ListItemIcon, Typography, Box, Paper, styled } from "@mui/material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  height: '25vh',
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <>
      <Item>
        <Box pl={2} pt={2} pr={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            About Me
          </Typography>
          <MoreHorizOutlinedIcon/>
        </Box>
        <List aria-label="about me" >
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <BusinessCenterOutlinedIcon fontSize={'small'}/>
              </ListItemIcon>
              <Typography margin={-3} sx={{ fontSize: '0.8rem',  }}>
                Nationalist, Writer, and Polymath
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <HomeOutlinedIcon fontSize={'small'}/>
              </ListItemIcon>
              <Typography margin={-3} sx={{ fontSize: '0.8rem', }}>
                Currently living in Manila
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <SportsBasketballOutlinedIcon fontSize={'small'}/>
              </ListItemIcon>
              <Typography margin={-3} sx={{ fontSize: '0.8rem', }}>
                Loves Fencing, Wrestling, Women
              </Typography>
            </ListItem>
          </ListItem>
        </List>
      </Item>    
    </>
  );
};

export default About;
