import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
  Paper,
} from "@mui/material";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import React from "react";
import apolinario from "../images/apolinario.jpg";
import segunda from "../images/segunda.jpg";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  color: theme.palette.text.secondary,
}));

const Stat = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#24273B' : '#fff',
  color: theme.palette.text.secondary,
  height: '10vh',
}));

const Convo = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#24273B' : '#fff',
  color: theme.palette.text.secondary,
}));

const Conversations = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
}));

const Rightbar = () => {
  return (
    <Item flex={1.6} sx={{width: 300, padding: 2, display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '-10px' }}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="online friends"
            src={avatar1}
          />
          <Avatar
            alt="online friends"
            src={avatar2}
          />
          <Avatar
            alt="online friends"
            src={avatar3}
          />
          <Avatar alt="Agnes Walker" src={apolinario} />
          <Avatar
            alt="online friends"
            src={avatar4}
          />
          <Avatar
            alt="online friends"
            src={avatar5}
          />
          <Avatar
            alt="online friends"
            src={avatar5}
          />
          <Avatar
            alt="online friends"
            src={avatar5}
          />
          <Avatar
            alt="online friends"
            src={avatar5}
          />
        </AvatarGroup>
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }} mt={1} >
          Weekly Stats
        </Typography>

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
            <Box gridColumn="span 6">
                <Stat sx={{ display: 'grid'}}>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <IconButton aria-label="message me" color="primary" size="small" sx= {{textAlign: 'right', border: '1px solid #1760a5', borderRadius: '50px'}}>
                        <FavoriteTwoToneIcon fontSize="small"/>
                      </IconButton>
                      <Box>
                      <Typography fontWeight="bold">
                        761,124
                      </Typography>
                      <Typography fontSize="0.7rem">
                        Weekly Likes
                      </Typography>
                      </Box>
                  </Stack>
                </Stat>
            </Box>
            <Box gridColumn="span 6">
              <Stat sx={{ display: 'grid'}}>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <IconButton aria-label="message me" color="primary" size="small" sx= {{textAlign: 'right', border: '1px solid #1760a5', borderRadius: '50px'}}>
                        <SmsTwoToneIcon fontSize="small"/>
                      </IconButton>
                      <Box>
                      <Typography fontWeight="bold">
                        12,232
                      </Typography>
                      <Typography fontSize="0.7rem">
                        Comments
                      </Typography>
                      </Box>
                  </Stack>
              </Stat>
            </Box>
            <Box gridColumn="span 6">
              <Stat sx={{ display: 'grid'}}>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <IconButton aria-label="message me" color="primary" size="small" sx= {{textAlign: 'right', border: '1px solid #1760a5', borderRadius: '50px'}}>
                        <AccountCircleTwoToneIcon fontSize="small"/>
                      </IconButton>
                      <Box>
                      <Typography fontWeight="bold">
                        2,000
                      </Typography>
                      <Typography fontSize="0.7rem">
                        New Followers
                      </Typography>
                      </Box>
                  </Stack>
              </Stat>
            </Box>
            <Box gridColumn="span 6">
              <Stat sx={{ display: 'grid'}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <IconButton aria-label="message me" color="primary" size="small" sx={{textAlign: 'right', border: '1px solid #1760a5', borderRadius: '50px'}}>
                        <VisibilityTwoToneIcon fontSize="small"/>
                      </IconButton>
                      <Box>
                      <Typography fontWeight="bold">
                        14M+
                      </Typography>
                      <Typography fontSize="0.7rem">
                        Live Views 
                      </Typography>
                      </Box>
                  </Stack>
              </Stat>
            </Box>
        </Box>

        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', }} mt={1}>
          Latest Conversations
        </Typography>

        <Convo sx={{ borderRadius: '10px',width: '100%', maxWidth: 360, marginTop: '-1px' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Segunda Katigbak" src={segunda} />
        </ListItemAvatar>
        <ListItemText
          primary="Ikaw lang ang nag-iisang babaeng mahal ko…pramis 💖❤😘"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Segunda, Leonor Valenzuela, Leonor Rivera, Consuelo, O-Sei San, Gertrude, Nelly, Suzanne and Josephine
              </Typography>
              {" — Weh?🤪...See More"}
            </>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" sx={{listStyleType: 'none'}}/>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Apolinario Mabini" src={apolinario} />
        </ListItemAvatar>
        <ListItemText 
          primary="Bruv, galing mo mag-breakdance kagabi 😮👏"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Apolinario Mabini
              </Typography>
              {" — Uhhmm...sure ka ako yun? 😵🤷‍♂️"}
            </>
          }
        />
      </ListItem>
    </Convo>
      </Box>
    </Item>
  );
};

export default Rightbar;
