import React, { useEffect, useState } from "react";
import DogContainer from "./DogContainer"
import NavBar from "./NavBar"
import ApplicantPage from "./ApplicantPage"




function App() {
  
  const [dogs, setDogs] = useState([]);
  const [applicant, setApplicants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then((r) => r.json())
      .then((dogs) => setDogs(dogs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/applicants")
      .then((r) => r.json())
      .then((applicants) => setDogs(applicants));
  }, []);


  function handleDogs(newDog) {
    setDogs([...dogs, newDog]);
  }

  // function handleDeleteMessage(id) {
  //   const updatedMessages = messages.filter((message) => message.id !== id);
  //   setMessages(updatedMessages);
  // }

  // function handleUpdateMessage(updatedMessageObj) {
  //   const updatedMessages = messages.map((message) => {
  //     if (message.id === updatedMessageObj.id) {
  //       return updatedMessageObj;
  //     } else {
  //       return message;
  //     }
  //   });
  //   setMessages(updatedMessages);
  // }

  // const displayedMessages = messages.filter((message) =>
  //   message.body.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <main>
     <DogContainer/>
     <NavBar/>
     <ApplicantPage/>


    </main>
  );
}

export default App;
