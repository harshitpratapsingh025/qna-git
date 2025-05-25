import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import "@testing-library/jest-dom";

describe("Login Component", () => {
  test("renders the login form correctly", () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
