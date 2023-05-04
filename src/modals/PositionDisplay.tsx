import { svg } from "../assets/Svg";


interface PositionDisplayProps {
    title: string;
    requirements: string | undefined;
    onEdit: () => void

}


const PositionDisplay:React.FC<PositionDisplayProps> = (props) => {
    const {title, requirements , onEdit} = props
  return (
    <>
      <h4>
        You applied as <span>{title}</span>
        <button
          className="editBtn" onClick={onEdit}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          {" "}
          {svg.edit}
        </button>
      </h4>
      <p>{requirements}</p>
      <p className="salary"> Expected salary: 10,000$</p>
    </>
  );
};

export default PositionDisplay;
