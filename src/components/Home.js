import {
  Box,
  Image,
  Text,
  Center,
  VStack,
  Heading,
} from "@chakra-ui/react";
import HeroImage from "../assets/image/Frame 20.png";
import React from "react";

const Home = () => {
  return (
    <>
      <Center>
        <VStack maxW="1280px" w="1280px" position={"relative"} my={"4rem"}>
          <Box
            w={"100%"}
            display={"flex"}
            justifyContent={{ base: "flex-Start", md: "flex-end" }}
          >
            <Image src={HeroImage}></Image>
          </Box>
          <Box
            position={{ base: "relative", md: "absolute" }}
            left="0"
            top={"50%"}
            w={{ md: "50%" }}
            transform={{ md: "translateY(-50%)" }}
            align="start"
          >
            <VStack align={"start"}>
              <Heading
                as="b"
                fontSize={{ base: "md", sm: "lg", md: "xl", lg: "4xl" }}
              >
                Hello I'am Diwash Nembang.
              </Heading>
              <Heading
                as="b"
                fontSize={{ base: "md", sm: "lg", md: "xl", lg: "4xl" }}
              >
                I'am Web Developer
              </Heading>
              <Heading
                as="b"
                fontSize={{ base: "md", sm: "lg", md: "xl", lg: "4xl" }}
              >
                Based In Australia
              </Heading>
              <Text fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}>
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
