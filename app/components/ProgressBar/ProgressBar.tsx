import React, { useMemo, useCallback } from "react";
import "./progressBar.css";

interface ProgressBarProps {
  progress: number;
  testId?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = React.memo(({ progress, testId }) => {
  const clampedProgress = useMemo(() => Math.max(progress, 0), [progress]);
  const percentage = useMemo(() => `${Math.round(clampedProgress)}%`, [clampedProgress]);
  const color = useMemo(() => clampedProgress <= 100 ? "lightblue" : "red", [clampedProgress]);

  const progressBarFillWidth = useMemo(() => Math.min(progress, 100), [progress]);

  const renderProgressBarFill = useCallback(() => {
    if (progress > 0) {
      return (
        <div
          className="progressBarFill"
          style={{ width: `${progressBarFillWidth}%`, backgroundColor: color }}
        />
      );
    }
    return null;
  }, [progress, progressBarFillWidth, color]);

  return (
    <div className="progressBarContainer">
      <div className="progressBar" data-testid={testId}>
        {renderProgressBarFill()}
        <span className="progressBarText">{percentage}</span>
      </div>
    </div>
  );
});

export default ProgressBar;
