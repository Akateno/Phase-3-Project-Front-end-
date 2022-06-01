import React from "react";
import ApplicantCard from "./ApplicantCard";

function ApplicantList({ applicants }) {
  function handleListClick() {
    ///
  }
  return (
    <div className="appList">
      <ul>
        {applicants.map((applicant) => (
          <ApplicantCard
            key={applicant.id}
            applicant={applicant}
            onClick={handleListClick}
          />
        ))}
      </ul>
      <div className="ProfileCard">
        <h2>Applicant Profile</h2>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default ApplicantList;
