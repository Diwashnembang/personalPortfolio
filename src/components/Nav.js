import {
  Grid,
  Box,
  GridItem,
  Image,
  Flex,
  Center,
  Show,
  Hide,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
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
        mx="1rem"
        my={{ base: "0.5rem", md: "15px" }}
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
                <Link href="#aboutMe">
                  <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    About me
                  </Text>
                </Link>
              </GridItem>
              <GridItem className="text" mx="5px">
                <Link href="#Skills">
                  <Text as="a" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Skills
                  </Text>
                </Link>
              </GridItem>
              <GridItem className="text" mx="5px">
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                  Project
                </Text>
              </GridItem>
              <GridItem className="text" mx="5px">
                <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                  Contact me
                </Text>
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
