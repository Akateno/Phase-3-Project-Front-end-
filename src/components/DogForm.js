import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormGroup, Button } from "@mui/material";

function DogForm({ handleAddDog }) {
  //const form = document.getElementById('form');
  const [name, setName] = React.useState("");
  const [breed, setBreed] = React.useState("");
  const [age, setAge] = React.useState("");
  const [trait, setTrait] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleNewDogs = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
        age,
        trait,
        image,
      }),
    })
      .then((resp) => resp.json())
      .then((newDog) => {
        handleAddDog(newDog);
      });
  };

  return (
    <div className="new-dog-form">
      <form onSubmit={handleNewDogs}>
        <Box
          sx={{
            justifyContent: "flex",
            flexDirection: "column",
            // "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h3>Add Dog</h3>
          <FormGroup
            onSubmit={handleNewDogs}
            sx={{
              width: "250px",
              minWidth: "200",
              padding: "60px",
              marginLeft: "25px",
              marginRight: "25px",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                padding: "5px",
              }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="breed"
              placeholder="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              sx={{
                padding: "5px",
              }}
            />
            <TextField
              id="outlined-number"
              type="number"
              variant="outlined"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              step="1"
              sx={{
                padding: "5px",
              }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="trait"
              placeholder="Trait"
              value={trait}
              onChange={(e) => setTrait(e.target.value)}
              sx={{
                padding: "5px",
              }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="image"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              sx={{
                padding: "5px",
              }}
            />
            <Button className="ui button" type="submit">
              Add Doggo
            </Button>
          </FormGroup>
        </Box>
      </form>
      {/* <form id="form" className="ui form" onSubmit={handleNewDogs}>
        <div className="inline fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            step="1"
          />
          <input
            type="text"
            name="trait"
            placeholder="Trait"
            value={trait}
            onChange={(e) => setTrait(e.target.value)}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Doggo
        </button>
      </form> */}
    </div>
  );
}

export default DogForm;
