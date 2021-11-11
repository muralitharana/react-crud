import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import AndroidIcon from "@mui/icons-material/Android";
import AnimationIcon from "@mui/icons-material/Animation";
import ApiIcon from "@mui/icons-material/Api";
import AppleIcon from "@mui/icons-material/Apple";
import CloudIcon from "@mui/icons-material/Cloud";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";

import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const history = useHistory();
  const goToDevelopmentPage = (pageName) => {
    history.push(`/${pageName}`);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Frontend", "Backend", "Fullstack"].map((text, index) => (
          <ListItem button key={text} onClick={() => goToDevelopmentPage(text)}>
            <ListItemIcon>
              {index === 0 ? (
                <DesktopWindowsIcon />
              ) : index === 1 ? (
                <ApiIcon />
              ) : (
                <AnimationIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Desktop", "IOS", "Android"].map((text, index) => (
          <ListItem button key={text} onClick={() => goToDevelopmentPage(text)}>
            <ListItemIcon>
              {index === 0 ? (
                <DesktopWindowsIcon />
              ) : index === 1 ? (
                <AppleIcon />
              ) : (
                <AndroidIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Devops", "Cloud", "Network"].map((text, index) => (
          <ListItem button key={text} onClick={() => goToDevelopmentPage(text)}>
            <ListItemIcon>
              {index === 0 ? (
                <DeveloperModeIcon />
              ) : index === 1 ? (
                <CloudIcon />
              ) : (
                <NetworkCheckIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Sidebar;
