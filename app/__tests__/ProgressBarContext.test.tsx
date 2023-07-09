import { render, screen } from "@testing-library/react";
import { ProgressBarProvider } from "../store/ProgressBarContext";
import * as React from "react";

describe("ProgressBarProvider", () => {
  it("renders the provider and its children", () => {
    render(
      <ProgressBarProvider>
        <div>Test</div>
      </ProgressBarProvider>,
    );

    const testElement = screen.getByText("Test");
    expect(testElement).toBeInTheDocument();
  });
});
