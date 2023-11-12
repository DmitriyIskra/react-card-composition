import React from 'react';
import './css/card.css';

export default function Card({children}) {
    // console.log(props)

    return (
        <div className="card">
            {children}
        </div>
    )
}
