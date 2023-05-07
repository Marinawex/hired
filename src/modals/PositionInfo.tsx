import { useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";
import ContactDisplay from "./ContactDisplay";
import ContactEdit from "./ContactEdit";
import { svg } from "../assets/Svg";
import PositionDisplay from "./PositionDisplay";
import Notes from "./Notes";

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
  const [isEdit, setIsEdit] = useState(false);
  const handleStartEditing = () => setIsEdit(true);
  const handleCancelEditing = () => setIsEdit(false);

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
              <PositionDisplay
                title={title}
                requirements={requirements}
                onEdit={handleStartEditing}
              />
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
              !isEdit && (
                <ContactDisplay
                  contactName={contactName}
                  contactEmail={contactEmail}
                  contactPhoneNumber={contactPhoneNumber}
                  onEdit={handleStartEditing}
                />
              )
            ) : (
              <p style={{ margin: "0 auto" }}>no contact info</p>
            )}
            {isEdit && (
              <ContactEdit
                id={id}
                contactName={contactName}
                contactEmail={contactEmail}
                contactPhoneNumber={contactPhoneNumber}
                onCancelEdit={handleCancelEditing}
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
            <Button variant="outline-secondary" onClick={handleStartEditing}>
              Add contact
            </Button>
          )}
        </Modal.Footer>
      </Modal.Body>
    </>
  );
};

export default PositionInfo;
