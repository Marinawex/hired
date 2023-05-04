import { useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";
import ContactDisplay from "./ContactDisplay";
import ContactEdit from "./ContactEdit";
import { svg } from "./Svg";

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
                  {svg.edit}
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
                  {svg.edit}
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
            {contactName ? (
              <ContactEdit
                contactName={contactName}
                contactEmail={contactEmail}
                contactPhoneNumber={contactPhoneNumber}
              />
            ) : (
              <p style={{ margin: "0 auto" }}>no contact info</p>
            )}
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
