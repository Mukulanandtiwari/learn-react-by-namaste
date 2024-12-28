/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 

1. We create App.js in that we create Header and Body.

2. then we create RestaurantCard component as "props" structure for body component.

3. then create src folder, in that we create two folder:
- components
- utils
and arrange components as per file to folder.

4. we create HOOK (useState) inside Body.js to filter and re-render UI.

5. useEffect (work to fetch the api): it takes callback function & second optional dependency.

6. react-router-dom:
  - createBrowserRouter: Browser-based routing setup karta hai.
  - RouterProvider: Routing ko puri app mein inject karta hai.
  - Outlet: Nested routes ke liye placeholder provide karta hai.

7. 2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing

8. useParams: agar aap ek dynamic route banate ho, jisme kuch IDs ya slugs URL ka part hoti hain (e.g., /user/:id), toh useParams se aap directly URL mein diye gaye id ko access kar sakte ho.

9. Optimising our app.js (for bundling all components) also you can split each bundle for different usage like as per usage of Filter button, About..., 
  - Chunking
  - Code Splitting
  - Dynamic Bundling
  - lazy loading
  - on-demand loading

10. In this we use { lazy, Suspense } named import for render component when it gets clicked ( About, Grocery).

11. UI : 
Material UI
Bootstrap
Ant Design
Chakra UI

12.  # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector

* ButtonClicked => Action(dispatch) => calls a reducer function() => Selector(subscribing to the store) => modify the UI

# Main concepts:

  - configureStore:  Redux store easily configure kar sakte ho. It has default setting Redux DevTools aur middleware automatically added.

  - createSlice: Ye ek important function hai jo aapko reducer aur action creators ek hi jagah define karne ki facility deta hai. Pehle aapko alag se reducers aur actions likhne padte the, lekin ab ek hi slice mein aap sab kuch likh sakte ho.

  - createAsyncThunk: Agar aapko asynchronous logic handle karna hai jaise API calls, toh ye function kaam aata hai. Isse async actions easily likhe ja sakte hain.

  - createReducer & createAction: Ye functions aapko reducers aur actions create karne ka easy tarika provide karte hain, without the manual work of writing switch cases for each action.

  - combineSlices:

  - createAsyncThunk:

  - createEntityAdapter:

13. # Types of testing (devloper)

| Testing Type        | Focus                                         | Scope                     | Tools                    |
|---------------------|-----------------------------------------------|---------------------------|--------------------------|
| **Unit Testing**     | Individual functions/methods                  | Smallest unit of code      | Jest for Js        |
| **Integration Testing** | Interaction between different units/modules | Modules combined together  | Mocha for Js             |
| **E2E Testing**      | Entire user journey and system behavior       | Full system test           | Cypress, Selenium, Playwright         |


 | Feature/Tool      | **Cypress**            | **Selenium**            | **Playwright**            |
|-------------------|------------------------|-------------------------|---------------------------|
| **Language Support** | Only JavaScript/Node.js | Multi-language (JS, Java, Python, etc.) | JavaScript/Node.js         |
| **Cross-Browser**  | Limited (Chrome, Edge) | Full (Chrome, Firefox, Safari, IE) | Full (Chrome, Firefox, WebKit, Edge) |
| **Speed**         | Fast (direct browser control) | Slower (depending on setup) | Fast (headless, multiple contexts)   |
| **Advanced Features** | Auto-waiting, good debugging | Cross-browser flexibility, Selenium Grid | Cross-browser, network control, headless testing |
| **Best For**      | JavaScript developers, fast front-end testing | Complex cross-browser environments | Cross-browser, modern web apps, advanced control |

14. # Different testing libraries:

  - Jest + React Testing Library: The most common combination for unit and integration testing in React.
  - Cypress and Playwright: Primarily used for E2E testing, simulating real user interaction.
  - Enzyme: Still in use but less preferred now, replaced by React Testing Library.
  - Mocha + Chai: A flexible option for those who want custom configurations.
  - Storybook: Great for visual testing and component-driven development.

15. # Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest : npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-doms


 <!-- Backend File structure -->

 backend/
│
├── controllers/   # Logic for handling requests
│   ├── userController.js
│   ├── restaurantController.js
│
├── models/        # Database models/schemas
│   ├── userModel.js
│   ├── restaurantModel.js
│
├── routes/        # API routes
│   ├── userRoutes.js
│   ├── restaurantRoutes.js
│
├── middleware/    # Middleware functions (e.g., auth)
│   ├── authMiddleware.js
│
├── utils/         # Helper functions (e.g., for formatting, validations)
│   ├── errorHandler.js
│
├── index.js       # Main entry point
├── package.json   # Dependencies
└── .env           # Environment variables
