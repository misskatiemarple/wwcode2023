import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchEngineSkills() {
  const [skill, setSkill] = useState("");
  const [job, setJob] = useState();

  function handleResponse(response) {
    setJob(response.data.employerId);
    console.log(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchAPI();
  }

  useEffect(() => {
    searchAPI();
  }, []);

  function searchAPI() {
    const apiKey = " 0d349a16-226b-4dbb-bce0-05eba19e3183";
    const apiUrl = " https://www.reed.co.uk/api/1.0/search?keywords={skill}";
    /*Have deleted location due to lack of Japan jobs on this free API. We'll need to address this in the future if we choose to continue the project*/

    axios
      .get(apiUrl, {
        headers: {
          Authorization: "Basic " + btoa(apiKey + ":"),
        },
      })
      .then(handleResponse)
      .catch((error) => console.error(error));
  }
  /*why are we getting a CORS error here?*/

  function updateSkill(event) {
    event.preventDefault();
    setSkill(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
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
