import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Employee Management
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/employee">
                  Employees
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/add-employee">
                  Add Employee
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="/report">
                  Reports
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
