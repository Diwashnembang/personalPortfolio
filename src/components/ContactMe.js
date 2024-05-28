import {
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";

const ContactMe = () => {
  const [isError, setIsError] = useState(false);
  const [invalidElement, setInvalidElement] = useState(null);
  const currentElement = useRef();

  const checkError = (e) => {
    // e.target.value === ""
    //   ? (e.target.parentElement.isInvalid = true)
    //   : (e.target.parentElement.isInvalid = false);
    setIsError(e.target.value === "");
    currentElement.current = e.target;
  };

  useEffect(() => {
    isError
      ? setInvalidElement(currentElement.current)
      : setInvalidElement(null);
  }, [isError]);

  const assignInvalid = (id) => {
    invalidElement && console.log(invalidElement);
    return isError && invalidElement && invalidElement.id === id;
  };

  return (
    //TODO :  add isInvalid to other child, sytle it and make form working
    <Center>
      <form action="/">
        <FormControl isRequired isInvalid={assignInvalid("first-name")}>
          <FormLabel> first Name</FormLabel>
          <Input
            placeholder="First name"
            onChange={checkError}
            id="first-name"
          ></Input>
          {isError && invalidElement && invalidElement.id === "first-name" && (
            <FormErrorMessage>This is required</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={assignInvalid("last-name")}>
          <FormLabel> last Name</FormLabel>
          <Input
            placeholder="Last name"
            onChange={checkError}
            id="last-name"
          ></Input>
          {isError && invalidElement && invalidElement.id === "last-name" && (
            <FormErrorMessage>This is required</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={assignInvalid("email")}>
          <FormLabel>email</FormLabel>
          <Input
            placeholder="email"
            type="email"
            id="email"
            onChange={checkError}
          ></Input>
          {isError && invalidElement && invalidElement.id === "email" && (
            <FormErrorMessage>This is required</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={assignInvalid("message")}>
          <FormLabel>message</FormLabel>
          <Textarea
            placeholder="write your message"
            id="message"
            onChange={checkError}
          />
          {isError && invalidElement && invalidElement.id === "message" && (
            <FormErrorMessage>This is required</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" onClick={checkError}>
          Send
        </Button>
      </form>
    </Center>
  );
};

export default ContactMe;
