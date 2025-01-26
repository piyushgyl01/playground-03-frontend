import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

export default function Employee() {
  const [filter, setFilter] = useState("All");
  const { data, loading, error, refetch } = useFetch(
    "https://playground-03-backend.vercel.app/api/read-employees"
  );
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;
    try {
      const response = await fetch(
        `https://playground-03-backend.vercel.app/api/delete-employee/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setToastMessage("Employee deleted successfully");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        refetch();
      } else {
        setToastMessage("Failed to delete the employee");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        throw new Error();
      }
    } catch (error) {
      console.log("UNABLE TO DELETE THE EMPLOYEE");
    }
  };

  const renderedData =
    filter === "All"
      ? data
      : data?.filter((employee) => employee.department === filter);

  return (
    <>
      {showToast && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1050 }}
        >
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Notification</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setToast(false)}
              ></button>
            </div>
            <div className="toast-body">{toastMessage}</div>
          </div>
        </div>
      )}
      <main className="container my-5">
        <h1 className="text-center">All Employees</h1>
        <label htmlFor="departmentFilter">Filter By Department: </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="form-select"
          id="departmentFilter"
        >
          <option value="All">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
          <option value="Planning">Planning</option>
        </select>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center">Error</p>}
        {renderedData && (
          <ul className="list-group mt-4">
            {renderedData?.map((employee) => (
              <li key={employee._id} className="list-group-item">
                <h3>{employee.name}</h3>
                <h6>{employee.title}</h6>
                <Link
                  className="btn btn-primary"
                  to={`/employee-details/${employee._id}`}
                >
                  Details
                </Link>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
