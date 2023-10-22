import React, { useState } from "react";
import "./SearchNoSkills.css";

export default function SearchNoSkills() {
  const [showInfo, setShowInfo] = useState(false);

  function handleSubmit() {
    setShowInfo(true);
  }
  if (showInfo === true) {
    return (
      <div class="mama-page">
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          What Are My Skills?
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          velit et mauris feugiat aliquam. Nulla elementum augue sit amet
          pharetra sagittis. Phasellus sit amet egestas dolor, vel faucibus
          metus. In hac habitasse platea dictumst. Sed egestas varius porta. Nam
          cursus diam vitae consequat congue.
        </p>
        <div className="tskills-box">
          <ul>
            <li>
              <input
                type="checkbox"
                id="skill1"
                name="skill1"
                value="communication"
              />
              <label htmlFor="skill1">Communiation</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill2"
                name="skill2"
                value="leadership"
              />
              <label htmlFor="skill2">Leadership</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill3"
                name="skill3"
                value="planning"
              />
              <label htmlFor="skill3">Planning</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill4"
                name="skill4"
                value="multi-tasking"
              />
              <label htmlFor="skill4">Multitasking</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill5"
                name="skill5"
                value="negotiation"
              />
              <label htmlFor="skill5">Negotiation</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill6"
                name="skill6"
                value="crisis management"
              />
              <label htmlFor="skill6">Crisis Management</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill7"
                name="skill7"
                value="prioritizing"
              />
              <label htmlFor="skill7">Prioritizing</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill8"
                name="skill8"
                value="organization"
              />
              <label htmlFor="skill8">Organization</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill9"
                name="skill9"
                value="teaching"
              />
              <label htmlFor="skill9">Teaching</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill10"
                name="skill10"
                value="mentoring"
              />
              <label htmlFor="skill10">Mentoring</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill11"
                name="skill11"
                value="problem solving"
              />
              <label htmlFor="skill11">Problem Solving</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="skill12"
                name="skill12"
                value="collaboration"
              />
              <label htmlFor="skill12">Collaboration</label>
            </li>
          </ul>
          <button type="button" class="btn btn-primary">
            Search for skills-related jobs
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div class="mama-page">
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          What Are My Skills?
        </button>
      </div>
    );
  }
}
