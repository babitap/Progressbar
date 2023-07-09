import React, { useContext, useState, useCallback } from "react";
import ProgressBarContext from "../../store/ProgressBarContext";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./progressBarContainer.css";

const ProgressBarContainer: React.FC = React.memo(() => {
  const {
    progress1,
    progress2,
    progress3,
    setProgress1,
    setProgress2,
    setProgress3,
  } = useContext(ProgressBarContext);

  const [selectedProgress, setSelectedProgress] = useState("progress1");

  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedProgress(event.target.value);
    },
    []
  );

  const handleIncreaseProgress = useCallback(
    (increment: number) => {
      if (selectedProgress === "progress1") {
        const updatedProgress = Math.max(progress1 + increment, 0);
        setProgress1(updatedProgress);
      } else if (selectedProgress === "progress2") {
        const updatedProgress = Math.max(progress2 + increment, 0);
        setProgress2(updatedProgress);
      } else if (selectedProgress === "progress3") {
        const updatedProgress = Math.max(progress3 + increment, 0);
        setProgress3(updatedProgress);
      }
    },
    [selectedProgress, progress1, progress2, progress3, setProgress1, setProgress2, setProgress3]
  );

  return (
    <div className="dialogContainer">
      <h1 className="dialogHeading">Progress Bars Demo</h1>
      <div className="progressBarContainer">
        <ProgressBar testId="progress-bar-1" progress={progress1} />
      </div>
      <div className="progressBarContainer">
        <ProgressBar testId="progress-bar-2" progress={progress2} />
      </div>
      <div className="progressBarContainer">
        <ProgressBar testId="progress-bar-3" progress={progress3} />
      </div>
      <div className="selectContainer">
        <select
          className="selectElement"
          data-testid="progress-select"
          value={selectedProgress}
          onChange={handleSelectChange}
        >
          <option value="progress1">#progress1</option>
          <option value="progress2">#progress2</option>
          <option value="progress3">#progress3</option>
        </select>
      </div>
      <div className="buttonContainer">
        <button onClick={() => handleIncreaseProgress(-25)}>-25</button>
      </div>
      <div className="buttonContainer">
        <button onClick={() => handleIncreaseProgress(-10)}>-10</button>
      </div>
      <div className="buttonContainer">
        <button onClick={() => handleIncreaseProgress(10)}>+10</button>
      </div>
      <div className="buttonContainer">
        <button onClick={() => handleIncreaseProgress(25)}>+25</button>
      </div>
    </div>
  );
});

export default ProgressBarContainer;
