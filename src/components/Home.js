import {
  Box,
  Image,
  Text,
  Center,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import HeroImage from "../assets/image/Frame 20.png";
import Skills from "./Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <Center>
        <VStack
          maxW="1280px"
          w="1280px"
          position={"relative"}
          my={{ base: "1rem", md: "4rem" }}
          mx={"1rem"}
        >
          <Box
            w={"100%"}
            display={"flex"}
            justifyContent={{ base: "flex-Start", md: "flex-end" }}
          >
            <Image
              src={HeroImage}
              transform={{
                base: "translateX(-10%)",
                md: "translateX(3rem)",
              }}
            ></Image>
          </Box>
          <Box
            position={{ base: "relative", md: "absolute" }}
            left="0"
            top={"50%"}
            w={{ base: "100%", md: "50%" }}
            transform={{ md: "translateY(-50%)" }}
            align="start"
          >
            <VStack align={"start"}>
              <HStack>
                <Text fontSize={{ base: "xl", sm: "xl", md: "3xl", lg: "4xl" }}>
                  Hello I'am
                </Text>
                <Heading fontSize={{ base: "2xl", lg: "4xl", md: "3xl" }}>
                  Diwash Nembang.
                </Heading>
              </HStack>
              <HStack my={{ sm: "0px" }}>
                <Heading
                  fontSize={{ base: "3xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                >
                  Frontend
                </Heading>
                <Text fontSize={{ base: "3xl", lg: "4xl" }}>Developer</Text>
              </HStack>
              <HStack>
                <Text
                  fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
                >
                  Based In
                </Text>
                <Heading
                  fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
                >
                  Australia
                </Heading>
              </HStack>
              <Text fontSize={{ base: "md", sm: "md", md: "md", lg: "xl" }}>
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Center>
      <Skills></Skills>
    </>
  );
};

export default Home;
