import Badge from "react-bootstrap/Badge";

interface counterProps {
  number: number;
}

const Counter: React.FC<counterProps> = (props) => {
  const { number } = props;

  return (
    <div>
      <Badge bg="light" text="dark">
        {number}
      </Badge>
    </div>
  );
};

export default Counter;
