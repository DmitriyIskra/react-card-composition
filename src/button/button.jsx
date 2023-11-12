import React from 'react';
import './css/button.css';

export default function Button({text}) {
  return (
    <div className="wr-button">
        <button type="button">{text}</button>
    </div>
  )
} 
