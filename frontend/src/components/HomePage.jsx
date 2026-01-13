import React from "react";
import TimerPage from "./TimerPage";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Pomodoro Timer!</h1>
      <button>Start</button>
      <TimerPage />
    </div>
  );
};

export default HomePage;
