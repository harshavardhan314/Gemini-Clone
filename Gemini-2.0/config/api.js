// config/api.js
export const fetchGeminiResponse = async (query) => {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  const body = {
    contents: [
      {
        parts: [{ text: query }]
      }
    ]
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": "AIzaSyD1Fc24BBbAmGxRby4bPKmgvegSzHq_y1A" // <-- replace with your key
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log("Full Gemini Response:", data); // log to inspect structure

    const candidate = data.candidates?.[0];
    if (!candidate) return "No response";

    const content = candidate.content;
    let textResponse = "";

    if (Array.isArray(content)) {
      // If content is an array of parts
      textResponse = content
        .map(c => c.text)
        .filter(Boolean)
        .join("\n");
    } else if (typeof content === "object" && content.text) {
      // If content is an object with a text property
      textResponse = content.text;
    } else {
      textResponse = "No response";
    }

    return textResponse || "No response";

  } catch (err) {
    console.error("Gemini API Error:", err);
    return "Something went wrong. Please try again.";
  }
};
