import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis'; // Import analyzeImage from azure-image-analysis.js
import generateImage from './azure-image-generation'; // Import generateImage from azure-image-generation.js

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null); // State for the generated image

  const handleAnalyzeImage = async () => {
    setIsLoading(true);
    setAnalysisResults(null);
    try {
      const results = await analyzeImage(imageUrl);
      setAnalysisResults(results);
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    setIsLoading(true);
    setGeneratedImage(null);
    try {
      // Assuming you have a state variable `prompt` that holds the text for image generation
      const imageUrl = await generateImage(prompt);
      setGeneratedImage(imageUrl); // Update the state with the generated image URL
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const displayResults = () => {
    if (!analysisResults && !generatedImage) return <p>No results to display</p>;

    return (
      <div>
        {analysisResults && (
          <div>
            <h3>Analysis Results:</h3>
            <p>Description: {analysisResults.description?.captions[0].text}</p>
            <p>Tags: {analysisResults.description?.tags.join(', ')}</p>
            <img src={imageUrl} alt="Analyzed" style={{ maxWidth: '500px' }} />
          </div>
        )}
        {generatedImage && (
          <div>
            <h3>Generated Image:</h3>
            {/* Display the generated image. Adjust how the image is displayed based on the response structure */}
            <img src={generatedImage} alt="Generated" style={{ maxWidth: '500px' }} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision & Image Generation</h1>
        <input
          type="text"
          placeholder="Enter image URL or Type prompt"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={handleAnalyzeImage} disabled={isLoading}>Analyze Image</button>
        <button onClick={handleGenerateImage} disabled={isLoading}>Generate Image</button>
        {isLoading && <p>Loading...</p>}
      </header>
      <main>
        {displayResults()}
      </main>
    </div>
  );
}

export default App;
