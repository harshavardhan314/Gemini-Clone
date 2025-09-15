export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchGeminiResponse = async (query) => {
  const response = await fetch('https://api.gemini.example/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ question: query }),
  });

  const data = await response.json();
  return data;
};
