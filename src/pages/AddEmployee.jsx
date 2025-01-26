import { useNavigate } from "react-router";
import { useState } from "react";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [createdData, setCreatedData] = useState({
    name: "",
    title: "",
    department: "",
  });
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCreate = async () => {
    if (!createdData.name || !createdData.title || !createdData.department) {
      setToastMessage("All fields are required");
      setToast(true);
      return;
    }
    try {
      const response = await fetch(
        "https://playground-03-backend.vercel.app/api/post-employee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createdData),
        }
      );
      if (response.ok) {
        setCreatedData({ name: "", title: "", department: "" });
        setToastMessage("Employee added successfully");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        navigate("/employee");
      } else {
        setToastMessage("Failed to add the employee");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        throw new Error();
      }
    } catch (error) {
      console.log("UNABLE TO CREATE THE EMPLOYEE");
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
        <h1 className="text-center">Add Employee</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name:
          </label>
          <input
            value={createdData.name}
            onChange={(e) =>
              setCreatedData({ ...createdData, name: e.target.value })
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
            value={createdData.title}
            onChange={(e) =>
              setCreatedData({ ...createdData, title: e.target.value })
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
            value={createdData.department}
            onChange={(e) =>
              setCreatedData({ ...createdData, department: e.target.value })
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
        <button onClick={() => handleCreate()} className="btn btn-primary mt-2">
          Add Employee
        </button>
      </main>
    </>
  );
}
