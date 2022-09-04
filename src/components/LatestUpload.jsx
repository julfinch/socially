import React from "react";
import { List, ListItem, ListItemIcon, Typography, Box, Paper, styled, ImageList, ImageListItem } from "@mui/material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';

import image1 from "../images/latest_1.jpg";
import image2 from "../images/latest_2.jpg";
import image3 from "../images/latest_3.jpg";
import image4 from "../images/latest_4.jpg";
import image5 from "../images/latest_5.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  height: '25vh',
  color: theme.palette.text.secondary,
}));

const LatestUpload = () => {
  return (
    <>
      <Item>
        <Box pl={2} pt={2} pr={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            Latest Upload
          </Typography>
        </Box>
        <ImageList cols={5} rowHeight={90} gap={5} sx={{paddingTop: 2, paddingBottom: 1, paddingLeft: 0.7,paddingRight: 0.7, }}>
          <ImageListItem>
            <img
              src={image1}
              alt="latest upload 1"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image2}
              alt="latest upload 2"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image3}
              alt="latest upload 3"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image4}
              alt="latest upload 4"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image5}
              alt="latest upload 5"
            />
          </ImageListItem>
        </ImageList>
      </Item>    
    </>
  );
};

export default LatestUpload;
