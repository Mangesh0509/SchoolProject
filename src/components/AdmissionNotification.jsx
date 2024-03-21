import React from 'react';
import '../myStyle.css'; // 

const AdmissionNotification = () => {
  return (
    <div className="animate-opacity text-center p-4">
      <div className="inner-div">
        <a href="#">
          <span className="text-black-600 text-xl font-semibold">Admission Open, Hurry Up!</span>
        </a>
      </div>
    </div>
  );
};

export default AdmissionNotification;
