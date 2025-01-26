import { Link } from "react-router";

export default function App() {
  return (
    <>
      <section>
        <img
          src="https://placehold.co/5200x1000?text=Employees+Smiling"
          className="img-fluid"
          alt=""
        />
      </section>
      <section className="container text-center my-5 py-5">
        <h1>Our Employees</h1>
        <p>
          Meet our dedicated team of professionals who work tirelessly to
          achieve our company's goals.
        </p>
        <Link to="/employee" className="btn btn-primary">
          View Employees
        </Link>
      </section>
      <section className="container text-center my-5 py-5">
        <h1>Add Employee</h1>
        <p>Add Employees with a set of automated systems.</p>
        <Link to="/add-employee" className="btn btn-primary">
          Add Employee
        </Link>
      </section>
      {/* <section className="container text-center my-5 py-5">
        <h1>Company Report</h1>
        <p>
          Explore our latest financial report to gain insights into our
          company's performance and growth.
        </p>
        <Link to="/report" className="btn btn-primary">
          View Report
        </Link>
      </section> */}
    </>
  );
}
