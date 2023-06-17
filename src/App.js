import React from "react";
import Aside from "./components/aside/index";
import './index.css'
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">

      <div className="main-wraperr">
        <Aside />

        <div className="Right-side">
          <Content />
        </div>

      </div>

    </div>
  );
}

export default App;
