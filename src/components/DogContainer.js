
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

  // hopefully updates dogs
  function handleUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) => {
      if (dog.id === updatedDog.id) {
        return updatedDog;
      } else {
        return dog;
      }
    });
    setDogs(updatedDogs);
  }



  return (
    <div className="dogcontainer">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Kumbh+Sans:wght@500;600&family=Source+Code+Pro:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <h1 className="DogPageHeader">Happy Tails Animal Rescue!</h1>
      <Search searchTerm={search} onChangeSearch={setSearch} />
      {<DogForm handleAddDog={handleAddDog} />}
      <DogList doggos={displayedDogs} onDogDelete={handleDeleteDog} onUpdateDog={handleUpdateDog} />
    </div>
  );
}
export default DogContainer;