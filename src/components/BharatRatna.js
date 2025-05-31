import React from 'react';
import './BharatRatna.css';

import pranabImage from '../assets/bharatratna.jpeg';


function BharatRatna() {
  return (
    <div className="ratna-container">
      <h2>Bharat Ratna</h2>
      <img src={pranabImage} alt="Bharat Ratna Medal" className="ratna-img" />
      <p>
        In <strong>2019</strong>, Pranab Mukherjee was honored with the <strong>Bharat Ratna</strong>—India’s highest civilian award—for his lifelong dedication to public service and nation-building.
      </p>
      <ul>
        <li>Over 50 years in public life across multiple ministries and roles</li>
        <li>Recognized for strengthening India’s democracy and economic growth</li>
        <li>Admired by leaders across all political parties</li>
        <li>Served as India’s 13th President with vision and humility</li>
        <li>A symbol of wisdom, unity, and statesmanship</li>
      </ul>
      <p>
        The Bharat Ratna is a tribute to Pranab Mukherjee’s unwavering commitment to the nation. His legacy continues to inspire generations.
      </p>
    </div>
  );
}

export default BharatRatna;
