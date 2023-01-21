import React from "react";
import { Route, Routes } from "react-router";
// @ts-ignore
import Home from "./components/Home.tsx";


function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
