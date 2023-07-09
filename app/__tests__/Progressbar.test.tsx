import { render,screen } from "@testing-library/react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import * as React from "react";
import '@testing-library/jest-dom/extend-expect';

describe("ProgressBar", () => {
  it("renders the progress bar with correct progress and color", () => {
    const progress = 75;
    render(<ProgressBar progress={progress} testId="progress-bar-1" />);
  
    const progressBar = screen.getByTestId("progress-bar-1");
    expect(progressBar).toBeInTheDocument();
  
    const progressBarFill = progressBar.querySelector('.progressBarFill') ;
    const progressBarFillStyle = window.getComputedStyle(progressBarFill!);
    const progressBarFillWidth = progressBarFillStyle.getPropertyValue('width');
    const progressBarBackgroundColor = progressBarFillStyle.getPropertyValue('background-color');

    expect(progressBarFillWidth).toBe('75%');
    expect(progressBarBackgroundColor).toBe('lightblue');
  });

  it("renders the progress bar with correct progress and color", () => {
    const progress = 10;
    render(<ProgressBar progress={progress} testId="progress-bar-2" />);
  
    const progressBar = screen.getByTestId("progress-bar-2");
    expect(progressBar).toBeInTheDocument();
  
    const progressBarFill = progressBar.querySelector('.progressBarFill') ;
    const progressBarFillStyle = window.getComputedStyle(progressBarFill!);
    const progressBarFillWidth = progressBarFillStyle.getPropertyValue('width');
    const progressBarBackgroundColor = progressBarFillStyle.getPropertyValue('background-color');  
  
    expect(progressBarFillWidth).toBe('10%');   
    expect(progressBarBackgroundColor).toBe('lightblue');

  });

  it("renders the progress bar with progress exceeding 100% and correct color", () => {
    const progress = 120;

    const { getByTestId } = render(
      <ProgressBar progress={progress} testId="progress-bar-3" />,
    );

    const progressBar = getByTestId("progress-bar-3");

    expect(progressBar).toBeInTheDocument();
    const progressBarFill = progressBar.querySelector('.progressBarFill') ;
    const progressBarFillStyle = window.getComputedStyle(progressBarFill!);
    const progressBarFillWidth = progressBarFillStyle.getPropertyValue('width');
    const progressBarBackgroundColor = progressBarFillStyle.getPropertyValue('background-color');
  
    expect(progressBarFillWidth).toBe('100%');   
    expect(progressBarBackgroundColor).toBe('red');
  });

  it("does render the progress label when progress is 0%", () => {
    const progress = 0;

    const { queryByText } = render(
      <ProgressBar progress={progress} testId="progress-bar-1" />,
    );

    const progressLabel = queryByText("0%");

    expect(progressLabel).toBe;
  });
});
