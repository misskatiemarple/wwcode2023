import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MamaKeySkills from "./MamaKeySkills";

export default function SearchNoSkills() {
  return (
    <div class="button-box">
      <Router>
        <button type="button" class="btn btn-primary">
          {" "}
          <Link to="/component-link">What are my skills?</Link>
        </button>
        <Routes>
          <Route path="/MamaKeySkills.js" component={MamaKeySkills} />
        </Routes>
      </Router>
    </div>
  );
}
