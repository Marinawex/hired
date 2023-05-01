import Badge from "react-bootstrap/Badge";
import { useDrag } from "react-dnd";
import "./Position.scss";

interface PositionProps {
  name: string;
  daysCounter: number;
}

const Position: React.FC<PositionProps> = (props) => {
  const { name, daysCounter } = props;
  const statusColor =
    daysCounter > 20 ? "danger" : daysCounter > 5 ? "warning" : "success";

  return (
    <div className="container">
      <p>{name}</p>
      <Badge className="counter" bg={statusColor}>
        {daysCounter}
      </Badge>
    </div>
  );
};

export default Position;
