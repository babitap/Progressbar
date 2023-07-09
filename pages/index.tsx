import * as React from "react";
import ProgressBarContainer from "../app/components/ProgressBarContainer/ProgressBarContainer";
import { ProgressBarProvider } from "../app/store/ProgressBarContext";
import "./index.css";

const App: React.FC<{}> = () => {
  return (
    <ProgressBarProvider>
      <div className="app-container">
        <ProgressBarContainer />
      </div>
    </ProgressBarProvider>
  );
};

export default App;
