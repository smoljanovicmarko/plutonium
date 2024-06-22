type Employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
};

export default async function About() {
  const response = await fetch(`http://localhost:3000/api/employees`);
  const responseJson = await response.json();

  const employees: Employee[] = responseJson.data;

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
