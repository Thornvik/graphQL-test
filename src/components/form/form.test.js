import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./form";

describe("form component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
    render(<Form />);
  });

  it("should render component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not display error if email is correct", async () => {
    let email = "test@gmail.com";
    fireEvent.input(screen.getByTestId("input", { name: /email/i }), {
      target: {
        value: email,
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.getByTestId("input", { name: /email/i }).value).toBe(
      email
    );
    expect(screen.getByTestId("itWorks")).toBeTruthy();
  });

  it("should display error if email is incorrect", async () => {
    let incorrectEmail = "test@gmail";
    fireEvent.input(screen.getByTestId("input", { name: /email/i }), {
      target: {
        value: incorrectEmail,
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.getByTestId("input", { name: /email/i }).value).toBe(
      incorrectEmail
    );
    expect(screen.getByTestId("error-text")).toBeTruthy();
  });
});
