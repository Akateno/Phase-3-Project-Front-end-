import React from "react";
import DogCard from "./DogCard";

function DogList ({doggos, onDogDelete}) {
  
  return (
    <div className="cards">
        {
        doggos.map((animal)=>(
          <DogCard
          id={animal.id}
          name={animal.name}
          breed={animal.breed}
          age={animal.age}
          trait={animal.trait}
          image={animal.image}
          onDogDelete={onDogDelete}
          doggos={doggos}
          />
        ))}
    </div>)
}

export default DogList