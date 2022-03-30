import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";

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
  const [selected, setSelectedColor] = useState(options[0]);

  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectChange={setSelectedColor}
        />
      </Route>
      <Route path='/list'>
        <Search></Search>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
