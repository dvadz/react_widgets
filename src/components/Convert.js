import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDeboncedTerm] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboncedTerm(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const baseURL = "https://translation.googleapis.com/language/translate/v2";
    const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

    const doTranslation = async () => {
      const response = await axios.post(
        baseURL,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: key,
          },
        }
      );
      setTranslated(response.data.data.translations[0].translatedText);
    };
    if (debouncedText) doTranslation();
  }, [debouncedText, language]);

  return (
    <div>
      <h2 className='ui header'>{translated}</h2>
    </div>
  );
};

export default Convert;
