import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-edit">
      <Navbar

        alignLinks="left"
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "right",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem onClick={() => navigate("/")}>Home</NavItem>
        <NavItem onClick={() => navigate("topnews")}>Top News</NavItem>
        <NavItem onClick={() => navigate("contact")}>Contact</NavItem>
        <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
        <NavItem alignLinks="right" onClick={() => navigate("signin")}>Sign in</NavItem>

      </Navbar>
    </div>
  );
};
