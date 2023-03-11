import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../redux/slices/Products";

const ProductsWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "20px 10px",
});

const Home = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <PageWrapper>
      <Typography variant="h4">Products List:</Typography>
      <ProductsWrapper>
        {data?.map((d) => (
          <ProductCard key={d.id} item={d} />
        ))}
      </ProductsWrapper>
    </PageWrapper>
  );
};

export default Home;
