import React from "react";
import Base from "../Base/Base";
import "./VisionHealth.css";

const VisionHealth = () => {
  return (
    <Base>
      <div className="vision-head">
        <div className="lense-header-div">
          <h1 className="lense-header">Vision Health</h1>
          <p className="lense-header-content">
          Routine Eye Exams to Maintain Eye Health.
          </p>
          
            <ul className="vision-ul">
              <li>Eye diseases can go undetected for a long time and possibly lead to vision loss. Serious eye health issues (including myopia, glaucoma, cataracts, macular degeneration and detached retinas) are more treatable when caught at the earliest stages.</li>
              <li>Vision screenings are not a substitute. Only a comprehensive eye exam can ensure you not only see clearly, but that you’re also free from potential eye health issues.</li>
              <li>In addition, comprehensive eye exams can detect other health problems (including diabetes, high blood pressure, and high cholesterol, among others).</li>
          
          </ul>
        </div>
        <div className="lense-main-grid">
          <div>
            <img
              src="https://www.siteforsoreeyes.com/wp-content/uploads/2022/12/shutterstock_618509528-461x355-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default VisionHealth;
