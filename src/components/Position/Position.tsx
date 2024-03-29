import { useState } from "react";
import { useDrag } from "react-dnd";
import PositionInfo from "../../modals/PositionInfo";
import "./Position.scss";
import DaysCounter from "../DaysCounter";
import { Modal, Button } from "react-bootstrap";

interface PositionProps {
  id: string;
  name: string;
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

const Position: React.FC<PositionProps> = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    id,
    name,
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

  return (
    <div className="container" onClick={handleShow}>
      <DaysCounter applicationDate={applicationDate} />
      <p>{name}</p>
      {show && (
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <PositionInfo
            id={id}
            companyName={name}
            applicationDate={applicationDate}
            description={description}
            location={location}
            website={website}
            title={title}
            requirements={requirements}
            contactName={contactName}
            contactEmail={contactEmail}
            contactPhoneNumber={contactPhoneNumber}
          />
        </Modal>
      )}
    </div>
  );
};

export default Position;
