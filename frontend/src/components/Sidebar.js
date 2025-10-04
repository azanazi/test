import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#1976d2", color: "white", height: "100vh" }}>
      <List>
        <ListItem button component={Link} to="/students">
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/teachers">
          <ListItemText primary="Teachers" />
        </ListItem>
        <ListItem button component={Link} to="/subjects">
          <ListItemText primary="Subjects" />
        </ListItem>
        <ListItem button component={Link} to="/classes">
          <ListItemText primary="Classes" />
        </ListItem>
        <ListItem button component={Link} to="/payments">
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button component={Link} to="/payroll">
          <ListItemText primary="Payroll" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
