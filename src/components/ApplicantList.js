import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

function ApplicantList({ applicants, setId }) {
  return (
    <div className="appList">
      <div>
        {/* <ul> */}
        {/* {applicants.map((applicant) => (
            <li className="appCard" onClick={() => setId(applicant.id)}>
              <h4>
                <span role="img" alt="User emoji">
                  👤
                </span>
                {applicant.name}
              </h4>
            </li>
          ))}
        </ul> */}
      </div>

      <List
        sx={{
          width: 750,
          maxWidth: 750,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 650,
          marginLeft: "66%",
          justifyContent: "right",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader></ListSubheader>
              {applicants.map((applicant) => (
                <ListItem
                  key={applicant.name}
                  className="appCard"
                  onClick={() => setId(applicant.id)}
                >
                  <span role="img" alt="User emoji">
                    👤
                  </span>
                  <ListItemText primary={applicant.name} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );
}

export default ApplicantList;
