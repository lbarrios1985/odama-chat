import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ReactComponent as ChevronIcon } from "../chevron_left.svg";
import { ReactComponent as SidebarIcon } from "../sidebar.svg";
import { ReactComponent as SettingsIcon } from "../settings.svg";
import "../App.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={2}>
      <AppBar position="static">
        <Toolbar sx={{ color: "#F97316", backgroundColor: "#F97316" }}>
          <Button
            variant="outlined"
            startIcon={<ChevronIcon />}
            sx={{ color: "white" }}
          >
            Atras
          </Button>
          <Button
            variant="outlined"
            startIcon={<SidebarIcon />}
            sx={{ ml: 2 }}
          />
          <div style={{ flexGrow: 1 }} />
          <Button variant="outlined" startIcon={<SettingsIcon />} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
