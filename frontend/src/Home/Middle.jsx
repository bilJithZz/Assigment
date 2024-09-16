import React from 'react';
import './Middle.css';

const StatItem = ({ percentage, time }) => {
  return (
    <div className='percent-stat'>
      <div><h2>{percentage}</h2></div>
      <div><h5>{time}</h5></div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className='stat-container'>
      <StatItem percentage="0.8%" time="5 Mins" />
      <StatItem percentage="1.11%" time="1 Hour" />
      
      <div className='stat-result'>
        <h4>Best Price to Trade</h4>
        <span>₹ 25,92,308</span>
        <h6>Average BTC/INR net price including commission</h6>
      </div>

      <StatItem percentage="7.5%" time="1 Day" />
      <StatItem percentage="14.48%" time="7 Days" />
    </div>
  );
};

export default Stats;
