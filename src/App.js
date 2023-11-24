import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleAnalyzeImage = () => {
    // Add logic to analyze the image
    console.log('Analyze image with URL:', imageUrl);
  };

  const handleGenerateImage = () => {
    // Add logic to generate image
    console.log('Generate image with URL:', imageUrl);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Vision</h1>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button onClick={handleAnalyzeImage}>Analyze Image</button>
        <button onClick={handleGenerateImage}>Generate Image</button>
      </header>
    </div>
  );
}

export default App;

