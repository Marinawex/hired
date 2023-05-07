import { svg } from "../assets/Svg";
import "./ContactEdit.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

interface ContactEditProps {
  id: string | undefined;
  contactName: string | undefined;
  contactEmail: string | undefined;
  contactPhoneNumber: string | undefined;
  onCancelEdit: () => void;
}

interface ContactEditForm {
  updatedContactName: string | undefined;
  updatedContactEmail: string | undefined;
  updatedContactPhoneNumber: string | undefined;
}

const ContactEdit: React.FC<ContactEditProps> = (props) => {
  const { id, contactName, contactEmail, contactPhoneNumber, onCancelEdit } =
    props;


  const URL = `http://localhost:3333/api/v1/positions/${id}`;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactEditForm>();

  const onSubmit: SubmitHandler<ContactEditForm> = (data: ContactEditForm) => {
    console.log(data);
    axios
      .patch(URL, {
        contact: {
          name: data.updatedContactName,
          email: data.updatedContactEmail,
          phoneNumber: data.updatedContactPhoneNumber,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h4>Contact </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          {" "}
          {svg.contact}
          <span>
            <input
              type="text"
              defaultValue={contactName}
              {...register("updatedContactName", { required: true })}
              autoFocus
            />
          </span>
        </p>
        {errors.updatedContactName && (
          <span style={{ color: "gray" }}>This field is required</span>
        )}
        <p>
          {svg.email}
          <span>
            <input
              type="text"
              defaultValue={contactEmail}
              {...register("updatedContactEmail", { required: true })}
            />
          </span>
        </p>
        {errors.updatedContactEmail && (
          <span style={{ color: "gray" }}>This field is required</span>
        )}
        <p>
          {svg.phone}{" "}
          <span>
            <input
              type="text"
              defaultValue={contactPhoneNumber}
              {...register("updatedContactPhoneNumber", { required: true })}
            />
          </span>
        </p>
        {errors.updatedContactPhoneNumber && (
          <span style={{ color: "gray" }}>This field is required</span>
        )}
        <br />

        <button className="cancelBtn" onClick={onCancelEdit}>
          cancel
        </button>
        <button className="saveBtn" type="submit">
          {" "}
          save changes{" "}
        </button>
       
       
      </form>
      <br />
      {isSubmitSuccessful && <span style={{ color: "green" }}>The changes have been successfully saved</span>}
    </>
  );
};

export default ContactEdit;
