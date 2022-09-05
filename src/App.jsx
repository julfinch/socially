import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import bg from "./images/latest_1.jpg";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2B2847' : '#F3F5F5',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Item color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{paddingRight: {xs: '20px', md: '0px'}, paddingBottom: {xs: '20px', md: '0px'}}}>
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Item>
    </ThemeProvider>
  );
}

export default App;
