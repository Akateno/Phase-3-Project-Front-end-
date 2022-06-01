
import React from "react";

function ApplicantCard({ applicant }) {
  return (
    <div>
      <img className="avatarImg" src={applicant.image} alt={applicant.name} />
      <h4>{applicant.name}</h4>
      <p>{applicant.job}</p>
      <p>{applicant.location}</p>
      <p>Pets owned: {applicant.pets_owned}</p>
      <h5>Applied For: </h5>
      {/* <p> {applicant.dog.name}</p> */}
    </div>
  );
}

export default ApplicantCard;
