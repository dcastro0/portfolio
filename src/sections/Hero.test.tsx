import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero section component", () => {
  it("renders author name heading correctly", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Caio de Castro");
  });

  it("renders highlight metrics items", () => {
    render(<Hero />);
    expect(screen.getByText("REST APIs")).toBeInTheDocument();
    expect(screen.getByText("Clean Code")).toBeInTheDocument();
  });
});
