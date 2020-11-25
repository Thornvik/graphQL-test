import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import "./input.scss";

type FormValues = {
  email: string;
};

const Input = () => {
  const { handleSubmit, register, errors } = useForm({ mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = () => console.log("valid email");

  return (
    <div className="input-container">
      <h1>React Hook Form</h1>
      <h2>
        open console to se if it works, should only work with valid emails
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register({
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className="input-field"
          placeholder="Enter a email"
        />
        <button type="submit" className="input-button">
          Submit
        </button>
        {errors.email ? <p className="invalid">invalid email</p> : null}
      </form>
    </div>
  );
};

export default Input;
