import { useDrag } from "react-dnd";
import "./draggableContainer.scss";

interface IdraggableContainerProps {
  type: string;
  id: number;
}
const DraggableContainer: React.FC<IdraggableContainerProps> = (props) => {
  const { type, id } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="container"
      ref={drag}
      style={{
        opacity: isDragging ? 0.1 : 1,
      }}
    ></div>
  );
};

export default DraggableContainer;
