
import "./ContactEdit.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

interface PositionEditProps {
  title: string;
  requirements: string | undefined;
  onCancelEdit: () => void;
}

interface PositionEditForm {
  updatedTitle: string;
  updatedRequirements: string | undefined;
  updatedSalary: string;
}

const PositionEdit: React.FC<PositionEditProps> = (props) => {
  const { title, requirements, onCancelEdit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PositionEditForm>();

  const onSubmit: SubmitHandler<PositionEditForm> = (
    data: PositionEditForm
  ) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>
          You applied as{" "}
          <input
            type="text"
            defaultValue={title}
            {...register("updatedTitle", { required: true })}
            autoFocus
          />
          <br />
          {errors.updatedTitle && (
            <span style={{ color: "gray" , fontSize:'small'}}>This field is required</span>
          )}
        </h4>
        <textarea
          defaultValue={requirements}
          {...register("updatedRequirements")}
        />
        <br />
        Expected salary:
        <input
          type="text"
          defaultValue={"10,000$"}
          {...register("updatedSalary")}
        />
        <br />
        <br />
        <button className="cancelBtn" onClick={onCancelEdit}>
          cancel
        </button>
        <button className="saveBtn" type="submit">
          {" "}
          save changes{" "}
        </button>
      </form>
    </>
  );
};

export default PositionEdit;
