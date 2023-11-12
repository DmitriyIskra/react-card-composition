import React from 'react';
import './css/img.css';

export default function Img({img}) {
  
  return (
    <div className="wr-img">
        <img src={img} alt="..." />
    </div>
  )
}
