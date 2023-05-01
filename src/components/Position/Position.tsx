import Badge from "react-bootstrap/Badge";
import { useDrag } from "react-dnd";
import "./Position.scss";

interface PositionProps {
  name: string;
  daysCounter: number;
  applicationDate:string;
}

// the days counter is calculated in the client side. TODO: move it to the server!!!

const daysPassedSinceDate = (dateToCheck: string) => {
  const today = new Date().getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24; // milliseconds in one day
  const dateInMs = new Date(dateToCheck).getTime();
  const daysPassed = Math.round((today - dateInMs) / oneDayInMs);

  return daysPassed;
}

const Position: React.FC<PositionProps> = (props) => {
  const { name, daysCounter , applicationDate } = props;

const daysPassedSinceApplication = daysPassedSinceDate(applicationDate)
const statusColorTemp =  daysPassedSinceApplication > 20 ? "danger" : daysPassedSinceApplication > 5 ? "warning" : "success";

  const statusColor =
    daysCounter > 20 ? "danger" : daysCounter > 5 ? "warning" : "success";

  return (
    <div className="container">
      <p>{name}</p>
      <Badge className="counter" bg={statusColorTemp}>
        {daysPassedSinceApplication}
      </Badge>
    </div>
  );
};

export default Position;
