import React, { useState } from "react";
import { Grid, Paper, styled, Stack, Tabs, Tab, Avatar, Box, Typography, IconButton, Button } from "@mui/material";
import header from "../images/header_1.png";
import profile from "../images/profile_photo.jpg";
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const Img = styled('img')({
  objectFit: 'stretch',
  width: '100%',
  height: '35vh',
});

const Head = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  height: '43vh',
  color: theme.palette.text.secondary,
}));

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
              <Head>
                <Grid container direction="column">
                  <Grid item sx={{ position: 'relative', '& .MuiTypography-root': {padding: 0}}}>
                    <Img src={header} alt="header" />
                    <Avatar
                      alt="Jose Rizal"
                      src={profile}
                      sx={{ width: {xs: 130,md: 130,lg: 170}, height: {xs: 130,md: 130,lg: 170}, position: 'absolute', top: {xs: 80,sm: 80, md: 130, lg: 95}, left: {md: 5, lg:20}, border: '3px solid #151728' }}
                    />
                    <Typography sx={{fontSize: '1.3rem', position: 'absolute', top: {xs: 205, md: 205, lg: 160}, left:  {xs: 160,sm: 210, md: 150, lg: 225}, color: '#fff', fontWeight: 'bold',}}>
                      Dr. José Rizal
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{position: 'absolute', top: {xs: 236, md: 236, lg:190}, left:  {xs: 160,sm: 210, md: 150, lg: 225}}}>
                      <Typography sx={{fontSize: '0.9rem', color: '#fff',}}>
                        @j_riz1861
                      </Typography>
                      <VerifiedTwoToneIcon fontSize="small" color="primary" />
                    </Stack>
                    <Stack direction="column" spacing={1} sx={{ position: 'absolute', top: 10, right: 10}}>
                      <IconButton aria-label="add person"  size="small" sx={{ textAlign: 'right', border: '1px solid #fff', borderRadius: '50px'}}>
                        <PersonAddAlt1OutlinedIcon fontSize="small" sx={{color: '#fff'}}/>
                      </IconButton>
                      <IconButton aria-label="message me" color="primary" size="small" sx={{ textAlign: 'right', border: '1px solid #fff', borderRadius: '50px'}}>
                        <ChatBubbleOutlineOutlinedIcon fontSize="small" sx={{color: '#fff'}} />
                      </IconButton>
                    </Stack>
                    <Stack direction="column" sx={{ position: 'absolute', bottom: 20, right: 10}}>
                      <Typography sx={{fontSize: '1.9rem', color: '#fff'}}>
                        4,038
                      </Typography>
                      <Typography sx={{textAlign: 'right', fontSize: '0.5rem', color: '#fff', paddingTop: '-10px'}}>
                        PROFILE VIEWS
                      </Typography>
                    </Stack>

                  </Grid>
                  <Grid item>
                    <Tabs value={value} onChange={handleChange} centered sx={{textTransform: 'lowercase', height: {md: '55px', lg: '10px'},}}>
                      <Tab label="About" value="1"/>
                      <Tab label="Timeline" value="2"/>
                      <Tab label="Friends" />
                      <Tab label="Photos" />
                    </Tabs>
                  </Grid>
                </Grid>
              </Head>      
    </>
  );
};

export default Header;
