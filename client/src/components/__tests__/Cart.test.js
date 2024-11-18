import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
// import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock global fetch
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA_NAME),
//   })
// );

it("should Load Restaurant Menu Component", async () => {
  await act(async () => {
    // Render the components wrapped in Provider and BrowserRouter
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  // Dynamically fetch the category name and count from mock data
  // const firstCategory = MOCK_DATA_NAME.menu.categories[0]?.category;
  // const itemsCount = MOCK_DATA_NAME.menu.items.length;
  // const categoryLabel = `${firstCategory} (${itemsCount})`;

  // Wait for the accordion header to be loaded dynamically
  const accordionHeader = await screen.findByText(categoryLabel);

  // Simulate clicking on the accordion to open the menu section
  fireEvent.click(accordionHeader);

  // Check that 5 food items are loaded (initial load)
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // Check that the cart is initially empty
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  // Find and click the "Add +" buttons for adding items to the cart
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  // Assert that the cart updates with 1 item
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  // Add another item to the cart
  fireEvent.click(addBtns[1]);

  // Assert that the cart updates with 2 items
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  // Assert that 7 food items are now in the menu
  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  // Simulate clicking the "Clear Cart" button to remove all items from the cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Check that the number of food items resets back to 5
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // Assert that the cart is now empty
  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
});
