import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function EditDog({ id, name, breed, age, trait, onUpdateDog, image }) {
  const [names, setNames] = React.useState(name);
  const [breeds, setBreeds] = React.useState(breed);
  const [ages, setAges] = React.useState(age);
  const [traits, setTraits] = React.useState(trait);
  const [images, setImages] = React.useState(image);

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log("Hello");
    fetch(`http://localhost:9292/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names,
        breeds,
        ages,
        traits,
        images,
      }),
    })
      .then((r) => r.json())
      .then((updatedDogs) => onUpdateDog(updatedDogs));
  }

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField
    //     id="outlined-basic"
    //     variant="outlined"
    //     type="text" onChange={(e) => setNames(e.target.value)} value={names} name="name" placeholder="Doggie"
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     variant="outlined"
    //     type="text" onChange={(e) => setBreeds(e.target.value)} value={breeds} name="breed" placeholder="breed"
    //   />
    //   <TextField
    //     id="outlined-number"
    //     type="url" onChange={(e) => setImages(e.target.value)} value={images} name="image" placeholder="Image URL"
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     variant="outlined"
    //    type="text" onChange={(e) => setAges(e.target.value)} value={ages} name="age" placeholder="age"
    //   />{" "}
    //   />
    //   <TextField
    //     id="outlined-basic"
    //     variant="outlined"

    //   />
    // </Box>
    <form className="edit-dog" onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={(e) => setNames(e.target.value)}
        value={names}
        name="name"
        placeholder="Doggie"
      />
      <input
        type="text"
        onChange={(e) => setBreeds(e.target.value)}
        value={breeds}
        name="breed"
        placeholder="breed"
      />
      <input
        type="url"
        onChange={(e) => setImages(e.target.value)}
        value={images}
        name="image"
        placeholder="Image URL"
      />
      <input
        type="text"
        onChange={(e) => setAges(e.target.value)}
        value={ages}
        name="age"
        placeholder="age"
      />
      <input
        type="text"
        onChange={(e) => setTraits(e.target.value)}
        value={traits}
        name="trait"
        placeholder="trait"
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditDog;
