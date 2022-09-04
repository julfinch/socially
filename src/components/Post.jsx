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
  Paper,
  styled
} from "@mui/material";
import profile from "../images/profile_photo.jpg";
import post from "../images/latest_4.jpg";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#151728' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));

const Post = () => {
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
        subheader="November 14, 1891"
      />
      <CardMedia
        component="img"
        height="20%"
        image={post}
        alt="Paella dish"
      />
      <CardContent  sx={{marginBottom: '-20px'}}>
        <Typography variant="body2" color="text.secondary">
          Tokyo is so advanced they already have cars during my time. Before the Japanese even dared to expand Imperial Japan in the greater East region of Asia, this Filipino has already infiltrated the country to seek for love. Of course, this is all but a dream unless I time-travelled to it.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{paddingBottom: '-30px'}}>
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

export default Post;
