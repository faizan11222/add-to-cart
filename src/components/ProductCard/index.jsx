import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/system";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/Cart/";

const CustomCard = styled(Card)({
  maxWidth: 345,
  flex: "0 1 100%",
  margin: "10px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});
const CartActionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
  flexDirection: "column",
});

export default function ProductCard({ item }) {
  const { thumbnail, title, description, price } = item;
  const dispatch = useDispatch();
  return (
    <CustomCard data-testid="product-card" >
      <CardActionArea>
        <CardMedia component="img" height="240" image={thumbnail} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          $ {price}
        </Typography>
          <Button
            onClick={() => dispatch(addToCart({ ...item }))}
            endIcon={<AddShoppingCartIcon />}
            size="small"
            color="primary"
          >
            add to cart
          </Button>
      </CardActions>
    </CustomCard>
  );
}
