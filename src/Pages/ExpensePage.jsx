import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Table } from "react-bootstrap";

export default function ExpenseListPage() {
  const { id } = useParams();
    const data = JSON.parse(localStorage.getItem(id));
    if(!data){
      return <Navigate to={"/not-found"}/>
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column mx-3">
      <h2 className="mb-3 text-white">Expense List</h2>
      <Table variant="dark" hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.time}</td>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
