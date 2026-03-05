const axios = require("axios");

const API_KEY = process.env.GEMINI_API_KEY;

exports.generateCategoryAI = async (description) => {

  const prompt = `
You are an AI assistant for a sustainable ecommerce platform.

Given a product description generate:

category
sub_category
seo_tags
sustainability_filters

Return JSON only.

Product description: ${description}
`;

  try {

    const response = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
{
 contents: [
  {
   parts: [{ text: prompt }]
  }
 ]
}
);

   const aiText = response.data.candidates[0].content.parts[0].text;

const cleanText = aiText
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanText);

  } catch (error) {

    console.error("Gemini Error:", error.response?.data || error.message);
    throw error;

  }
};