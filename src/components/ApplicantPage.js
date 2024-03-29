import React, { useState, useEffect } from "react";
import ApplicantList from "./ApplicantList.js";
import ApplicantProfile from "./ApplicantProfile";

function ApplicantPage() {
  const [applicants, setApplicants] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/applicants")
      .then((res) => res.json())
      .then((applicants) => setApplicants(applicants));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((res) => res.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  const selectedApplicant = applicants.find((a) => a.id === id);

  return (
    <div className="pendingApp">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Kumbh+Sans:wght@500;600&family=Source+Code+Pro:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <h2 id="pendingAppHeader">Pending Applications</h2>
      <div className="rowC">
        <ApplicantProfile applicant={selectedApplicant} dogs={dogs} />
        <ApplicantList setId={setId} applicants={applicants} />
      </div>
      {/* <ApplicantProfile applicant={selectedApplicant} dogs={dogs} />
      <ApplicantList setId={setId} applicants={applicants} /> */}
    </div>
  );
}

export default ApplicantPage;
