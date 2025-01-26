import { useParams } from "react-router";
import useFetch from "../useFetch";

export default function EmployeeDetails() {
  const { employeeID } = useParams();

  const { data, loading, error } = useFetch(
    "https://playground-03-backend.vercel.app/api/read-employees"
  );
  console.log(data);

  const foundEmployee = data?.find((employee) => employee._id == employeeID);
  console.log(foundEmployee);

  return (
    <>
      <h1>Employee Details</h1>
      {foundEmployee?.title}
    </>
  );
}
