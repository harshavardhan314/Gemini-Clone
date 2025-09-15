
// src/components/Main/Main.jsx
import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { fetchGeminiResponse } from "../../../config/api";

const Main = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const answer = await fetchGeminiResponse(query);
      setResponse(answer);
    } catch (err) {
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-component">
        <div className="greet">
          <p><span>Hello, Dev</span></p>
        </div>

        <div className="input-msg">
          <input
            type="text"
            placeholder="Ask Gemini"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <img
            src={assets.send_icon}
            alt="Send"
            onClick={handleSend}
            style={{ cursor: "pointer" }}
          />
        </div>

        {loading && <p className="loading">Loading...</p>}

        {response && (
          <div className="response">
            <p><strong>Gemini Says:</strong></p>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
