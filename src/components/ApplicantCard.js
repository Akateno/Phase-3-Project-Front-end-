import React from "react";

function ApplicantCard({ applicant }) {
  return (
    <div>
      <h4>{applicant.name}</h4>
      <p>{applicant.job}</p>
      <p>{applicant.location}</p>
      <p>Pets owned: {applicant.pets_owned}</p>
    </div>
  );
}

export default ApplicantCard;
