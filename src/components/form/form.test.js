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
    fireEvent.input(screen.getByTestId("input", { name: /email/i }), {
      target: {
        value: "test@gmail.com",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.getByTestId("input", { name: /email/i }).value).toBe(
      "test@gmail.com"
    );
    expect(screen.getByTestId("itWorks")).toBeTruthy();
  });

  it("should display error if email is incorrect", async () => {
    fireEvent.input(screen.getByTestId("input", { name: /email/i }), {
      target: {
        value: "testgmail.com",
      },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.getByTestId("input", { name: /email/i }).value).toBe(
      "testgmail.com"
    );
    expect(screen.getByTestId("error-text")).toBeTruthy();
  });
});
