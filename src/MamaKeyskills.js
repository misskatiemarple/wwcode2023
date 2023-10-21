import React from "react";
import "./MamaKeySkills.css";

export default function MamaKeySkills() {
  return (
    <div className="MamaKeySkills-wrapper">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit
        et mauris feugiat aliquam. Nulla elementum augue sit amet pharetra
        sagittis. Phasellus sit amet egestas dolor, vel faucibus metus. In hac
        habitasse platea dictumst. Sed egestas varius porta. Nam cursus diam
        vitae consequat congue.
      </p>
      <div className="tskills-box">
        <form>
          <input
            type="checkbox"
            id="skill1"
            name="skill1"
            value="communication"
          />
          <label htmlFor="skill1">Communiation</label>

          <input type="checkbox" id="skill2" name="skill2" value="leadership" />
          <label htmlFor="skill2">Leadership</label>

          <input type="checkbox" id="skill3" name="skill3" value="planning" />
          <label htmlFor="skill3">Planning</label>

          <input
            type="checkbox"
            id="skill4"
            name="skill4"
            value="multi-tasking"
          />
          <label htmlFor="skill4">Multitasking</label>

          <input
            type="checkbox"
            id="skill5"
            name="skill5"
            value="negotiation"
          />
          <label htmlFor="skill5">Negotiation</label>

          <input
            type="checkbox"
            id="skill6"
            name="skill6"
            value="crisis management"
          />
          <label htmlFor="skill6">Crisis Management</label>

          <input
            type="checkbox"
            id="skill7"
            name="skill7"
            value="prioritizing"
          />
          <label htmlFor="skill7">Prioritizing</label>

          <input
            type="checkbox"
            id="skill8"
            name="skill8"
            value="organization"
          />
          <label htmlFor="skill8">Organization</label>

          <input type="checkbox" id="skill9" name="skill9" value="teaching" />
          <label htmlFor="skill9">Teaching</label>

          <input
            type="checkbox"
            id="skill10"
            name="skill10"
            value="mentoring"
          />
          <label htmlFor="skill10">Mentoring</label>

          <input
            type="checkbox"
            id="skill11"
            name="skill11"
            value="problem solving"
          />
          <label htmlFor="skill11">Problem Solving</label>

          <input
            type="checkbox"
            id="skill12"
            name="skill12"
            value="collaboration"
          />
          <label htmlFor="skill12">Collaboration</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
