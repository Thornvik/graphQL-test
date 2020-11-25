import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

    expect(screen.getByTestId("input", { name: /email/i }).value).toBe(
      "test@gmail.com"
    );
    expect(screen.getByTestId("itWorks")).toBeTruthy();
  });
});
