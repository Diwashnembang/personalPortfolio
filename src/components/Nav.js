import {
  Grid,
  Box,
  GridItem,
  Image,
  Flex,
  Center,
  Show,
  Hide,
} from "@chakra-ui/react";
import CustomMenu from "./utils/CustomMenu";
import logo from "../assets/image/Logo.svg";
import ResumeButton from "./utils/ResumeButton";
import React from "react";

const Nav = () => {
  return (
    <Center w="100vw" _hover={{ cursor: "pointer" }}>
      <Flex
        maxW="1280px"
        w="1280px"
        mx="40px"
        my="15px"
        justifyContent="space-between"
        // border="solid green 3px"
        alignItems="center"
        h="56px"
      >
        <Box>
          <Image src={logo} w="139px" h="40px" />
        </Box>
        <Show above="sm">
          <Box>
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
          <Box
            _hover={{ "& svg rect": { fill: "#404040" } }}
            _active={{ "& svg .test": { fill: "#FFFFFF" } }}
          >
            <ResumeButton width={158} height={56} color={"black"} />
          </Box>
        </Show>
        <Hide above="sm">
          <CustomMenu />
        </Hide>
      </Flex>
    </Center>
  );
};

export default Nav;
