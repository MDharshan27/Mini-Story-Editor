import React from "react";
import StoryEditor from "./components/StoryEditor";
import StoriesList from "./components/StoriesList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Mini Story Editor</h1>
      <div className="editor-layout">
        <div className="left-panel">
          <StoryEditor />
        </div>
        <div className="right-panel">
          <StoriesList />
        </div>
      </div>
    </div>
  );
}

export default App;

