import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

/* Why doesn't this Mama key skills component connect in the Router?*/
import "./SearchNoSkills.css";

export default function SearchNoSkills() {
  return (
    <div class="button-box">
      <Router>
        <button type="button" class="btn btn-primary">
          {" "}
          <Link to="/mama" className="button-link">
            What Are My Skills?
          </Link>
        </button>
        <Routes>
          <Route path="/mama" element={<MamaKeySkills />} />
        </Routes>
      </Router>
    </div>
  );
}
