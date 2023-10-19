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
        placeholder="Previous work, skills, etc."
        autoFocus={true}
        onChange={updateSkill}
      />
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </form>
  );
}
