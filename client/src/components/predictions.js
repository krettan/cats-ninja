// src/components/predictions.js

import React from 'react'

const Predictions = ({ predictions }) => {
return (
  <div>
    <center><h1>Contact List</h1></center>
    {predictions.map((contact) => (
      <div className="card" key={contact.name}>
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
          <p className="card-text">{contact.company.catchPhrase}</p>
        </div>
      </div>
    ))}
  </div>
)
};

export default Predictions