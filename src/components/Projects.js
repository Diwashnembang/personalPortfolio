import React from "react";
import {
  Center,
  Card,
  CardBody,
  Image,
  CardFooter,
  Text,
  Heading,
  Link,
  VStack,
  HStack,
  Stack,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProjectDetailsUtils from "./utils/ProjectDetailsUtils";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <Center bg={"black"}>
      <VStack maxW="1280px" w="1280px" my={"2rem"}>
        <HStack color={"white"}>
          <Text fontSize={"4xl"}>My</Text>
          <Heading>Projects</Heading>
        </HStack>
        <Box>
          {ProjectDetailsUtils.map((project, key) => {
            console.log((+key + 1) % 2 === 0);
            return (
              <Card
                direction={"row"}
                key={key}
                my={"3rem"}
                mx={"1rem"}
                bg={"inherit"}
              >
                <Grid
                  templateAreas={
                    (+key + 1) % 2 === 0 ? `"img content"` : `"content img"`
                  }
                  gridTemplateColumns={"1fr 1fr"}
                >
                  <GridItem area={"img"}>
                    <Image
                      src={project.img}
                      border={"white solid 1px"}
                      maxW={"594px"}
                      maxHeight={"476px"}
                      borderRadius={"15px"}
                      area={"img"}
                    ></Image>
                  </GridItem>
                  <GridItem area={"content"}>
                    <Stack area="content">
                      <CardBody>
                        <Heading size="m" color={"white"}>
                          {project.title}
                        </Heading>
                        <Text pt="2" fontSize="sm" color={"white"}>
                          {project.details}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Link href={project.link}>
                          <ExternalLinkIcon color="white" />
                        </Link>
                      </CardFooter>
                    </Stack>
                  </GridItem>
                </Grid>
              </Card>
            );
          })}
        </Box>
      </VStack>
    </Center>
  );
};

export default Projects;
