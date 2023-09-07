import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useBudget } from "../Context/BudgetContext";

export default function ExpenseModal({ name, show, onClose }) {
  const { AddExpense, UpdateCategoryAmount, selectedCatId } = useBudget();
  const description = useRef();
  const amount = useRef();
  const date = useRef();
  const time = useRef();

  const [currentDate, setCurrentDate] = useState(""); // State to hold the current date
  const [currentTime, setCurrentTime] = useState(""); // State to hold the current time

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function onFinished(e) {
    e.preventDefault();
    if (amount.current.value > 0) {
      const selectedDate = date.current.value || getCurrentDate();
      const selectedTime = time.current.value || getCurrentTime();
      
      AddExpense(selectedDate, selectedTime,description.current.value, amount.current.value);
      UpdateCategoryAmount(selectedCatId, amount.current.value);
      onClose();
    }
  }

  useEffect( ()=> {
    setCurrentDate(getCurrentDate());
    setCurrentTime(getCurrentTime());
  },[] )

  return (
    <Modal show={show} onHide={onClose}>
      <Form onSubmit={onFinished}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense to {name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="date" className={"mb-2"}>
            <Form.Label>Date</Form.Label>
            <Form.Control ref={date} type="date" defaultValue={currentDate} />
          </Form.Group>
          <Form.Group controlId="time" className={"mb-2"}>
            <Form.Label>Time</Form.Label>
            <Form.Control ref={time} type="time" defaultValue={currentTime} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={description} type="text" required />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control ref={amount} type="number" required />
          </Form.Group>
          <div className="d-flex justify-content-end mt-3">
            <Button type="Submit">Add</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
