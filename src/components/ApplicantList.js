import React from "react";
import ApplicantCard from "./ApplicantCard";

function ApplicantList({ applicants }) {
  function handleListClick() {
    ///
  }
  return (
    <div className="appList">
      <div>
        {applicants.map((applicant) => (
          <ApplicantCard
            key={applicant.id}
            applicant={applicant}
            onClick={handleListClick}
          />
        ))}
      </div>
      <div className="ProfileCard">
        {/* <h2>Applicant Profile</h2> */}
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default ApplicantList;
