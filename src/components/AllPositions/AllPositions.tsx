import { Spinner, Card } from "react-bootstrap";
import "./AllPositions.scss";
import useFetch from "../../Hooks/useFetch";
import PositionsAmount from "../PositionsAmount";
import Position from "../Position/Position";

const AllPositions = () => {
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3333/api/v1/positions"
  );
  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;

  const allPositionsList = data?.data.positions.map((position, index) => {
    return (
      <li>
        {" "}
        <Position key={index} name={position.company.name} daysCounter={5} applicationDate={position.applicationDate}/>
      </li>
    );
  });

  return (
    <>
      <Card className="wrapper" style={{ height: "23rem", width: "23rem" }}>
        <Card.Body>
          <Card.Title className="title">
            All Positions
            <PositionsAmount number={data.results} />
          </Card.Title>

          <ul>{allPositionsList}</ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllPositions;
