import React from "react";
import Home from "../Page/Home";
import LocomotiveScroll from "locomotive-scroll";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
