import React from "react";
import { List, ListItem, ListItemIcon, Typography, Box, Paper, styled } from "@mui/material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '25vh',
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <>
      <Item flex={1}>
        
        <List aria-label="about me" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '95%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            About Me
          </Typography>
          <MoreHorizOutlinedIcon/>
        </Box>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <BusinessCenterOutlinedIcon fontSize={'small'} sx={{ marginLeft: '-15px'}} />
              </ListItemIcon>
              <Typography margin={-5} sx={{ fontSize: '0.8rem',  }}>
                Nationalist
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <HomeOutlinedIcon fontSize={'small'} sx={{ marginLeft: '-15px'}}/>
              </ListItemIcon>
              <Typography margin={-5} sx={{ fontSize: '0.8rem', }}>
                Manila
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <SportsBasketballOutlinedIcon fontSize={'small'} sx={{ marginLeft: '-15px'}}/>
              </ListItemIcon>
              <Typography margin={-5} sx={{ fontSize: '0.8rem', }}>
                Loves Women
              </Typography>
            </ListItem>
          </ListItem>
        </List>
      </Item>    
    </>
  );
};

export default About;
