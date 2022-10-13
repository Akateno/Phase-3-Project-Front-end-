import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditDog from "./EditDog";
function DogCard({
  name,
  breed,
  age,
  trait,
  image,
  onDogDelete,
  id,
  onUpdateDog,
}) {
  const [adopt, setAdopt] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${id}`, {
      method: "DELETE",
    });
    onDogDelete(id);
  }
  return (
    // <div className="card">
    <div>
      <Card
        spacing={2}
        sx={{ maxWidth: 700, margin: "auto", padding: 10, spacing: 2 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="375"
            image={image}
            alt={name}
            borderRadius="8"
          />
          <CardContent>
            <h2>{name}</h2>
            <p>
              <strong>Breed:</strong> {breed}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Personality:</strong> {trait}
            </p>

            <Button
              variant="outlined"
              size="small"
              onClick={() => setIsEditing((isEditing) => !isEditing)}
            >
              <span role="img" aria-label="edit">
                ✏️ Edit Details
              </span>
            </Button>
            {adopt ? (
              <Button variant="outlined" size="small" className="adopted">
                Adopted!
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="small"
                onClick={handleDeleteClick}
                className="primary"
              >
                Adopt{" "}
                <span src="icon" alt="">
                  🐕
                </span>
              </Button>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      {isEditing ? (
        <EditDog
          id={id}
          name={name}
          breed={breed}
          age={age}
          trait={trait}
          image={image}
          onUpdateDog={onUpdateDog}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default DogCard;
