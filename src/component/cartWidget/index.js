import React from 'react';


export default function FixedContainer({title, parrafo}) {
  return (
    <div className="content-container">
      <div className="title"><h1>{title}</h1>
      </div>
        <div>
        <p>{parrafo}</p>
        </div>
      </div>
  );
}