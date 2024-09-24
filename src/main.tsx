import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {App} from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={{
      display: "flex",
      flexDirection: "column"
    }}><Link to="messages">Messages</Link><Link to="grid">grid</Link></div>,
  },
  {
    path: "/messages",
    element: <App />
  },{
    path: "/grid",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
