import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ApplicantProfile({ applicant }) {
  // function handleDeleteClick() {
  //   fetch(`http://localhost:9292/dogs/${id}`, {
  //     method: "DELETE",
  //   });
  //   onDogDelete(id);
  // }

  return (
    <div className="ProfileCard">
      <div>
        {applicant ? (
          <div>
            {/* <img
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
            <span src="img" alt="dog emoji">
              🐕 */}
            {/* </span> */}
            <Card sx={{ maxWidth: 900 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="375"
                  image={applicant.image}
                  alt={applicant.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {applicant.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Job Title: {applicant.job}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Location: {applicant.city}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Pets owned: {applicant.pets_owned}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Applied for: {applicant.dog.name}
                    <span src="img" alt="dog emoji">
                      🐕
                    </span>{" "}
                  </Typography>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" size="large">
                      Approve
                    </Button>
                    <Button variant="contained" size="large">
                      Decline
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ) : (
          <p>
            Please choose an applicant to display their application details.
          </p>
        )}
      </div>
    </div>
  );
}

export default ApplicantProfile;
