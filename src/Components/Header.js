import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

import { useHistory } from 'react-router';
import Sidebar from './Sidebar';
import FirstPage from './Body/FirstPage';
function Header() {
     const history = useHistory();
    const logOut=()=>{
        history.push("./react-crud/");
    }
    const addTodo=()=>{
      history.push("./react-crud/Todo")
    }
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

          >
            <Sidebar/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <sup>My</sup> <AutoStoriesOutlinedIcon /> <sup>App</sup>
          </Typography>
          <Button onClick={addTodo} color="inherit">Todo</Button>
          <Button onClick={logOut} color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <FirstPage/>
    </>
    )

}

export default Header
