import React, { useEffect, useState } from "react";
import Search from "./Search";
import DogList from "./DogList";
import DogForm from "./DogForm";

function DogContainer() {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  // const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/dogs")
  //     .then((r) => r.json())
  //     .then((applicants) => setDogs(applicants));
  // }, []);

  function handleAddDog(newDog) {
    setDogs([...dogs, newDog]);
  }
  function handleDeleteDog(id) {
    const updatedDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogs);
  }

  const displayedDogs = dogs.filter((anim) =>
    anim.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dogcontainer">
      <h1 className="DogPageHeader">Happy Tails Animal Rescue!</h1>
      <Search searchTerm={search} onChangeSearch={setSearch} />
      {<DogForm handleAddDog={handleAddDog} />}
      <DogList doggos={displayedDogs} onDogDelete={handleDeleteDog} />
    </div>
  );
}

export default DogContainer;
