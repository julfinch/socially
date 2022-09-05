import React from "react";
import { List, ListItem, ListItemIcon, Button, Typography, Box, Paper, styled } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import image1 from "../images/latest_1.jpg";

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
      <Item flex={1}>
        <Box pl={1} pr={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            Shared Media
          </Typography>
          <Button>
          <Typography sx={{ fontSize: '0.8rem', textDecoration:'underline',}}>
            See all
          </Typography>
          </Button>
        </Box>
        <List aria-label="shared media">
          <ListItem disablePadding sx={{margin: '-7px'}}>
            <ListItem>
              
              <DescriptionIcon fontSize={'small'}/>
             
              <Box ml={2}>
              <Typography sx={{ fontSize: '0.8rem',   }}>
                Noli_mi_Tangere.pdf
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-7px'}}>
            <ListItem>
             
              <AudiotrackIcon fontSize={'small'}/>
              
              <Box ml={2}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                Rebellion_Podcast.zip
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-7px'}}>
            <ListItem>
             
              <PhotoIcon fontSize={'small'}/>
              
              <Box ml={2}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                Josephine_Bracken.png
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-7px'}}>
            <ListItem>
              
              <VideoFileIcon fontSize={'small'}/>
              
              <Box ml={2}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                Fencing.mp4
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
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
