import { render } from "@testing-library/react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import * as React from "react";

describe("ProgressBar", () => {
  test("renders the progress bar with correct progress and color", () => {
    const progress = 75;

    const { getByText, getByTestId } = render(
      <ProgressBar progress={progress} testId="progress-bar" />,
    );

    const progressBar = getByTestId("progress-bar");
    const progressLabel = getByText(`${progress}%`);

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle(`width: ${progress}%`);
    expect(progressBar).toHaveStyle("background-color: lightblue");
    expect(progressLabel).toBeInTheDocument();
  });

  test("renders the progress bar with 0% progress and correct color", () => {
    const progress = 0;

    const { getByTestId } = render(
      <ProgressBar progress={progress} testId="progress-bar" />,
    );

    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 0%");
    expect(progressBar).toHaveStyle("background-color: lightblue");
  });

  test("renders the progress bar with progress exceeding 100% and correct color", () => {
    const progress = 120;

    const { getByTestId } = render(
      <ProgressBar progress={progress} testId="progress-bar" />,
    );

    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 100%");
    expect(progressBar).toHaveStyle("background-color: red");
  });

  test("does render the progress label when progress is 0%", () => {
    const progress = 0;

    const { queryByText } = render(
      <ProgressBar progress={progress} testId="progress-bar" />,
    );

    const progressLabel = queryByText("0%");

    expect(progressLabel).toBe;
  });
});
