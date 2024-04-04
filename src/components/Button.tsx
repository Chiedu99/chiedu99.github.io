import React from 'react';

// Props definition with default values for width and height
interface SurveyButtonProps {
  width?: string; // Width of the button, e.g., '100px', '50%'
  height?: string; // Height of the button, e.g., '40px'
}

// SurveyButton component
const SurveyButton: React.FC<SurveyButtonProps> = ({ width = '200px', height = '50px' }) => {
  // Inline styles for the button
  const buttonStyle: React.CSSProperties = {
    width: width, // Customizable width
    height: height, // Customizable height
    borderRadius: '15px', // Rounded edges
    backgroundColor: '#007BFF', // Example color
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <button style={buttonStyle}>Take our survey</button>
    </a>
  );
};

export default SurveyButton;
