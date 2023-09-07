import { Button, Form, Modal } from "react-bootstrap";
import { useBudget } from "../Context/BudgetContext";
import { useRef } from "react";

export default function CatModal({ onShow, onClose }) {

  const { Categories, AddCategory } = useBudget();
  const name = useRef();
  const allocation = useRef();
  const amount = 0;

  //When forms is submitted
  function submitFunc(e){ 
    e.preventDefault();

    //Check the validity of the data
    if(name.current.value === '' || allocation.current.value === ''){
      return;
    }

    //Check if the category already exist
    if(Categories.find(item => item.Name === name.current.value)){
      alert("This category has already been created!");
      return;
    }
    AddCategory(name.current.value, amount, allocation.current.value);
    onClose();
   }

  return (
    <Modal show={onShow} onHide={onClose}>
      <Form onSubmit={submitFunc}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={name} type="text" required/>
            </Form.Group>
            <Form.Group controlId="amount">
                <Form.Label>Allocation</Form.Label>
                <Form.Control ref={allocation} type="number" required min={0} step={1}/>
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
                <Button type="submit">Add</Button>
            </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}