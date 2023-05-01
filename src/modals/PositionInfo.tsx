import { useState } from "react";
import { Spinner, Modal ,Button} from "react-bootstrap";
import "./PositionInfo.scss";
import useFetch from "../Hooks/useFetch";
import Position from "../components/Position/Position";

const PositionInfo = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  

  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3333/api/v1/positions"
  );
  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;

  const MockPosition = data.data.positions[4]

  

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="positionInfoTitle"><Position name={MockPosition.company.name}
  daysCounter={6} applicationDate={MockPosition.applicationDate}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="infocontainer">
            <div className="companyInfo">
              <div className="company">
                <h4>More about {MockPosition.company.name}</h4>
                <p>WHAT: {MockPosition.company.description}</p>
                <p>WHERE: {MockPosition.company.location}</p>
                <p>WWW : {MockPosition.company.website}</p>

              </div>
              <div className="position">
                <h4>You applied as {MockPosition.title}</h4>
                <p>{MockPosition.requirements}</p>
                <p> Expected salary: 11111$</p>
              </div>
              <div className="tips">
                <h4 >Tips</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis eius, dolor.
              </div>
            </div>
            <div className="contactInfo">
              <h4>Contact</h4>
              <p>Full name : {MockPosition.contact?.name}</p>
              <p>Email: {MockPosition.contact?.email}</p>
              <p>Phone: {MockPosition.contact?.phoneNumber}</p>
            </div>
          </div>
          <Modal.Footer></Modal.Footer>
        </Modal.Body>
      </Modal>
      <Button className="btn" variant="success" size="lg" onClick={handleShow}>
        open
      </Button>
    </>
  );
};

export default PositionInfo;
