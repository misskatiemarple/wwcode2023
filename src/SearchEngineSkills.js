import React, { useState } from "react";

export default function SearchEngineSkills() {
  let [skill, setSkill] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${skill}`);
  }
  function updateSkill(event) {
    setSkill(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Previous work, skills..."
        autoFocus={true}
        onChange={updateSkill}
        className="p-1 m-2"
      />
      <button type="button" class="btn btn-primary">
        Search
      </button>
    </form>
  );
}
