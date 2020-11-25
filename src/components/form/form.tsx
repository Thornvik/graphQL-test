import { resetApolloContext } from "@apollo/client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import "./form.scss";

type FormValues = {
  email: string;
};

export const Form = () => {
  //defValue is only used for testing
  const { handleSubmit, register, errors, reset } = useForm({ mode: "onBlur" });
  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
  };

  return (
    <div className="input-container">
      <h1>React Hook Form</h1>
      <h2>open console to se if it works should only work with valid emails</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="email"
          name="email"
          type="email"
          ref={register({
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Entered value does not match email format",
            },
          })}
          className="input-field"
          placeholder="Enter a email"
          data-testid="input"
        />
        <button type="submit" className="input-button">
          Submit
        </button>
        {errors.email ? (
          <p data-testid="error-text" className="invalid">
            {errors.email.message}
          </p>
        ) : (
          <p data-testid="itWorks" className="invalid">
            It works
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
