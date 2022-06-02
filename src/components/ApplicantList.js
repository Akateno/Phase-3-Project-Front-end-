import React from "react";

function ApplicantList({ applicants, setId }) {
  return (
    <div className="appList">
      <div>
        <ul>
          {applicants.map((applicant) => (
            <li className="appCard" onClick={() => setId(applicant.id)}>
              <h4>
                <span role="img" alt="User emoji">
                  👤
                </span>
                {applicant.name}
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApplicantList;
