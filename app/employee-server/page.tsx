type Employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
};

export default async function About() {
  // const response = await fetch(`http://localhost:3000/api/employees`);
  // const responseJson = await response.json();

  const employees: Employee[] = [
    {
      id: 1,
      employee_name: "John Doe",
      employee_salary: 50000,
      employee_age: 30,
    },
    {
      id: 2,
      employee_name: "Jane Smith",
      employee_salary: 60000,
      employee_age: 25,
    },
    {
      id: 3,
      employee_name: "Mike Johnson",
      employee_salary: 55000,
      employee_age: 35,
    },
  ];

  return (
    <main>
      <h1>About</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
