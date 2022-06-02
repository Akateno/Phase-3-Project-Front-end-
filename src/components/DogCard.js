import React, { useState } from "react";
function DogCard({ name, breed, age, trait, image, onDogDelete, id }) {
  const [adopt, setAdopt] = useState(false);
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
      {adopt ? (
        <button className="adopted"> Adopted!</button>
      ) : (
        <button onClick={handleDeleteClick} className="primary">
          Adopt 🐕
        </button>
      )}
    </div>
  );
}
export default DogCard;
