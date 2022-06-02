import React, { useState } from "react";

function ApplicantProfile({ applicant, dogs, onUpdateApplicant }) {
  const [value, setValue] = useState("Dog applied for");

  function handleSelect(e) {
    setValue(e.target.value);
    // fetch(`http://localhost:9292/applicants/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     body: messageBody,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((updatedApplicant) => onUpdateApplicant(updatedApplicant);
  }

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
            <label>
              {applicant.dog.name}
              <span role="img" alt="dog emoji">
                🐕
              </span>
              <select value={value} onChange={handleSelect}>
                {dogs.map((dog) => {
                  return <option value={dog.name}>{dog.name}</option>;
                })}
              </select>
            </label>
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
