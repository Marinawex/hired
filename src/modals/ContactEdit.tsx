import { svg } from "./Svg";

interface ContactEditProps {
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
}

const ContactEdit: React.FC<ContactEditProps> = (props) => {
  const { contactName, contactEmail, contactPhoneNumber } = props;
  return (
    <>
      <h4>Contact</h4>
      <p>
        {" "}
        {svg.contact}
        <span>
          <input type="text" value={contactName} />
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

      <button style={{ border: "none", backgroundColor: "transparent" }}>
        {" "}
        save changes{" "}
      </button>
    </>
  );
};

export default ContactEdit;
