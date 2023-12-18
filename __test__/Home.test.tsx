import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); //arrange

    const myElement = screen.getByText("Docs"); // Act (acction we are taking)

    expect(myElement).toBeInTheDocument();
  });

  it("should have 'information' text", () => {
    render(<Home />); //arrange

    const myElement = screen.getByText(/information/i); // Act (acction we are taking) case insentitive

    expect(myElement).toBeInTheDocument();
  });
  it("Should have a heading element", () => {
    render(<Home />); //arrange

    const myElement = screen.getByRole("heading", { name: "Learn" }); // Act (acction we are taking) case insentitive

    expect(myElement).toBeInTheDocument();
  });
});
