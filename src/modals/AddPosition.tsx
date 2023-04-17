import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddPosition() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="btn" variant="success" size="lg" onClick={handleShow}>
        Add Position
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Company name</Form.Label>
                  <Form.Control type="text" placeholder="Company name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" placeholder="Position" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Application date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <h3>Contact Info</h3>
            <div
              style={{
                border: "solid 1px rgba(128, 128, 128, 0.4)",
                padding: "1em",
                borderRadius: "8px",
              }}
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control type="text" placeholder="Contact Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Email</Form.Label>
                    <Form.Control type="text" placeholder="Contact Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Contact Phone number" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Add Position
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPosition;
