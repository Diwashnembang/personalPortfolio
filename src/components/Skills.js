import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { logos } from "./utils/SkillsLogo";
const Skills = () => {
  return (
    <Box id="Skills">
      <SimpleGrid columns={[2, 4, 6]}>
        {Object.keys(logos).map((logo, index) => (
          <Box key={index}>
            <Image src={logos[logo]}></Image>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
