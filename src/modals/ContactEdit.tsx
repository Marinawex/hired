import { svg } from "./Svg";
import "./ContactEdit.scss";

interface ContactEditProps {
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
  onCancelEdit: () => void;
}

const ContactEdit: React.FC<ContactEditProps> = (props) => {
  const { contactName, contactEmail, contactPhoneNumber, onCancelEdit } = props;
  return (
    <>
      <h4>Contact </h4>
      <p>
        {" "}
        {svg.contact}
        <span>
          <input type="text" value={contactName} autoFocus />
        </span>
      </p>
      <p>
        {svg.email}
        <span>
          <input type="text" value={contactEmail} />
        </span>
      </p>
      <p>
        {svg.phone}{" "}
        <span>
          <input type="text" value={contactPhoneNumber} />
        </span>
      </p>
      <br/>
      <button className="cancelBtn" onClick={onCancelEdit}>
        cancel
      </button>
      <button className="saveBtn"> save changes </button>
    </>
  );
};

export default ContactEdit;
