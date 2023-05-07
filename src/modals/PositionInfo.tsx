import { useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";
import ContactDisplay from "./ContactDisplay";
import ContactEdit from "./ContactEdit";
import { svg } from "../assets/Svg";
import PositionDisplay from "./PositionDisplay";
import Notes from "./Notes";
import Tips from "./Tips";
import PositionEdit from "./PositionEdit";

interface PositionInfoProps {
  id: string;
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
    id,
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
  const [isEditContact, setIsEditContact] = useState(false);
  const handleStartEditingContact = () => setIsEditContact(true);
  const handleCancelEditingContact = () => setIsEditContact(false);

  const [isEditCompany, setIsEditCompany] = useState(false);
  const handleStartEditingCompany = () => setIsEditCompany(true);
  const handleCancelEditingCompany = () => setIsEditCompany(false);

  const [isEditPosition, setIsEditPosition] = useState(false);
  const handleStartEditingPosition = () => setIsEditPosition(true);
  const handleCancelEditingPosition = () => setIsEditPosition(false);

  const [notes, setNotes] = useState(false);
  const handleOpenNotes = () => setNotes(true);
  const handleCloseNotes = () => setNotes(false);

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
                  className="editBtn"
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
              {isEditPosition ? (
                <PositionEdit id={id} title={title} requirements={requirements}  onCancelEdit={handleCancelEditingPosition}/>
              ) : (
                <PositionDisplay
                  title={title}
                  requirements={requirements}
                  onEdit={handleStartEditingPosition}
                />
              )}
            </div>
            <div className="tips">
              <Tips />
            </div>
          </div>
          <div className="contactInfo">
            {contactName
              ? !isEditContact && (
                  <ContactDisplay
                    contactName={contactName}
                    contactEmail={contactEmail}
                    contactPhoneNumber={contactPhoneNumber}
                    onEdit={handleStartEditingContact}
                  />
                )
              : !isEditContact && (
                  <p style={{ margin: "0 auto" }}>no contact info</p>
                )}
            {isEditContact && (
              <ContactEdit
                id={id}
                contactName={contactName}
                contactEmail={contactEmail}
                contactPhoneNumber={contactPhoneNumber}
                onCancelEdit={handleCancelEditingContact}
              />
            )}
            <div className="notes">
              {notes && <Notes onCloseNotes={handleCloseNotes} />}
            </div>
          </div>
        </div>

        <Modal.Footer>
          {" "}
          <Button variant="outline-secondary" onClick={handleOpenNotes}>
            Add notes
          </Button>{" "}
          {noContact && (
            <Button
              variant="outline-secondary"
              onClick={handleStartEditingContact}
            >
              Add contact
            </Button>
          )}
        </Modal.Footer>
      </Modal.Body>
    </>
  );
};

export default PositionInfo;
