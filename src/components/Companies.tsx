import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { ICompany } from "../types/interfaces";
import Company from "./company/Company";
import { Spinner } from "react-bootstrap";
import {  daysPassedSinceApplication } from "../assets/companies";
interface CompaniesProps {
  title: string;
}

const Companies: React.FC<CompaniesProps> = (props) => {
  const { title } = props;
  // const [companies, setCompanies] = useState<Array<ICompany> | null>([]);
  // const { data, loading, error, refetch } = useFetch("http://localhost:3333/");
  // console.log(data.data.companies);
  
  // setCompanies(data && data.data.companies);
  // if (loading) return <Spinner />;
  // if (error) console.log(error);
  // if (!data) return null;
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
  
  return(
   <><ul>{companiesFilteredByStatus}</ul></>
  )
};

export default Companies;
