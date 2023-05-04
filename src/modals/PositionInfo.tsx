import { useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";

interface PositionInfoProps {
  show: boolean;
  setShow: (arg: boolean) => void;
  handleClose: () => void;
  companyName: string;
  applicationDate: string;
  description: string | undefined;
  location: string | undefined;
  website: string | undefined;
  title: string;
  requirements: string | undefined;
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
}

const PositionInfo: React.FC<PositionInfoProps> = (props) => {
  const {
    show,
    setShow,
    handleClose,
    companyName,
    applicationDate,
    description,
    location,
    website,
    title,
    requirements,
    contactName,
    contactEmail,
    contactPhoneNumber,
  } = props;
  const noContact = !contactName || !contactEmail || !contactPhoneNumber;

  //   const { data, loading, error, refetch } = useFetch(
  //     "http://localhost:3333/api/v1/positions"
  //   );
  //   if (loading) return <Spinner />;
  //   if (error) console.log(error);
  //   if (!data) return null;

  //   const MockPosition = data.data.positions[4];

  return (
    <>
      {/* <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton >
         
          <Modal.Title>
            <div className="positionInfoTitle">
              {" "}
              {companyName} */}
      {/* <DaysCounter applicationDate={applicationDate} daysCounter={6} />   */}
      {/* </div>
          </Modal.Title>
        </Modal.Header> */}
      <Modal.Body>
        <div className="infocontainer">
          <div className="companyInfo">
            <div className="company">
              <h4>
                More about {companyName}{" "}
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "1rem" }}
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
              </h4>
              <p> {description}</p>
              <div className="styleinfo">
                <p>
                  {" "}
                  <span className="location">{location}</span>{" "}
                </p>
                <a href={website} target={"_blank"}>
                  {" "}
                  website
                </a>
              </div>
            </div>
            <div className="position">
              <h4>
                You applied as <span>{title}</span>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "1rem" }}
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
              </h4>
              <p>{requirements}</p>
              <p className="salary"> Expected salary: 10,000$</p>
            </div>
            <div className="tips">
              <h4>Tips</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>consectetur adipisicing elit.</li>
                <li>Corporis eius, dolor.</li>
              </ul>
            </div>
          </div>
          {contactName ? (
            <div className="contactInfo">
              <h4>
                Contact{" "}
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: "1rem" }}
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
              </h4>

              <p>
                <a
                  href="https://www.linkedin.com/in/marina-wexsler/"
                  target={"_blank"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>{" "}
                  <span>{contactName}</span>
                </a>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                <span>{contactEmail}</span>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                <span>{contactPhoneNumber}</span>
              </p>
            </div>
          ) : (
            <p style={{ margin: "0 auto" }}> no contact info</p>
          )}
        </div>

        <Modal.Footer>
          {" "}
          <Button variant="outline-secondary">Add notes</Button>{" "}
          {noContact && (
            <Button variant="outline-secondary">Add contact</Button>
          )}
        </Modal.Footer>
      </Modal.Body>
      {/* </Modal> */}
    </>
  );
};

export default PositionInfo;
