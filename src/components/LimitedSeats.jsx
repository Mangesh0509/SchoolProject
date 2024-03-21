import React from 'react';
import '../myStyle.css';

const LimitedSeats = () => {
  return (
    <div className="animate-opacity sm:text-right text-center p-4">
      <div className="inner-div">
        <a href="#">
          <span className="text-blue-600 sm:text-2xl text-sm font-semibold">Limited Seats Available, Act Now!</span>
        </a>
      </div>
    </div>
  );
};

export default LimitedSeats;
