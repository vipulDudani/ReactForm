import React from 'react';

// Product component for displaying individual product card
function Product({ item }) {
  // Inline styles for the product card
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: 'calc(33.33% - 32px)', // 33% width for each product card with some margin
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box', // include padding and border in the width
  };

  // Inline styles for the product image
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  };

  // Inline styles for the product name
  const nameStyle = {
    fontSize: '1.5em',
    margin: '16px 0 8px',
  };

  // Inline styles for the product description
  const descriptionStyle = {
    fontSize: '1em',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src={item.image} alt={item.title} style={imageStyle} />
      <h4 style={nameStyle}>{item.title}</h4>
      <h4 style={descriptionStyle}>{item.description}</h4>
      <h5>{item.category}</h5>
    </div>
  );
}

export default Product;
