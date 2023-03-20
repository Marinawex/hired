import Badge from "react-bootstrap/Badge";
import "./Company.scss";

interface CompanyProps {
  name: string;
  status: boolean;
  applicationDate: string;
}

const Company: React.FC<CompanyProps> = (props) => {
  const { name, status } = props;
  return (
    <div className="container">
      <p>{name}</p>
      <Badge className="counter" bg="warning">
        {status.toString()}
      </Badge>
    </div>
  );
};

export default Company;
