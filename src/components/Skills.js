import {
  Center,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { logos } from "./utils/SkillsLogo";
const Skills = () => {
  console.log(logos);
  return (
    <Center id="Skills" w={"100vw"}>
      <SimpleGrid
        columns={[2, 4, 6]}
        maxW={"1280px"}
        w={"1280px"}
        spacing={"1.5rem"}
      >
        {Object.keys(logos).map((logo, index) => (
          <Card w={"100%"} h={"150px"} mb={"1.8rem"} maxW="sm">
            <CardBody key={index}>
              <VStack justify={"center"} align={"center"} h={"100%"}>
                <Image src={logos[logo].img}></Image>
                <Text>{logos[logo].text}</Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default Skills;
