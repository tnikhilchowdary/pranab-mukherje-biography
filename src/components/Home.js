import React from 'react';
import './Home.css';



import pranabImage from '../assets/pranab.jpg.jpg'; // Make sure name matches exactly

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-card">
          <img src={pranabImage} alt="Pranab Mukherjee" className="home-image" />
          <div className="home-details">
            <h1>Pranab Mukherjee</h1>
            <p>
              Pranab Mukherjee was the 13th President of India (2012–2017), a senior Congress leader,
              and an experienced statesman with a political career spanning over five decades.
              He held key portfolios like Finance, Defence, and External Affairs and played a pivotal role in shaping India's policies.
            </p>
            <p>
              Mukherjee was widely respected for his intellectual depth and deep understanding of governance.
              He was awarded the <strong>Bharat Ratna</strong> in 2019, India's highest civilian honor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
