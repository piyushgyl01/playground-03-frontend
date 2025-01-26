import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import Employee from "./pages/Employee.jsx";
import EmployeeDetails from "./pages/EmployeeDetails.jsx";
import Report from "./pages/Report.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/employee-details/:employeeID",
        element: <EmployeeDetails />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
