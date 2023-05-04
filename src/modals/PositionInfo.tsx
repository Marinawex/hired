import { useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";
import ContactDisplay from './ContactDisplay'
import ContactEdit from "./ContactEdit";

interface PositionInfoProps {
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

  return (
    <>
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
          <div className="contactInfo">
          {contactName? <ContactEdit contactName={contactName} contactEmail={contactEmail} contactPhoneNumber={contactPhoneNumber}/> : <p style={{ margin: "0 auto" }}>no contact info</p>
          }
          </div>
        </div>

        <Modal.Footer>
          {" "}
          <Button variant="outline-secondary">Add notes</Button>{" "}
          {noContact && (
            <Button variant="outline-secondary">Add contact</Button>
          )}
        </Modal.Footer>
      </Modal.Body>
    </>
  );
};

export default PositionInfo;
