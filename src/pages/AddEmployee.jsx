

export default function AddEmployee() {
  return (
    <>
      <main className="container my-5">
        <h1 className="text-center">Add Employee</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name:
          </label>
          <input type="text" id="nameInput" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title:
          </label>
          <input type="text" id="titleInput" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="departmentSelect" className="form-label">
            Department:
          </label>
          <select id="departmentSelect" className="form-select">
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
        <button className="btn btn-primary mt-2">Add Employee</button>
      </main>
    </>
  );
}
