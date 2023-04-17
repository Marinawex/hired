import Card from "react-bootstrap/Card";
import "./CardWraper.scss";
import Company from "../components/Company";
import { companies, daysPassedSinceApplication } from "../assets/companies";
import Counter from "./Counter";
import { useState } from "react";
import { useDrop } from "react-dnd";

interface CardProps {
  title: string;
}

const CardWraper: React.FC<CardProps> = (props) => {
  const { title } = props;

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "company",
    drop: (item) => addCompanyToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCompanyToBoard = (id: Number) => {
    const newcompanies = daysPassedSinceApplication.filter(
      (company) => id === company.id
    );
    setBoard((board) => [...board, newcompanies[0]]);
  };

  const companiesFilteredByStatus = daysPassedSinceApplication.map(
    (comp, index) => (
      <li key={index}>
        {comp.status[title] ? (
          <Company
            name={comp.name}
            applicationDate={comp.applicationDate}
            daysCounter={comp.daysPassedSinceApplication}
          />
        ) : title === "All Companies" ? (
          <Company
            name={comp.name}
            applicationDate={comp.applicationDate}
            daysCounter={comp.daysPassedSinceApplication}
          />
        ) : null}
      </li>
    )
  );

  return (
    <>
      <Card
        className="wraper"
        ref={drop}
        style={{ height: "23rem", width: "23rem" }}
      >
        <Card.Body>
          <Card.Title className="title">
            {title.toUpperCase()}
            <Counter number={companies.length} />
          </Card.Title>
          <ul>
            {companiesFilteredByStatus}
            {board.map((comp, index) => {
              return (
                <Company
                  key={index}
                  name={comp.name}
                  applicationDate={comp.applicationDate}
                  daysCounter={comp.daysPassedSinceApplication}
                  id={comp.id}
                />
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWraper;
