import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { storeRoute } from "./Store.jsx";
import { Nav } from "./Nav.jsx";
import { wait } from "./wait";
import { homeLoader } from "./HomeLoader.js";

const Team = lazy(() => wait(import("./Team.jsx"), 1000));
const Home = lazy(() => wait(import("./Home.jsx"), 1000));

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: homeLoader, element: <Home /> },
      { path: "store", ...storeRoute },
      { path: "team", element: <Team /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
