import { svg } from "../assets/Svg";
import './ContactDisplay.scss'

interface ContactDisplayProps {
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
  onEdit: () => void;
}

const ContactDisplay: React.FC<ContactDisplayProps> = (props) => {
  const { contactName, contactEmail, contactPhoneNumber, onEdit } = props;
  return (
    <>
      <h4>
        Contact{" "}
        <button className="editBtn"
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={onEdit}
        >
          {svg.edit}
        </button>
      </h4>
      <p>
        <a href="https://www.linkedin.com/in/marina-wexsler/" target={"_blank"}>
          {svg.contact} <span>{contactName}</span>
        </a>
      </p>
      <p>
        {svg.email}
        <span>{contactEmail}</span>
      </p>
      <p>
        {svg.phone} <span>{contactPhoneNumber}</span>
      </p>
    </>
  );
};

export default ContactDisplay;
