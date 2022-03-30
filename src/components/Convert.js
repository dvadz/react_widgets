import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const baseURL = "https://translation.googleapis.com/language/translate/v2";
    const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

    const doTranslation = async () => {
      const response = await axios.post(
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
      setTranslated(response.data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [text, language]);

  return <div></div>;
};

export default Convert;
