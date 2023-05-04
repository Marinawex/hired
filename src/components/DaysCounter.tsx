import Badge from "react-bootstrap/Badge";

// the days counter is calculated in the client side. TODO: move it to the server!!!

const daysPassedSinceDate = (dateToCheck: string) => {
  const today = new Date().getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24; // milliseconds in one day
  const dateInMs = new Date(dateToCheck).getTime();
  const daysPassed = Math.round((today - dateInMs) / oneDayInMs);

  return daysPassed;
};

interface DaysCounterProps {
  applicationDate: string;
}

const DaysCounter: React.FC<DaysCounterProps> = (props) => {
  const { applicationDate } = props;

  const daysPassedSinceApplication = daysPassedSinceDate(applicationDate);
  const statusColorTemp =
    daysPassedSinceApplication > 20
      ? "danger"
      : daysPassedSinceApplication > 5
      ? "warning"
      : "success";

  return (
    <>
      <Badge
        className="counter"
        bg={statusColorTemp}
        style={{ marginLeft: "1rem" }}
      >
        {daysPassedSinceApplication}
      </Badge>
    </>
  );
};

export default DaysCounter;
