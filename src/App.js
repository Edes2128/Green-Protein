import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box
      component="div"
      width="100%"
      height="100vh"
      style={{ backgroundColor: "#121212" }}
    >
      <NavBar />
      <Container maxWidth="lg"  style={{height:'800px',boxShadow:'0 2px 5px rgba(255,255,255,.1)',marginTop:'50px'}}>
              
      </Container>
    </Box>
  );
}

export default App;
