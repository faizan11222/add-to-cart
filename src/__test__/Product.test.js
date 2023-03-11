import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import Home from "../pages/Home";

const mockStore = configureMockStore([thunk]);

describe("Home", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      products: {
        data: [
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

  test("renders product cards", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const productCards = await screen.findAllByTestId("product-card");
    expect(productCards.length).toBe(2);
  });
});
