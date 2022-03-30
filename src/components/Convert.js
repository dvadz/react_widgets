import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const baseURL = "https://translation.googleapis.com/language/translate/v2";
    const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

    const doTranslation = async () => {
      await axios.post(
        baseURL,
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: key,
          },
        }
      );
    };

    doTranslation();
  }, [text, language]);

  return <div></div>;
};

export default Convert;
