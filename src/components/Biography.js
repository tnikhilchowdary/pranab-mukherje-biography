import React from 'react';
import './Biography.css';

import pranabImage from '../assets/pranab.jpg.jpg';
function Biography() {
  return (
    <div className="bio-container">
      <h2>Biography</h2>
      <img src={pranabImage} alt="Pranab Mukherjee" className="bio-image" />
      <p>
        Pranab Mukherjee was one of India’s most respected political leaders. Born on December 11, 1935, in West Bengal, he served the country for over five decades.
        A key member of the Indian National Congress, he held critical portfolios like Finance, Defence, and External Affairs.
      </p>
      <p>
        Known for his deep knowledge of constitutional matters and budgetary processes, he was often called the “man of all seasons.”
        In 2012, he was elected the 13th President of India. In 2019, he was awarded the Bharat Ratna for his outstanding contribution to public service.
        Pranab Mukherjee passed away on August 31, 2020, leaving behind a legacy of wisdom, leadership, and democratic values.
      </p>
    </div>
  );
}

export default Biography;
