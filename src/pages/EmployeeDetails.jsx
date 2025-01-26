import { useParams } from "react-router";
import useFetch from "../useFetch";
import { useState } from "react";

export default function EmployeeDetails() {
  const [showEdit, setShowEdit] = useState(false);
  const [editedData, setEditedData] = useState({
    name: "",
    title: "",
    department: "",
  });
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { employeeID } = useParams();

  const { data, loading, error } = useFetch(
    "https://playground-03-backend.vercel.app/api/read-employees"
  );

  const foundEmployee = data?.find((employee) => employee._id == employeeID);

  const handleEdit = async () => {
    try {
      const response = await fetch(
        `https://playground-03-backend.vercel.app/api/update-employee/${employeeID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      if (response.ok) {
        setToastMessage("Employee edited successfully");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        setEditedData({
          name: "",
          title: "",
          department: "",
        });
      } else {
        setToastMessage("Failed to edit the employee");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        throw new Error();
      }
    } catch (error) {
      console.log("UNABLE TO EDIT THE EMPLOYEE");
    }
  };

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
        {" "}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center">Error</p>}
        {foundEmployee && (
          <ul className="list-group">
            <li className="list-group-item">
              <h1 className="text-center">Details of {foundEmployee?.name}</h1>
              <p>
                <strong>Name: </strong>
                {foundEmployee?.name}
              </p>
              <hr />
              <p>
                <strong>Designation: </strong>
                {foundEmployee?.title}
              </p>
              <hr />
              <p>
                <strong>Department: </strong>
                {foundEmployee?.department}
              </p>
              <button
                onClick={() => setShowEdit(!showEdit)}
                className="btn btn-primary"
              >
                Edit Details
              </button>
            </li>
          </ul>
        )}
        {showEdit && (
          <>
            <h1 className="mt-5 text-center">
              Edit Details of {foundEmployee?.name}
            </h1>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name:
              </label>
              <input
                value={editedData.name}
                onChange={(e) =>
                  setEditedData({ ...editedData, name: e.target.value })
                }
                type="text"
                id="nameInput"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="titleInput" className="form-label">
                Title:
              </label>
              <input
                value={editedData.title}
                onChange={(e) =>
                  setEditedData({ ...editedData, title: e.target.value })
                }
                type="text"
                id="titleInput"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="departmentSelect" className="form-label">
                Department:
              </label>
              <select
                value={editedData.department}
                onChange={(e) =>
                  setEditedData({ ...editedData, department: e.target.value })
                }
                id="departmentSelect"
                className="form-select"
              >
                <option value="">None Selected</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="Planning">Planning</option>
              </select>
            </div>
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleEdit()}
            >
              Save Changes
            </button>
          </>
        )}
      </main>
    </>
  );
}
