import React from "react";
// import logo from "./src/HTlogo.png";
function Home() {
  return (
    <div className="homePage">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Kumbh+Sans:wght@500;600&family=Source+Code+Pro:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <div className="logoBackground">
        {/* <h1 className="hometitle">Happy Tails Animal Rescue</h1>
        <img src="./src/images/HTlogo.png" alt="Happy Tails Logo" /> */}
      </div>
      <div>
      <h1 className="nameText">PetMatcher</h1>
        <h3 className="homeText">
          Review available animals, and process adoption applications with ease!
        </h3>
      </div>
      <div class="custom-shape-divider-bottom-1654126488">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
