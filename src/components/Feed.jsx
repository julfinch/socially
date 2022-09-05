import { Box, Stack, Skeleton, Paper, styled, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import AlbumPost from "./AlbumPost";
import Header from "./Header";
import About from "./About";
import LatestUpload from "./LatestUpload";
import Groups from "./Groups";
import SharedMedia from "./SharedMedia";

import event from "../images/event.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Events = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '33vh',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '25vh',
});


const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
              <Header/>
            </Box>
            <Box sx={{gridColumn: {xs: 'span 12', md: 'span 4'}}}>
              <About/>
            </Box>
            <Box sx={{gridColumn: {xs: 'span 12', md: 'span 8'}}}>
              <LatestUpload />
            </Box>
            <Box sx={{gridColumn: {xs: 'span 12', md: 'span 4'}}}>
              <Events>
              <Grid container direction="column">
                  <Grid item>
                    <Img src={event} alt="upcoming event" />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: {md: '0.8rem',lg:'1rem'}, fontWeight: 'bold', }}>Upcoming: Rebellion Party</Typography>
                    <Typography sx={{ fontSize: '0.8rem', }}>March 2, 1892 11:00PM</Typography>
                  </Grid>
                </Grid>
              </Events>
            </Box>
            <Box sx={{gridColumn: {xs: 'span 12', md: 'span 4'}}}>
              <Groups/>
            </Box>
            <Box sx={{gridColumn: {xs: 'span 12', md: 'span 4'}}}>
              <SharedMedia/>
            </Box>
            <Box gridColumn="span 12">
              <AlbumPost />
            </Box>
            <Box gridColumn="span 12">
              <Post />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Feed;
