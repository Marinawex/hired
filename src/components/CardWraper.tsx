import Card from "react-bootstrap/Card";
import "./CardWraper.scss";
import Company from "./company/Company";
import { daysPassedSinceApplication } from "../assets/companies";
import Counter from "./Counter";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ICompany } from "../types/interfaces";
import Companies from "./companies";
import { Spinner } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";

interface CardProps {
  title: string;
}

const CardWraper: React.FC<CardProps> = (props) => {
  const { title } = props;

  const [companies, setCompanies] = useState<Array<ICompany> | null>([]);
  const { data, loading, error, refetch } = useFetch(
    "http://localhost:3333/api/v1/companies"
  );

  if (loading) return <Spinner />;
  if (error) console.log(error);
  if (!data) return null;
  // const [board, setBoard] = useState<Array<ICompany>|null>([]);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "company",
  //   drop: (item) => addCompanyToBoard(item.id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  // const addCompanyToBoard = (id: Number) => {
  //   const newcompanies = daysPassedSinceApplication.filter(
  //     (company) => id === company.id
  //   );
  //   setBoard((board) => [...board, newcompanies[0]]);
  // };

  const companiesFilteredByStatus =
    data.data.companies &&
    data.data.companies.map((comp, index) => (
      <li key={index}>
        {comp.status[title] ? (
          <Company
            name={comp.companyName}
            applicationDate={comp.applicationDate}
            // daysCounter={comp.daysPassedSinceApplication}
          />
        ) : title === "All Companies" ? (
          <Company
            name={comp.companyName}
            applicationDate={comp.applicationDate}
            // daysCounter={comp.daysPassedSinceApplication}
          />
        ) : null}
      </li>
    ));

  return (
    <>
      <Card
        className="wraper"
        // ref={drop}
        style={{ height: "23rem", width: "23rem" }}
      >
        <Card.Body>
          <Card.Title className="title">
            {title.toUpperCase()}
            <Counter number={data.data.companies.length} />
          </Card.Title>

          <ul>{companiesFilteredByStatus}</ul>

          {/* {board && board.map((comp, index) => {
              return (
                <Company
                  key={index}
                  name={comp.name}
                  applicationDate={comp.applicationDate}
                  daysCounter={comp.daysPassedSinceApplication}
                  id={comp.id}
                />
              );
            })} */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWraper;
