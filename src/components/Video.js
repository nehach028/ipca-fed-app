import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react'
import { priceUrl } from './endPoints'

const Video = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(priceUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log("An error has occurred while fetching response", error)
      });
  }, [])
  const { productViewModels } = data
  const renderPrices = productViewModels && (
    <div className="v-overlay">
      <p className="v-price-one">{productViewModels[0].StandardPrice}</p>
      <p className="v-price-two">{productViewModels[1].StandardPrice}</p>
    </div>
  )
  return (
    <Segment raised className="v-container">
      <video controls loop>
        <source src="sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {renderPrices}
    </Segment>
  );
};

export default Video;