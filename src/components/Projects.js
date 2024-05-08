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
  Stack,
} from "@chakra-ui/react";
import ProjectDetailsUtils from "./utils/ProjectDetailsUtils";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <Center bg={"black"}>
      {ProjectDetailsUtils.map((project, key) => (
        <Card direction={"row"} key={key}>
          <Image src={project.img} w={"50%"}></Image>
          <Stack>
            <CardBody>
              {console.log(project)}
              <Heading size="m">{project.title}</Heading>
              <Text pt="2" fontSize="sm">
                {project.details}
              </Text>
            </CardBody>
            <CardFooter>
              <Link href={project.link}>
                <ExternalLinkIcon />
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Center>
  );
};

export default Projects;
