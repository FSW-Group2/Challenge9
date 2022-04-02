import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import male from "../images/male.png";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isData, setisData] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const { data } = await axios.get(
        "http://localhost:7001/api/v1/auth/whoami",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const fetchdata = data;
      setisData(fetchdata);
    };
    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        sx={{ borderBottom: 1, borderColor: "white" }}
      >
        <Toolbar>
          <Typography variant="h8" component="div" sx={{ mr: 10 }}>
            <h5>Squid Game</h5>
          </Typography>
          <Typography
            variant="h8"
            component="div"
            sx={{
              display: "flex",
              gap: 2,
              cursor: "pointer",
              mx: "auto",
            }}
          >
            <LinkNavbar to={"/"}>
              <h5>Games</h5>
            </LinkNavbar>
            <LinkNavbar to={"/"}>
              <h5>Leaderboard</h5>
            </LinkNavbar>
            <LinkNavbar to={"/listplayer"}>
              <h5>List Player</h5>
            </LinkNavbar>
          </Typography>

          {isData ? (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <h5>{isData.username}</h5>
                <Avatar alt="male" src={male} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar alt="male" src={male} /> Profile
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Typography
              variant="h8"
              component="div"
              sx={{ display: "flex", gap: 2, cursor: "pointer" }}
            >
              <LinkNavbar to={"/login"}>
                <h5>Login</h5>
              </LinkNavbar>
              <LinkNavbar to={"/register"}>
                <h5>Register</h5>
              </LinkNavbar>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LinkNavbar = styled(Link)`
  color: white;
  text-decoration: none;
  h5 {
    font-weight: 300;
  }
`;
