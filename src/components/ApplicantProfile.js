import React from "react";

function ApplicantProfile({ applicant }) {
  

  return (
    <div>
      <div className="ProfileCard">
        {applicant ? (
          <div>
            <img
              className="appImage"
              src={applicant.image}
              alt={applicant.name}
            />
            <h4>Name: {applicant.name}</h4>
            <p>Job Title: {applicant.job}</p>
            <p>Location: {applicant.city}</p>
            <p>Pets owned: {applicant.pets_owned}</p>
            <h5>Applied for: </h5>
            
              {applicant.dog.name}
              <span role="img" alt="dog emoji">
                🐕
              </span>
              
          </div>
        ) : (
          <p>
            {" "}
            Please choose an applicant to display their application details.{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default ApplicantProfile;
