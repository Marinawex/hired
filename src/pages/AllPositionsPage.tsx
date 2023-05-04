import { Spinner, Card } from "react-bootstrap";
import "./AllPositionsPage.scss";
import useFetch from "../Hooks/useFetch";
import PositionsAmount from "../components/PositionsAmount";
import Position from "../components/Position/Position";

interface AllPositionsPageProps {
  query: string;
}

const AllPositionsPage: React.FC<AllPositionsPageProps> = (props) => {
  const { query } = props;
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3333/api/v1/positions"
  );
  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;

  const allPositionsList = data?.data.positions.map((position, index) => {
    return (
      <li key={index}>
        {" "}
        <Position
          key={index}
          name={position.company.name}
          daysCounter={5}
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
      <div>
        <h1>
          All Positions
          <PositionsAmount number={data.results} />
        </h1>

        <ul>{allPositionsList}</ul>
      </div>
    </>
  );
};

export default AllPositionsPage;
