const axios = require("axios").default;

async function generateImage(prompt) {
  const endpoint = "https://api.openai.com/v1/images/generations";
  const apiKey = process.env.OPENAI_API_KEY;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const data = {
    model: "dall-e-3",
    prompt: prompt, // The prompt text comes from the App.js state
    n: 1,
    size: "1024x1024"
  };

  try {
    const response = await axios.post(endpoint, data, { headers });
    console.log('API Response:', JSON.stringify(response.data, null, 2)); // Log the API response
    // The following assumes the API returns a direct link to the generated image
    // You'll need to adjust according to the actual response structure
    return response.data.data[0].url; 
  } catch (error) {
    console.error("Error calling the image generation API:", error.message);
    return error;
  }
}

module.exports = generateImage;
