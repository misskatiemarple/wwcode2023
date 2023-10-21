import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MamaKeySkills from "./MamaKeySkills.js";
/* Why doesn't this Mama key skills component connect in teh Router?*/
import "./SearchNoSkills.css";

export default function SearchNoSkills() {
  return (
    <div class="button-box">
      <Router>
        <button type="button" class="btn btn-primary">
          {" "}
          <Link to="/component-link" className="button-link">
            What Are My Skills?
          </Link>
        </button>
        <Routes>
          <Route path="/MamaKeySkills.js" component={<MamaKeySkills />} />
        </Routes>
      </Router>
    </div>
  );
}
