import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import '@testing-library/jest-dom';
import Header from "../../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import cartReducer from "../../utils/cartSlice";
import UserContext from "../../utils/UserContext";

// Mock the custom hook useOnlineStatus
jest.mock("../../utils/useOnlineStatus", () => jest.fn());
import useOnlineStatus from "../../utils/useOnlineStatus";

// Test case for the Header component
describe("Header component", () => {
  let store;

  // Create a mock Redux store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [],
        },
      },
    });

    // Mock online status
    useOnlineStatus.mockReturnValue(true);
  });

  test("renders Header component correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserContext.Provider value={{ loggedInUser: "tiwari" }}>
            <Header />
          </UserContext.Provider>
        </Router>
      </Provider>
    );

    // Check if the logo is rendered
    expect(screen.getByAltText("logo")).toBeInTheDocument();

    // Check if all navigation links are present
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/grocery/i)).toBeInTheDocument();
    expect(screen.getByText(/cart \(0 🛒\)/i)).toBeInTheDocument();

    // Check if user context is working
    expect(screen.getByText("tiwari")).toBeInTheDocument();

    // Check online status indicator
    expect(screen.getByText(/✅/)).toBeInTheDocument();
  });

  test("toggles login/logout button when clicked", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserContext.Provider value={{ loggedInUser: "tiwari" }}>
            <Header />
          </UserContext.Provider>
        </Router>
      </Provider>
    );

    const loginButton = screen.getByText(/login/i);

    // Check initial button text
    expect(loginButton).toBeInTheDocument();
    expect(loginButton.textContent).toBe("Login");

    // Simulate button click and check if it toggles to "Logout"
    fireEvent.click(loginButton);
    expect(loginButton.textContent).toBe("Logout");

    // Simulate another click and check if it toggles back to "Login"
    fireEvent.click(loginButton);
    expect(loginButton.textContent).toBe("Login");
  });

  test("displays the correct cart item count from the Redux store", () => {
    // Update the store with cart items
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }],
        },
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <UserContext.Provider value={{ loggedInUser: "tiwari" }}>
            <Header />
          </UserContext.Provider>
        </Router>
      </Provider>
    );

    // Check if the cart count is updated
    expect(screen.getByText(/cart \(2 🛒\)/i)).toBeInTheDocument();
  });

  test("shows correct online status indicator", () => {
    // Mock the online status to false
    useOnlineStatus.mockReturnValue(false);

    render(
      <Provider store={store}>
        <Router>
          <UserContext.Provider value={{ loggedInUser: "tiwari" }}>
            <Header />
          </UserContext.Provider>
        </Router>
      </Provider>
    );

    // Check if the online status indicator shows the correct status
    expect(screen.getByText(/🔴/)).toBeInTheDocument();
  });
});
