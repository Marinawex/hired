import Card from "react-bootstrap/Card";
import "./CardWraper.scss";
import Company from "./Position/Position";
import Counter from "./PositionsAmount";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ICompany } from "../types/interfaces";
import { Spinner } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import  Companies from "./Companies";
import Position from "./Position/Position";

interface CardProps {
  title: string;
  positions?: [];
}

const CardWraper: React.FC<CardProps> = (props) => {
  const { title } = props;

  

  // const [companies, setCompanies] = useState<Array<ICompany> | null>([]);
  // const { data, loading, error, refetch } = useFetch(
  //   "http://localhost:3333/api/v1/companies"
  // );

  // if (loading) return <Spinner />;
  // if (error) console.log(error);
  // if (!data) return null;

  // console.log(title);
  
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


  

  // const companiesFilteredByStatus =
  //   data.data.companies &&
  //   data.data.companies.map((comp, index) => {
  //     console.log(comp);
      
  //   })
      // <li key={index}>
        {/* {comp.status[title]  ? (
          <Company
            name={comp.companyName}
            applicationDate={comp.applicationDate}
            daysCounter={comp.daysPassedSinceApplication}
          />
        ) : title === "All Companies" ? (
          <Company
            name={comp.companyName}
            applicationDate={comp.applicationDate}
            daysCounter={comp.daysPassedSinceApplication}
          />
        ) : null} */}
       {/* {
         comp.status[title] && title? <Company
         name={comp.companyName}
         applicationDate={comp.applicationDate}
         daysCounter={comp.daysPassedSinceApplication}
       /> : null
       } */}
     
      // </li>
    

  return (
    <>
      <Card
        className="wrapper"
        // ref={drop}
        style={{ height: "23rem", width: "23rem" }}
      >
        <Card.Body>
          <Card.Title className="title">
            {title.toUpperCase()}
            {/* <Counter number={data.data.companies.length} /> */}
          </Card.Title>

          {/* <ul>{companiesFilteredByStatus}</ul> */}

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
