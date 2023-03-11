import { Button, CardMedia, TableFooter, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "../../components/PageWrapper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { addToCart, decrement, removeFromCart } from "../../redux/slices/Cart";

const ProductsWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  padding: "20px 10px",
});

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);

  function getSubTotal(items) {
    const total = items
      ?.map((d) => d.price * d.quantity)
      .reduce((a, c) => a + c, 0);
    return total;
  }

  const dispatch = useDispatch();
  return (
    <PageWrapper>
      <Typography variant="h4" data-testid="cart_heading">
        Cart Item List:
      </Typography>
      <ProductsWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem?.map((d) => (
                <TableRow
                  data-testid="cart-data"
                  key={d.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <CardMedia
                      component="img"
                      height="120"
                      sx={{ maxWidth: "200px" }}
                      image={d.thumbnail}
                      alt={d.title}
                    />
                  </TableCell>
                  <TableCell align="left">{d.title}</TableCell>
                  <TableCell align="center">
                    <Button
                      color="secondary"
                      onClick={() => dispatch(decrement({ id: d.id }))}
                      variant="outlined"
                      size="small"
                    >
                      -
                    </Button>{" "}
                    {d.quantity}{" "}
                    <Button
                      onClick={() => dispatch(addToCart(d))}
                      color="primary"
                      variant="outlined"
                      size="small"
                    >
                      +
                    </Button>
                  </TableCell>
                  <TableCell align="right">{d.price}</TableCell>
                  <TableCell align="right">{d.price * d.quantity}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon
                      data-testid="cart-delete"
                      sx={{ cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart({ id: d.id }))}
                      color="error"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={4} align="right">
                  <Typography variant="h6">Sub Total</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color={"black"} variant="body1">
                    {getSubTotal(cartItem)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </ProductsWrapper>
    </PageWrapper>
  );
};

export default Cart;
