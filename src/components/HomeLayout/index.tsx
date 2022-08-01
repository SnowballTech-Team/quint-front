// eslint-disable-next-line simple-import-sort/imports
import "./style.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { t } from "@lingui/macro";
import Logo from "../../assets/images/Vector.png";
import LogoCoin from "../../assets/images/logo-3.png";
// import companyLogo from "../../assets/images/Frame.png";
import MenuClose from "../../assets/icons/nav-close.svg";
import Social from "../../components/Sidebar/Social";
// import logoUrl from "../../assets/images/bottom_logo.png";
import Wallet from "../TopBar/Wallet";
import Messages from "../Messages/Messages";
import MyNft from "../TopBar/MyNft";
import {
  AppBar,
  Container,
  useMediaQuery,
  Link,
  Typography,
  Toolbar,
  Box,
  // Menu,
  // MenuItem,
  Collapse,
  // Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import React, { useState } from "react";
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import Headroom from "headroom.js";
import { useWeb3Context } from "src/hooks/web3Context";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const location = useLocation();
  const isFoundation = location.pathname === "/foundation";
  const [zoomed, setZoomed] = useState(false);
  const { connected, provider, address, connect } = useWeb3Context();
  const [anchorElNav, setAnchorElNav] = useState(false);

  useEffect(() => {
    const header: HTMLElement = document.querySelector(".fixed-header") as HTMLElement;
    const headroom = new Headroom(header);
    headroom.init();
  }, []);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const links = [
    {
      name: t`Home`,
      href: "#/home",
    },
    // {
    //   name: t`undetermined`,
    //   href: "#/community",
    // },
    // {
    //   name: t`undetermined`,
    //   href: "#/zfuel",
    // },
    // {
    //   name: t`undetermined`,
    //   href: "#/community",
    // },
    // {
    //   name: t`undetermined`,
    //   href: "#/zfuel",
    // },
  ];

  return (
    <div className={`home ${isSmallScreen ? "isMobile" : ""} `}>
      <AppBar className="fixed-header">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap style={{ lineHeight: 1, paddingTop: "6px" }}>
              <img src={isFoundation ? LogoCoin : Logo} alt="Quint" className="header-logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links.map((link, index) => (
                <Link href={link.href} underline="none" key={index} onClick={handleCloseNavMenu}>
                  <Typography variant="h6">{link.name}</Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
              {anchorElNav ? (
                <Box onClick={handleCloseNavMenu}>
                  <img src={MenuClose} alt="Quint" className="menu-icon-close" />
                </Box>
              ) : (
                <Box className="right_con">
                  <MyNft />
                  <Wallet />
                  <MenuIcon aria-haspopup="true" onClick={handleOpenNavMenu} className="menu-icon"></MenuIcon>
                </Box>
              )}
            </Box>
            <Box sx={{ justifyContent: "flex-end", display: { xs: "none", md: "flex" } }} className="top_btnbox">
              <MyNft />
              <Wallet />
            </Box>
          </Toolbar>
          <Box sx={{ display: { xs: "block", md: "none" } }} className="list_box">
            <Collapse in={Boolean(anchorElNav)}>
              <Box>
                {links.map((link, index) => (
                  <Box key={index} onClick={handleCloseNavMenu} className="moblie-menu-item">
                    <Link underline="none" href={link.href}>
                      <Typography className="moblie-menu-text">{link.name}</Typography>
                    </Link>
                  </Box>
                ))}
                {connected ? null : (
                  <div className="wallet_top" onClick={handleCloseNavMenu}>
                    <Wallet />
                  </div>
                )}
              </Box>
            </Collapse>
          </Box>
        </Container>
      </AppBar>
      {children}
      <Messages />
      <div className="bottom">
        <Container
          style={{
            paddingTop: isSmallScreen || isVerySmallScreen ? "2rem" : "0",
            paddingBottom: isSmallScreen || isVerySmallScreen ? "2rem" : "0rem",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <div className="top_cont">
            <div className="left_first">
              <img src={isFoundation ? LogoCoin : Logo} alt="Quint" className="header-logo" />
            </div>
            {isSmallScreen || isVerySmallScreen ? (
              <Accordion className="foot_according">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>footer nav</Typography>
                </AccordionSummary>
                <AccordionDetails className="details_container">
                  <Box>
                    <div className="left_second">
                      <Link underline="none">About</Link>
                      <Link underline="none">Projects</Link>
                      <Link underline="none">What We Do</Link>
                      <Link underline="none">Press</Link>
                      <Link underline="none">Press</Link>
                    </div>
                    <div className="left_second">
                      <Link underline="none" className="concact">
                        contact
                      </Link>
                      <Link underline="none">Projects</Link>
                      <Link underline="none">What We Do</Link>
                      <Link underline="none">Press</Link>
                      <Link underline="none">Press</Link>
                    </div>
                    <div className="left_second last_left">
                      <Link underline="none" className="concact">
                        newsletter
                      </Link>
                      <Link underline="none" className="newsletter">
                        Subscribe our newsletter
                      </Link>
                      <div className="input_box">
                        <input type="text" placeholder="Enter your email" />
                        <p className="go_bg"></p>
                      </div>
                    </div>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Box style={{ width: "100%", display: "flex" }}>
                <div className="left_second">
                  <Link underline="none">About</Link>
                  <Link underline="none">Projects</Link>
                  <Link underline="none">What We Do</Link>
                  <Link underline="none">Press</Link>
                  <Link underline="none">Press</Link>
                </div>
                <div className="left_second">
                  <Link underline="none" className="concact">
                    contact
                  </Link>
                  <Link underline="none">Projects</Link>
                  <Link underline="none">What We Do</Link>
                  <Link underline="none">Press</Link>
                  <Link underline="none">Press</Link>
                </div>
                <div className="left_second last_left">
                  <Link underline="none" className="concact">
                    newsletter
                  </Link>
                  <Link underline="none" className="newsletter">
                    Subscribe our newsletter
                  </Link>
                  <div className="input_box">
                    <input type="text" placeholder="Enter your email" />
                    <p className="go_bg"></p>
                  </div>
                </div>
              </Box>
            )}
          </div>
          <div className="bottom_cont">
            <div className="left_text">Copyright © </div>
            <div className="right_con">
              <Social />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
