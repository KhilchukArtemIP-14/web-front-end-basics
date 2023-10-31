import React, { useState } from 'react';

function Image() {
  const [images, setImages] = useState([
    {
      id: 1,
      zoomValue: 1,
    },
  ]);

  const addImage = () => {
    const newImage = {
      id: images.length + 1,
      zoomValue: 1,
    };

    setImages((prevImages) => [...prevImages, newImage]);
  };

  const deleteImage = (imageId) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== imageId));
  };

  const zoomIn = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? { ...image, zoomValue: image.zoomValue + 0.25 }
          : image
      )
    );
  };

  const zoomOut = (imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? { ...image, zoomValue: Math.max(image.zoomValue - 0.25, 0.1) }
          : image
      )
    );
  };

  return (
    <div>
      <div id="images">
        {images.map((image) => (
          <a href="https://slavuta-mvk.gov.ua" key={image.id}>
            <div style={{ width: '500px', overflow: 'hidden' }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D0%BC%D1%96%D1%81%D1%82%D0%B0-%D0%A1%D0%BB%D0%B0%D0%B2%D1%83%D1%82%D0%B0.jpg"
                style={{ width: '500px', transform: `scale(${image.zoomValue})` }}
                id={`img-so-big-${image.id}`}
              />
              <br />
            </div>
          </a>
        ))}
      </div>
      <span id="btn-group">
        <button id="add-btn" onClick={addImage}>
          Add
        </button>
        <button onClick={() => zoomIn(images.length)}>Zoom in</button>
        <button onClick={() => zoomOut(images.length)}>Zoom out</button>
        <button onClick={() => deleteImage(images.length)}>Delete</button>
      </span>
    </div>
  );
}

export default Image;