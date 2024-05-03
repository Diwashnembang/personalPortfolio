import { Center, HStack, Box, Image, Wrap, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import img from "../assets/image/aboutMe.png";
const AboutMe = () => {
  return (
    <Center>
      <SimpleGrid
        columns={[1, null, 2]}
        maxW={"1280px"}
        w={"1280px"}
        spacing={"1rem"}
      >
        <Box>
          <Image src={img} w={"500px"}></Image>
        </Box>
        <Box w={"50%"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolor
          quis quia, tenetur, facilis a assumenda veritatis consectetur nesciunt
          quae ratione exercitationem fugit eaque ut reprehenderit nemo soluta
          velit vero aliquam. Dolor, animi et voluptas doloremque necessitatibus
          tempora eius quaerat accusantium ab dolorem dolore, corporis rem rerum
          dicta voluptatem modi!
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default AboutMe;
