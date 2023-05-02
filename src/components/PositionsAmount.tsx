import Badge from "react-bootstrap/Badge";

interface counterProps {
  number: number;
}

const PositionsAmount: React.FC<counterProps> = (props) => {
  const { number } = props;

  return (
    <div style={{marginLeft:'0.3rem'}}>[
      <Badge bg="light" text="dark" style={{ paddingLeft:'1rem' , paddingRight:'1rem'}}>
        {number}
      </Badge>
    ]
    </div>
  );
};

export default PositionsAmount;
