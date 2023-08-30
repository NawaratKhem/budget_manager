import { Button, Form, Modal } from "react-bootstrap";

export default function AddCatModal({ show, onClose }) {
  function onSubmit() { alert("Fuck!") }

  return (
    <Modal show={show} onHide={onClose}>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group controlId="amount">
                <Form.Label>Allocation</Form.Label>
                <Form.Control type="number" required min={0} step={1}/>
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button>Add</Button>
            </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}