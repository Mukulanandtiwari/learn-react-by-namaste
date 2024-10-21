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