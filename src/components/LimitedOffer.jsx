import React from 'react';
import '../myStyle.css';

const LimitedOffer = () => {
  return (
    <div className="animate-opacity text-center p-4">
      <div className="inner-div">
        <a href="#">
          <span className="text-red-600 text-xl font-semibold">Limited Time Offer, Don't Miss Out!</span>
        </a>
      </div>
    </div>
  );
};

export default LimitedOffer;
