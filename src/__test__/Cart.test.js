import "@testing-library/jest-dom";
import Cart from "../pages/Cart";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { addToCart, decrement } from "../redux/slices/Cart";

const mockStore = configureStore([]);

describe("Cart component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        cartItem: [
          {
            id: 1,
            title: "Product 1",
            thumbnail: "https://via.placeholder.com/150",
            price: 10,
            quantity: 1,
          },
          {
            id: 2,
            title: "Product 2",
            thumbnail: "https://via.placeholder.com/150",
            price: 20,
            quantity: 2,
          },
        ],
      },
    });
  });

  test("renders cart item list heading", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const heading = screen.getByTestId("cart_heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Cart Item List:");
  });

  test("renders cart items", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const items = screen.getAllByTestId("cart-data");
    expect(items.length).toBe(2);
  });

  test("increments cart item quantity when '+' button is clicked", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const incrementBtn = screen.getAllByText("+")[0];
    fireEvent.click(incrementBtn);
    expect(store.getActions()).toEqual([
      addToCart(store.getState().cart.cartItem[0]),
    ]);
  });

  test("decrements cart item quantity when '-' button is clicked", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const decrementBtn = screen.getAllByText("-")[0];
    fireEvent.click(decrementBtn);
    expect(store.getActions()).toEqual([
      decrement({ id: store.getState().cart.cartItem[0].id }),
    ]);
  });

  test("displays sub-total", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const subTotal = screen.getByText("Sub Total");
    expect(subTotal).toBeInTheDocument();
  });
});
