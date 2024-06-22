import type { NextApiRequest, NextApiResponse } from "next";

type Employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
};

type ResponseData = {
  data: Employee[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const dummyData: Employee[] = [
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

  res.status(200).json({ data: dummyData });
}
