import {
  render,
  fireEvent,
  screen
} from "@testing-library/react";
import ProgressBarContainer from "../components/ProgressBarContainer/ProgressBarContainer";
import { ProgressBarProvider } from "../store/ProgressBarContext";
import * as React from "react";
import userEvent from "@testing-library/user-event";

describe("Dialog", () => {
  it("renders the dialog with progress bars and buttons", () => {
    const { getByText, getByTestId } = render(
      <ProgressBarProvider>
        <ProgressBarContainer />
      </ProgressBarProvider>,
    );

    expect(getByText("Progress Bars Demo")).toBeInTheDocument();
    expect(getByTestId("progress-bar-1")).toBeInTheDocument();
    expect(getByTestId("progress-bar-1")).toHaveTextContent("0%");
    expect(getByText("#progress1")).toBeInTheDocument();
    expect(getByText("#progress2")).toBeInTheDocument();
    expect(getByText("#progress3")).toBeInTheDocument();
    expect(getByText("-25")).toBeInTheDocument();
    expect(getByText("-10")).toBeInTheDocument();
    expect(getByText("+10")).toBeInTheDocument();
    expect(getByText("+25")).toBeInTheDocument();

   
    const selectElement = getByTestId("progress-select");
    userEvent.type(selectElement, "progress1");
  });

  it("increases the progress when the buttons are clicked", () => {
    const { getByTestId, getByText } = render(
      <ProgressBarProvider>
        <ProgressBarContainer />
      </ProgressBarProvider>,
    );

    const selectDropdown = getByTestId("progress-select");
    const decreaseButton25 = getByText("-25");
    const decreaseButton10 = getByText("-10");
    const increaseButton10 = getByText("+10");
    const increaseButton25 = getByText("+25");
  
    userEvent.type(selectDropdown, "#progress1");
    fireEvent.click(decreaseButton25);
    expect(getByTestId("progress-bar-1")).toHaveTextContent("0%");
    fireEvent.click(decreaseButton10);
    expect(getByTestId("progress-bar-1")).toHaveTextContent("0%");
    fireEvent.click(increaseButton10);
    expect(getByTestId("progress-bar-1")).toHaveTextContent("10%");
    fireEvent.click(increaseButton25);
    expect(getByTestId("progress-bar-1")).toHaveTextContent("35%");
  });

  it("increases the progress when the buttons are clicked", async () => {
    const { getByTestId, getByText } = render(
      <ProgressBarProvider>
        <ProgressBarContainer />
      </ProgressBarProvider>,
    );

    const user = userEvent.setup();
    const selectDropdown = getByTestId("progress-select");
    const decreaseButton25 = getByText("-25");
    const decreaseButton10 = getByText("-10");
    const increaseButton10 = getByText("+10");
    const increaseButton25 = getByText("+25");

    const selectOption = screen.getAllByRole("option", {
      name: "#progress2",
    })[0];
    await user.selectOptions(selectDropdown, selectOption);
    expect(
      (
        screen.getAllByRole("option", {
          name: "#progress2",
        })[0] as HTMLOptionElement
      ).selected,
    ).toBe(true);

    fireEvent.click(decreaseButton25);
    expect(getByTestId("progress-bar-2")).toHaveTextContent("0%");
    fireEvent.click(decreaseButton10);
    expect(getByTestId("progress-bar-2")).toHaveTextContent("0%");
    fireEvent.click(increaseButton10);
    expect(getByTestId("progress-bar-2")).toHaveTextContent("10%");
    fireEvent.click(increaseButton25);
    expect(getByTestId("progress-bar-2")).toHaveTextContent("35%");
  });

  it("increases the progress when the buttons are clicked", async () => {
    const { getByTestId, getByText } = render(
      <ProgressBarProvider>
        <ProgressBarContainer />
      </ProgressBarProvider>,
    );
    const user = userEvent.setup();
    const selectDropdown = getByTestId("progress-select");
    const decreaseButton25 = getByText("-25");
    const decreaseButton10 = getByText("-10");
    const increaseButton10 = getByText("+10");
    const increaseButton25 = getByText("+25");

    const selectOption = screen.getAllByRole("option", {
      name: "#progress3",
    })[0];
    await user.selectOptions(selectDropdown, selectOption);
    expect(
      (
        screen.getAllByRole("option", {
          name: "#progress3",
        })[0] as HTMLOptionElement
      ).selected,
    ).toBe(true);
 
    fireEvent.click(decreaseButton25);
    expect(getByTestId("progress-bar-3")).toHaveTextContent("0%");
    fireEvent.click(decreaseButton10);
    expect(getByTestId("progress-bar-3")).toHaveTextContent("0%");
    fireEvent.click(increaseButton10);
    expect(getByTestId("progress-bar-3")).toHaveTextContent("10%");
    fireEvent.click(increaseButton25);
    expect(getByTestId("progress-bar-3")).toHaveTextContent("35%");
  });
});
