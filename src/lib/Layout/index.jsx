import React, { useCallback, useState } from "react";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = useCallback((open) => {
    setOpen(open);
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e) => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={(e) => toggleDrawer(false)}>
        <p>Hell there</p>
      </Drawer>
      {children}
    </div>
  );
};

export default Layout;
