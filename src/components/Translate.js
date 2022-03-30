import React, { useState, useRef } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  { label: "Africaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "French", value: "fr" },
  { label: "Tagalog", value: "tl" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[3]);
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        languages
        options={options}
        selected={language}
        onSelectChange={setLanguage}
      />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} setTranslation={setTranslation} />
    </div>
  );
};

export default Translate;
