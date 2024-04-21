import React from "react";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const CustomMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
        <MenuList>
          <MenuItem>About me</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact Me</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default CustomMenu;
