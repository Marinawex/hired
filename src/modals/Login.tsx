import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "password must contain at least 5 characters" })
      .max(20, { message: "password must contain at most 20 characters" }),
    confirmPassword: z
      .string()
      .min(5, { message: "password must contain at least 5 characters" })
      .max(20, { message: "password must contain at most 20 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type schema = z.infer<typeof schema>;

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: schema) => console.log(data);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        log in
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Controller
                defaultValue=""
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    type="email"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    placeholder="Email"
                  />
                )}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Controller
                defaultValue=""
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="ConfirmformBasicPassword">
              <Form.Label> Confirm Password</Form.Label>
              <Controller
                defaultValue=""
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    placeholder="Confirm password"
                  />
                )}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
              )}
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button
                variant="primary"
                onClick={() => reset()}
                value="Custom Reset Field Values & Errors"
              >
                reset
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
