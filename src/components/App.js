import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
  { title: "What is React?", content: "React is a front-end javascript framework" },
  {
    title: "Why use React?",
    content: "React is a favorite JS library",
  },
  { title: "How do you use React?", content: "You use React by creating components" },
];

const options = [
  { label: "Burnt Red", value: "red" },
  { label: "Cara-cara Orange", value: "orange" },
  { label: "La Vie en Rose", value: "Pink" },
  { label: "Forest Green", value: "green" },
];

const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};

export default App;
