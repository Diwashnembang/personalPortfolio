import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Box overflowX={"hidden"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
