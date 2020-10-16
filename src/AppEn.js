import React,{useState} from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";
import LangaugeOption from "./components/LangaugeOption";
import CategoryMenu  from './components/CategoryMenu';

function App() {
    const [category,showCategory] = useState(false);
    const lan = JSON.parse(localStorage.getItem('lan'));
    console.log(lan)
  return (
    <>
        {!JSON.parse(localStorage.getItem('lan')) &&  <LangaugeOption />}
        <CategoryMenu showCategory={category} closeCategory={() => showCategory(false)}/>
    <Box
      component="div"
      width="100%"
      style={{ backgroundColor: "#121212" }}
    >

      <NavBar openCategory={ () => showCategory(true)} />
      <Container
        maxWidth="lg"
        style={{
          marginTop: "75px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/1.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/2.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/3.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/4.jpg" alt="GreenMenu" />
        </Box>
        <Box id="supat" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/5.jpg" alt="GreenMenu" />
        </Box>
        <Box id="salad" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/6.jpg" alt="GreenMenu" />
        </Box>
        <Box  className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/7.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/8.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/9.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/10.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/11.jpg" alt="GreenMenu" />
        </Box>
        <Box id="wrap" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/12.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/13.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/14.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/15.jpg" alt="GreenMenu" />
        </Box>
        <Box id="burger" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/16.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/17.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/18.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/19.jpg" alt="GreenMenu" />
        </Box>
        <Box id="smoothie" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/20.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/21.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/22.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/23.jpg" alt="GreenMenu" />
        </Box>
        <Box id="fresh" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/24.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/25.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/26.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/27.jpg" alt="GreenMenu" />
        </Box>
        <Box id="snacks" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/28.jpg" alt="GreenMenu" />
        </Box>
        <Box className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/29.jpg" alt="GreenMenu" />
        </Box>
        <Box id="sweets" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/30.jpg" alt="GreenMenu" />
        </Box>
        <Box id="other" className="foto-galeri" width="65%" mb="40px">
          <img width="100%" src="./images/en/31.jpg" alt="GreenMenu" />
        </Box>
        <Box  className="foto-galeri" width="65%" mb="20px">
          <img width="100%" src="./images/en/32.jpg" alt="GreenMenu" />
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default App;
