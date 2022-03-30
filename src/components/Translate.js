import React, { useState, useRef } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Africaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        label='Select a language'
        languages
        options={options}
        selected={language}
        onSelectChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
