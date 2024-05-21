import {
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ContactMe = () => {
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");

  const checkError = (e) => {
    console.log("this is e.onivalid", e.target.isinvalid);
    const check = e.target.value === "";
    setIsError(check);

    console.log(e.target.value);
  };

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return (
    <Center>
      <form action="/">
        <FormControl isRequired isInvalid={isError}>
          <FormLabel> first Name</FormLabel>
          <Input placeholder="First name" onChange={checkError}></Input>
          {isError && <FormErrorMessage>This is required</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel> last Name</FormLabel>
          <Input placeholder="Last name"></Input>
          {isError && <FormErrorMessage>This is required</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input placeholder="email" type="email"></Input>
          {isError && <FormErrorMessage>This is required</FormErrorMessage>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>message</FormLabel>
          <Textarea placeholder="write your message" />
          {isError && <FormErrorMessage>This is required</FormErrorMessage>}
        </FormControl>
        <Button type="submit" onClick={checkError}>
          Send
        </Button>
      </form>
    </Center>
  );
};

export default ContactMe;
