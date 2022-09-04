import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
  styled,
  Paper,
} from "@mui/material";
import profile from "../images/profile_photo.jpg";
import image1 from "../images/neon_1.jpg";
import image2 from "../images/neon_2.jpg";
import image3 from "../images/neon_3.jpg";
import image4 from "../images/neon_4.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));

const AlbumPost = () => {
  return (
    <Item>
      <CardHeader
        avatar={
          <Avatar src={profile} aria-label="profile photo">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="José Protasio Rizal Mercado y Alonso Realonda"
        subheader="January 15, 1892"
      />
      <ImageList cols={2} row={1} rowHeight={260} gap={5}>
          <ImageListItem>
            <img
              src={image1}
              alt="neon party 1"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image2}
              alt="neon party 2"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image3}
              alt="neon party 3"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={image4}
              alt="neon party 4"
            />
          </ImageListItem>
        </ImageList>
      <CardContent sx={{marginBottom: '-20px'}}>
        <Typography variant="body2" color="text.secondary">
          Last night's set was a blast! People enjoyed the newest music that I mixed for almost 2 months before returning to Manila and formed La Liga Filipina. My ever supporting girlfriend...uhmmm...whoever she was of the 9 women linked to me...was also there to party. Thanking the heaven for the weather was cooperating too and people were all energetic as well. <Typography variant="span" fontWeight="bold">#LoverBoy #Manila #TinolangManok #DMCICondoPhotobomber</Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing  sx={{paddingBottom: '-30px'}}>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Item>
  );
};

export default AlbumPost;
