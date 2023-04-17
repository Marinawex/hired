import "./Home.scss";
import CardWraper from "../components/CardWraper";
import Search from "../components/Search";
import useFetch from "../Hooks/useFetch";
import { Spinner } from "react-bootstrap";
import AddPosition from "../modals/AddPosition";

const Home = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

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

  return (
    <>
      <div className="appContainer">
        <div className="InProcess">
          <CardWraper title={"In Process"} />
          {/* <h3>
            {data?.setup} :{data?.delivery}{" "}
          </h3> */}
          <button onClick={refetch}>refetch</button>
          <div className="d-grid gap-2">
            <AddPosition />
          </div>
        </div>
        <div className="companies">
          <Search />
          <div className="container">
            {titles.map((title, index) => (
              <CardWraper title={title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
