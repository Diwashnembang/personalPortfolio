import { Grid, Box, GridItem, Image, Flex, Center } from "@chakra-ui/react";
import logo from "../assets/image/Logo.svg";
import React from "react";

const Nav = () => {
  return (
    <Center w="100vw">
      <Flex
        w="1280px"
        mx="40px"
        justifyContent="space-between"
        // border="solid green 3px"
        alignItems="center"
        h="56px"
      >
        <Box id="personal" className="text">
          <Image src={logo} w="139px" h="40px" />
        </Box>
        <Box id="info">
          <Grid templateColumns="repeat(4,1fr)">
            <GridItem className="text" mx="5px">
              About me
            </GridItem>
            <GridItem className="text" mx="5px">
              Skills
            </GridItem>
            <GridItem className="text" mx="5px">
              Project
            </GridItem>
            <GridItem className="text" mx="5px">
              Contact Me
            </GridItem>
          </Grid>
        </Box>
        <Box id="resume" className="text">
          resume
        </Box>
      </Flex>
    </Center>
  );
};

export default Nav;
