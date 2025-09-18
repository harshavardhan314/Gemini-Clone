import React from "react";
import run from "../config/gemini.js";
import { marked } from "marked";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [input, setInput] = React.useState("");
  const [recentPrompt, setRecentPrompt] = React.useState("");
  const [prevPrompts, setPrevPrompts] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [resultData, setResultData] = React.useState(""); // plain text
  const [finalHtml, setFinalHtml] = React.useState("");   // formatted HTML

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setInput("");
    setResultData("");
    setFinalHtml("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    // Typing effect (plain text)
    let words = response.split(" ");
    for (let i = 0; i < words.length; i++) {
      delayPara(i, words[i] + " ");
    }

    // After typing finishes, show formatted HTML
    setTimeout(() => {
      setFinalHtml(marked.parse(response));
    }, 75 * words.length + 500); // wait until typing ends
    setLoading(false);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
    setFinalHtml("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData, // plain text typing effect
    finalHtml,  // formatted HTML after typing
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
