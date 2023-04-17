import Badge from "react-bootstrap/Badge";
import { useDrag } from "react-dnd";
import "./Company.scss";

interface CompanyProps {
  id?: number;
  name: string;
  daysCounter: number;
  applicationDate: string;
}

const Company: React.FC<CompanyProps> = (props) => {
  const { name, daysCounter, id } = props;
  const statusColor =
    daysCounter > 20 ? "danger" : daysCounter > 5 ? "warning" : "success";
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "company",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="container" ref={drag}  style={{
      opacity: isDragging ? 0.1 : 1
      
    }}>
      <p>{name}</p>
      <Badge className="counter" bg={statusColor}>
        {daysCounter}
      </Badge>
    </div>
  );
};

export default Company;
