import Card from "react-bootstrap/Card";
import "./CardWraper.scss";
import Company from "../components/Company";
import companies from "../assets/companies";
import Counter from "./Counter";

interface CardProps {
  title: string;
}

const CardWraper: React.FC<CardProps> = (props) => {
  const { title } = props;
  return (
    <>
      <Card className="wraper" style={{ height: '23rem', width:'23rem'
      }}>
        <Card.Body >
          <Card.Title className="title">
            {title}
            <Counter />
          </Card.Title>
          <ul>
            {[1, 2, 3, 4, 5].map((comp) => (
              <li draggable>
    
                <Company
                  name={companies[0].name}
                  applicationDate={companies[0].applicationDate}
                  status={companies[0].status.inProcess}
                />
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWraper;
