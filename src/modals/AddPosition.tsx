import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { useForm , Controller} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "./AddPosition.scss";

const AddPositionSchema = z
  .object({
    CompanyName: z
      .string()
      .min(1, { message: "This field is required" })
      .max(40),
    Position: z.string().min(1, { message: "This field is required" }).max(40),
    ApplicationDate: z.string(),
    ContactName: z.string(),
    ContactEmail: z.string().email(),
    ContactPhoneNumber: z.string(),
  })
  .partial();

type AddPositionSchema = z.infer<typeof AddPositionSchema>;

function AddPosition() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [formSubmitionError, setFormSubmitionError] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddPositionSchema>({
    resolver: zodResolver(AddPositionSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: AddPositionSchema) => {
    console.log(data);
    axios
      .post("http://localhost:3333/api/v1/positions", {
        company: { name: data.CompanyName },
        title: data.Position,
        applicationDate: data.ApplicationDate,
        contact: {
          name: data.ContactName,
          email: data.ContactEmail,
          phoneNumber: data.ContactPhoneNumber,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setFormSubmitionError(true);
      });
  };

  const addPosition = () => {
    reset();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isSubmitSuccessful ? (
            <>
              <p>position was sucsessfully added</p>{" "}
              <Button variant="success" onClick={addPosition}>
                Add another
              </Button>
              <Button
                variant="success"
                onClick={handleClose}
                style={{ marginLeft: "1rem" }}
              >
                exit
              </Button>
            </>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="positionInfo">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="CompanyName">
                      <Form.Label>Company</Form.Label>
                      <Controller
                        defaultValue=""
                        control={control}
                        name="CompanyName"
                        render={({
                          field: { onChange, onBlur, value, ref },
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <Form.Control
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            ref={ref}
                            placeholder="Company name"
                          />
                        )}
                      />
                      {errors.CompanyName?.message && (
                        <p style={{ color: "red" }}>
                          {errors.CompanyName.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Position">
                      <Form.Label>Position</Form.Label>
                      <Controller
                        defaultValue=""
                        control={control}
                        name="Position"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
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
                      {errors.Position && (
                        <p style={{ color: "red" }}>
                          {errors.Position.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="ApplicationDate">
                  <Form.Label>Application date</Form.Label>
                  <Controller
                    defaultValue={new Date().toISOString().substr(0, 10)}
                    control={control}
                    name="ApplicationDate"
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
                  {errors.ApplicationDate && (
                    <p>{errors.ApplicationDate.message}</p>
                  )}
                </Form.Group>
              </div>
              <h3>Contact Info</h3>
              <div className="ContactInfo">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="Contact Name">
                      <Form.Label>Contact Name</Form.Label>
                      <Controller
                        defaultValue=""
                        control={control}
                        name="ContactName"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
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
                      {errors.ContactName && (
                        <p>{errors.ContactName.message}</p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Contact Email">
                      <Form.Label>Contact Email</Form.Label>
                      <Controller
                        defaultValue=""
                        control={control}
                        name="ContactEmail"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
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
                      {errors.ContactEmail && (
                        <p style={{ color: "red" }}>
                          {errors.ContactEmail.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="Contact Phone number">
                  <Form.Label>Phone</Form.Label>
                  <Controller
                    control={control}
                    defaultValue=""
                    name="ContactPhoneNumber"
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
                  {errors.ContactPhoneNumber && (
                    <p>{errors.ContactPhoneNumber.message}</p>
                  )}
                </Form.Group>
              </div>
              <Modal.Footer>
                <Button variant="success" type="submit">
                  Add Position
                </Button>
                <Button
                  variant="success"
                  onClick={() => reset()}
                  value="Custom Reset Field Values & Errors"
                >
                  reset
                </Button>
              </Modal.Footer>
            </Form>
          )}
          {formSubmitionError && (
            <p>something went wrong, please try again later</p>
          )}
        </Modal.Body>
      </Modal>
      <Button className="btn" variant="success" size="lg" onClick={handleShow}>
        Add Position
      </Button>
    </>
  );
}

export default AddPosition;
