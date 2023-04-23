import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {z} from 'zod'

type Inputs = {
  CompanyName: string;
  Position: string;
  date: string;
  ContactName: string;
  ContactEmail: string;
  ContactPhoneNumber: Number;
  save: string;
};

function AddPosition() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const {
  //   control,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = data => console.log(data);

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="CompanyName">
                  <Form.Label>Company</Form.Label>
                  <Controller
                    control={control}
                    name="CompanyName"
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Control
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        placeholder="Company name"
                           
                      />
                    )}
                  />
                       
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Position">
                  <Form.Label>Position</Form.Label>
                  <Controller
                    control={control}
                    name="Position"
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Control
                        type="text"
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        placeholder="Position"
                        name="Position"
                      />
                    )}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="Application date">
              <Form.Label>Application date</Form.Label>
              <Controller
                control={control}
                name="Application date"
                defaultValue=""
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    type="date"
                    name="date"
                    onChange={onChange}
                    value={value}
                    ref={ref}
                  />
                )}
              />
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
                  <Form.Group className="mb-3" controlId="Contact Name">
                    <Form.Label>Contact Name</Form.Label>
                    <Controller
                      control={control}
                      name="ContactName"
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                          type="text"
                          onChange={onChange}
                          value={value}
                          ref={ref}
                          placeholder="Contact Name"
                          name="ContactName"
                        />
                      )}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Contact Email">
                    <Form.Label>Contact Email</Form.Label>
                    <Controller
                      control={control}
                      name="ContactEmail"
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                          type="text"
                          onChange={onChange}
                          value={value}
                          ref={ref}
                          placeholder="Contact Email"
                          name="ContactEmail"
                        />
                      )}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="Contact Phone number">
                <Form.Label>Phone</Form.Label>
                <Controller
                  control={control}
                  name="ContactPhone"
                  defaultValue=""
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Control
                      type="text"
                      onChange={onChange}
                      value={value}
                      ref={ref}
                      placeholder="Contact Phone"
                      name="ContactPhone"
                    />
                  )}
                />
              </Form.Group>
            </div>
            {/* <Controller control={control}                                                                
          render={({ field: { ref }, formState }) => (                                               
            <Button type="submit" disabled={formState.isSubmitting}                                  
               className="btn btn-primary">                                                          
               {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
               Save                                                                                  
            </Button>                                                                                
          )} />  */}
            <Modal.Footer>
              <Button variant="success" onClick={handleClose} type="submit">
                Add Position
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPosition;
