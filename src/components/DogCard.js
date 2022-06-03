import React, { useState } from "react";
import EditDog from "./EditDog";
function DogCard({ name, breed, age, trait, image, onDogDelete, id, onUpdateDog }) {
  const [adopt, setAdopt] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function handleDeleteClick() {
    fetch(`http://localhost:9292/dogs/${id}`, {
      method: "DELETE",
    });
    onDogDelete(id);
  }
  return (
    <div className="card">
      <img className="cardPic" src={image} alt={name} />
      <h2>{name}</h2>
      <ul className="traitList">
        <p>
          <em>
            
            <strong>Breed:</strong> {breed}{" "}
          </em>{" "}
        </p>
        <p>
          <em>
            <strong>Age:</strong> {age}
          </em>
        </p>
        <p>
          <em>
            <strong>Personality:</strong> {trait}
          </em>
        </p>
      </ul>
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>


      {adopt ? (
        <button className="adopted"> Adopted!</button>
      ) : (
        <button onClick={handleDeleteClick} className="primary">
          Adopt 🐕
        </button>

        
      )}
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
