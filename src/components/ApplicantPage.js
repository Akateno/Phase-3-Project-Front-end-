import React, { useState, useEffect } from "react";
import ApplicantList from "./ApplicantList.js";

function ApplicantPage() {
  const [applicants, setApplicants] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    fetch("http://localhost:9292/applicants")
      .then((res) => res.json())
      .then((applicants) => setApplicants(applicants));
  }, []);

  return (
    <div>
      <h2>Applicant List</h2>
      <ApplicantList applicants={applicants} />
    </div>
  );
=======
function ApplicantPage( ) {

  useEffect(() => {
    const [applicants, setApplicants] = useState([]);

    fetch("http://localhost:9292/applicants")
      .then((r) => r.json())
      .then((data) => setApplicants(data));
  }, []);

  

  <div>
    <h1>{name}</h1>
    <p>{job}</p>
    <p>{city}</p>
    <p>{pets_owned}</p>
    <p>{pet_id}</p>
  </div>,
  <div>
    <h2>applicants</h2>
    <p>{applicants}</p>
  </div>
>>>>>>> b02ad49 (still working)
}

export default ApplicantPage;
