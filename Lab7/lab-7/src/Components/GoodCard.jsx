import React from 'react'

const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px',
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
    margin:'auto',
    userDrag: 'none',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserDrag: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
  };
  
  const nameStyle = {
    marginTop: 'auto',
  };
  
  const priceStyle = {
    color: 'green',
    fontWeight: 'bold',
  };
  
  const GoodCard = (props) => {
    return (
      <div style={cardStyle}>
        <img src={props.image} alt={props.name} style={imageStyle} />
        <div style={nameStyle}>
          <h3>{props.name}</h3>
          <p style={priceStyle}>Price: ${props.price}</p>
        </div>
      </div>
    );
  };

export default GoodCard