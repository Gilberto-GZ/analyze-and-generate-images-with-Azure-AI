
const axios = require("axios").default;




async function analyzeImage(imageUrl) {
  const endpoint = "https://analyzeimage001.cognitiveservices.azure.com/";
  const subscriptionKey = "4fea0a65f33f44da8e1318dcf44ef7f2";

  const headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Content-Type': 'application/json'
  };

  const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
  };

  const url = `${endpoint}vision/v3.0/analyze`; // Construct the full URL here

  try {
    const response = await axios.post(url, { url: imageUrl }, { headers, params });
    console.log('API Response:', JSON.stringify(response.data, null, 2)); // Log the API response
    return response.data;
  } catch (error) {
    console.error("Error calling the Computer Vision API:", error.message);
    return error;
  }
}

module.exports = analyzeImage;
