import React, { useState, useEffect } from "react";
import ApplicantList from "./ApplicantList.js";

function ApplicantPage() {
  const [applicants, setApplicants] = useState([]);

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
}

export default ApplicantPage;