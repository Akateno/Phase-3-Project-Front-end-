import React from "react";

function ApplicantCard({ applicant }) {
  return (
    <div className="appCard">
      <img className="appImage" src={applicant.image} alt={applicant.name} />
      <h4>Name: {applicant.name}</h4>
      <p>Job Title: {applicant.job}</p>
      <p>Location: {applicant.city}</p>
      <p>Pets owned: {applicant.pets_owned}</p>
      <h5>Applied for: </h5>
      <p>{applicant.dog.name} 🐕</p>
    </div>
  );
}

export default ApplicantCard;
