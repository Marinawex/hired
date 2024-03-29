import { Spinner, Card } from "react-bootstrap";
import "./StatusCard.scss";
import useFetch from "../Hooks/useFetch";
import PositionsAmount from "./PositionsAmount";
import Position from "./Position/Position";

interface StatusCardProps {
  title: string;
}

const StatusCard: React.FC<StatusCardProps> = (props) => {
  const { title } = props;
  const URL = `http://localhost:3333/api/v1/positions/${title}`;
  const { data, setData, loading, error } = useFetch(URL);
  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;

  //sorts the positions in ascending order
  const sortedByDatePositionsList = data?.data.positions.sort(
    (a, b) => Date.parse(b.applicationDate) - Date.parse(a.applicationDate)
  );

  // const sortByDescendingOrder = () => {
  //   const a = data?.data.positions.sort(
  //     (a, b) => Date.parse(a.applicationDate) - Date.parse(b.applicationDate)
  //   );
  // };

  // console.log(data?.data);
  // console.log(data?.data.positions[0]._id);
  
  

  const positionsList = data?.data.positions.map((position, index) => {
    return (
      <li key={index}>
        {" "}
        <Position
          key={index}
          id={position._id}
          name={position.company.name}
          applicationDate={position.applicationDate}
          description={position.company.description}
          location={position.company.location}
          website={position.company.website}
          title={position.title}
          requirements={position.requirements}
          contactName={position.contact?.name}
          contactEmail={position.contact?.email}
          contactPhoneNumber={position.contact?.phoneNumber}

        />
      </li>
    );
  });

  return (
    <>
      <Card className="wrapper" style={{ height: "23rem", width: "23rem" }}>
        <Card.Body>
          <Card.Title className="title">
            <h4
              style={{
                fontSize: "0.9rem",
                marginRight: "2rem",
                marginLeft: "1.2rem",
              }}
              // onClick={sortByDescendingOrder}
            >
              days
              <br /> since{" "}
            </h4>{" "}
            {title.toUpperCase()}
            <PositionsAmount number={data.results} />
          </Card.Title>
          <ul>{positionsList}</ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatusCard;
