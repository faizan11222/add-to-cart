import { styled } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const PageWarpper = styled("div")(({ theme }) => ({
  marginTop: "64px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "56px",
  },
}));

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageWarpper>{children}</PageWarpper>
    </>
  );
};

export default MainLayout;
