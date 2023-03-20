import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Home.scss";
import CardWraper from "../components/CardWraper";
import Search from "../components/Search";
const Home = () => {
  const titles = [
    "applied",
    "follow up",
    "rejected",
    "no reply",
    "all companies",
  ];
  return (
    <>
      <div className="appContainer">
        <div className="InProcess">
          <CardWraper title={"In Process"} />
          <div className="d-grid gap-2">
            <Button className="btn" variant="success" size="lg">
              Add Position
            </Button>
          </div>
        </div>
        <div className="companies">
          <Search />
          <div className="container">
            {titles.map((title) => (
              <CardWraper title={title.toUpperCase()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
