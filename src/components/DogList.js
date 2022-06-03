import React from "react";
import DogCard from "./DogCard";
function DogList({ doggos, onDogDelete, onUpdateDog }) {
  return (
    <div className="cards">
      {doggos.map((animal) => (
        <DogCard
          id={animal.id}
          key={animal.id}
          name={animal.name}
          breed={animal.breed}
          age={animal.age}
          trait={animal.trait}
          image={animal.image}
          onDogDelete={onDogDelete}
          onUpdateDog={onUpdateDog}
          
        />
      ))}
    </div>
  );
}
export default DogList;