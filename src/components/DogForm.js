import React, { useState } from "react";

function DogForm({handleAddDog}) {
  //const form = document.getElementById('form');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [trait, setTrait] = useState('');
  const [image, setImage] = useState('');
  

  const handleNewDogs =(e)=>{
    e.preventDefault();
      
    fetch('http://localhost:9292/dogs',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name,
        breed,
        age,
        trait,
        image
      }),
    }).then(resp=>resp.json())
      .then(newDog =>{

      handleAddDog(newDog); 
      
    });
      
  
};

  return (
<<<<<<< HEAD
      <div className="ui segment"> 
        <form id='form' className="ui form" onClick={handleNewDogs} >
=======
      <div className="ui segment">
        <form id='form' className="ui form" onSubmit={handleNewDogs} >
>>>>>>> d92aa8c (fixed the form)
          <div className="inline fields" >
            <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="breed" placeholder="Breed" value={breed} onChange={(e)=>setBreed(e.target.value)} />
            <input type="number" name="age" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} step="1"/>
            <input type="text" name="trait" placeholder="Trait"value={trait} onChange={(e)=>setTrait(e.target.value)} />
            <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=>setImage(e.target.value)} />
          </div>
          <button className="ui button" type="submit">
            Add Doggo
          </button>
        </form>
      </div>
    );
  }

export default DogForm;

// function EditMessage({ id, body, onUpdateMessage }) {
//   const [messageBody, setMessageBody] = useState(body);

//   function handleFormSubmit(e) {
//     e.preventDefault();
    

//     fetch(`http://localhost:4000/messages/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: messageBody,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedMessage) => onUpdateMessage(updatedMessage));
//   }

//   return (
//     <form className="edit-message" onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         name="body"
//         autoComplete="off"
//         value={messageBody}
//         onChange={(e) => setMessageBody(e.target.value)}
//       />
//       <input type="submit" value="Save" />
//     </form>
//   );
// }
