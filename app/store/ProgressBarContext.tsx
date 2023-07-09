import React, { ReactNode, createContext, useState } from "react";

interface ProgressBarContextType {
  progress1: number;
  progress2: number;
  progress3: number;
  setProgress1: (value: number) => void;
  setProgress2: (value: number) => void;
  setProgress3: (value: number) => void;
}

const ProgressBarContext = createContext<ProgressBarContextType>({
  progress1: 0,
  progress2: 0,
  progress3: 0,
  setProgress1: () => {},
  setProgress2: () => {},
  setProgress3: () => {},
});

export const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  const value = {
    progress1,
    progress2,
    progress3,
    setProgress1,
    setProgress2,
    setProgress3,
  };

  return (
    <ProgressBarContext.Provider value={value}>
      {children}
    </ProgressBarContext.Provider>
  );
};

export default ProgressBarContext;
