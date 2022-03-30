import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language, setTranslation }) => {
  useEffect(() => {}, [text, language]);
  console.log("New language or text!");
  return <div></div>;
};

export default Convert;
