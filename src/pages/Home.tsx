import "./Home.scss";
import CardWraper from "../components/CardWraper";
import Search from "../components/Search";
import useFetch from "../Hooks/useFetch";
import { Spinner } from "react-bootstrap";
import AddPosition from "../modals/AddPosition";

const Home = () => {
  const { data, loading, error, refetch } = useFetch("http://localhost:3333/");

  const titles = [
    "inProcess",
    "applied",
    "followUp",
    "rejected",
    "noReply",
    "All Companies",
  ];
  console.log(data);

  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;
  console.log(data.data.companies[0].name);
  return (
    <>
      <div className="appContainer">
        <div className="InProcess">
          <CardWraper title={"In Process"} />
          <h3>{data.data.companies[0].name}</h3>
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
