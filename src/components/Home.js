import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useHistory, Link } from "react-router-dom";
import logo from "../images/HTlogo.png";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// import logo from "./src/HTlogo.png";
function Home() {
  let history = useHistory();

  return (
    <Container maxWidth="100%">
      <div className="homePage">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Kumbh+Sans:wght@500;600&family=Source+Code+Pro:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <div className="logoBackground">
          <h1 className="nameText">PetMatcher</h1>
          <img src={logo} alt="Happy Tails Logo" />
          <h3 className="homeText">
            Review available animals, and process adoption applications with
            ease!
          </h3>
          <div className="home-button-container">
            <Grid container justify="center">
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/adopt"
                >
                  Adoptable Pets
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/applicants"
                >
                  Pending Applications
                </Button>
              </Stack>
            </Grid>
          </div>
        </div>
        <div class="paw-print-1">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-2">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-3">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-4">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-5">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-6">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-7">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>

        <div class="paw-print-8">
          <div class="pad large"></div>
          <div class="pad small-1"></div>
          <div class="pad small-2"></div>
          <div class="pad small-3"></div>
          <div class="pad small-4"></div>
        </div>
        <div>
          {/* <h3 className="homeText">
            Review available animals, and process adoption applications with
            ease!
          </h3> */}
          {/* <Stack spacing={2} direction="row">
            <Button variant="contained" component={Link} to="/adopt">
              Adoptable Pets
            </Button>
            <Button variant="contained" component={Link} to="/applicants">
              Pending Applications
            </Button>
          </Stack> */}
        </div>
      </div>
    </Container>
  );
}

export default Home;
