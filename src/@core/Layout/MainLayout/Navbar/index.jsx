import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartWrapper = styled("div")({
  marginLeft: "auto",
  position: "relative",
});

const CartNumber = styled("div")({
  position: "absolute",
  backgroundColor: "blueviolet",
  height: "18px",
  fontSize: "14px",
  borderRadius: "25%",
  padding: "0 4px 1px 3px",
  bottom: "0px",
  right: "-8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { numberOfItems } = useSelector((state) => state.cart);
  return (
    <AppBar>
      <Toolbar>
        {location.pathname !== "/" && (
          <HomeIcon
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
            fontSize="large"
          />
        )}
        <CartWrapper>
          <ShoppingCartIcon
            onClick={() => navigate("/cart")}
            sx={{ cursor: "pointer" }}
            fontSize="large"
          />
          <CartNumber>{numberOfItems > 9 ? "9+" : numberOfItems}</CartNumber>
        </CartWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
