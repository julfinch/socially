import React from "react";
import { List, ListItem, Button, Typography, Box, Paper, styled } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoFileIcon from '@mui/icons-material/VideoFile';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '33vh',
  color: theme.palette.text.secondary,
}));

const Groups = () => {
  return (
    <>
      <Item>
        
        <List aria-label="shared media" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '95%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }}>
            Media
          </Typography>
          <Typography color="primary" sx={{ fontSize: '0.8rem', textDecoration:'underline',}}>
            See all
          </Typography>
        </Box>
          <ListItem disablePadding sx={{margin: '-11px'}}>
            <ListItem>
              
              <DescriptionIcon fontSize={'small'} sx={{ marginLeft: '-6px'}}/>
             
              <Box ml={1}>
              <Typography sx={{ fontSize: '0.8rem',   }}>
                NoliMeTangere.pdf
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-11px'}}>
            <ListItem>
             
              <AudiotrackIcon fontSize={'small'} sx={{ marginLeft: '-6px'}}/>
              
              <Box ml={1}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                RebellionPodcast.zip
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-11px'}}>
            <ListItem>
             
              <PhotoIcon fontSize={'small'} sx={{ marginLeft: '-6px'}}/>
              
              <Box ml={1}>
              <Typography sx={{ fontSize: '0.8rem',  }}>
                Josephine.png
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', }}>
                1.8 Mb
              </Typography>
              </Box>
            </ListItem>
          </ListItem>
          <ListItem disablePadding sx={{margin: '-11px'}}>
            <ListItem>
              
              <VideoFileIcon fontSize={'small'} sx={{ marginLeft: '-6px'}}/>
              
              <Box ml={1}>
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
