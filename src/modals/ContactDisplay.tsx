import { svg } from "./Svg";

interface ContactDisplayProps {
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
}

const ContactDisplay: React.FC<ContactDisplayProps> = (props) => {
  const { contactName, contactEmail, contactPhoneNumber } = props;
  return (
    <>
      <h4>
        Contact{" "}
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          {" "}
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