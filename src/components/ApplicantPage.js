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
    <div className="pendingApp">
      <h2 id="pendingAppHeader">Pending Applicants</h2>
      <ApplicantList applicants={applicants} />
    </div>
  );
}

export default ApplicantPage;
