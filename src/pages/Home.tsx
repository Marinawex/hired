import "./Home.scss";
import CardWraper from "../components/CardWraper";
import Search from "../components/Search";
import useFetch from "../Hooks/useFetch";
import { Spinner } from "react-bootstrap";
import AddPosition from "../modals/AddPosition";
import { useState } from "react";
import { Position } from "../types/interfaces";
import AllPositions from "../components/AllPositions/AllPositions";

const Home = () => {
  const [positions, setPositions] = useState<Array<Position> | null>([]);
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3333/api/v1/positions"
  );

  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;


  const titles = [
    "inProcess",
    "applied",
    "followUp",
    "rejected",
    "noReply",
    "All Companies",
  ];

  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;
 
  return (
    <>
      <div className="appContainer">
        <div className="inProcess">
          <AllPositions/>
          <div className="d-grid gap-2">
            <AddPosition />
          </div>
        </div>
        <div className="positions">
          <Search />
          <div className="container">
            <CardWraper title={"inProcess"} />
            <CardWraper title={"applied"} />
            <CardWraper title={"followUp"} />
            <CardWraper title={"rejected"} />
            <CardWraper title={"noReply"} />
            <CardWraper title={"All Companies"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
