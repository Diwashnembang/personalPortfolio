import react from "../../assets/image/icon-react.png";
import git from "../../assets/image/icon-git.png";
import express from "../../assets/image/icon-express.svg";
import js from "../../assets/image/icon-javscript.svg";
import mongoDb from "../../assets/image/icon-mongodb.svg";

const capatilizeFirstChar = (text) =>
  text.split("").map((char, index) => {
    let result = "";
    if (index === 0) {
      result = result + char.toUpperCase();
    } else {
      result = result + char;
    }

    return result;
  })     ;
const convertToOb = (skills) => {
  const obj = {};
  Object.keys(skills).forEach((skill) => {
    obj[skill] = {};
    obj[skill]["img"] = skills[skill];
    obj[skill]["text"] = capatilizeFirstChar(skill);
  });
  return obj;
};

const images = { react, git, express, js, mongoDb };
const result = convertToOb(images);

export const logos = result;
