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
  const { data, loading, error } = useFetch(URL);
  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;

  const positionsList = data?.data.positions.map((position, index) => {
    return (
      <li>
        {" "}
        <Position key={index} name={position.company.name} daysCounter={7} applicationDate={position.applicationDate} />
      </li>
    );
  });

  return (
    <>
      <Card className="wrapper" style={{ height: "23rem", width: "23rem" }}>
        <Card.Body>
          <Card.Title className="title">
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
