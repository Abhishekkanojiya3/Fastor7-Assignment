import React, { useState } from 'react';
import Heading from '../Component/Heading';
import Smallbutton from '../Component/Smallbutton';

function Otp({ mobileNum }) {
  const heading = "OTP Verification";
  const para = "Enter the verification code we just sent to your Mobile Number.";

  const [otp, setOtp] = useState("");
  const [showAlert, setShowAlert] = useState(false); 

  const handleData = (data) => {
    console.log(data);
    const newData = data.map((d, index) => {
      return d;
    });
    console.log(newData);
  }

  const handleClick = () => {
    // Set the OTP value to "123456"
    setOtp("123456");
    // Display the alert
    setShowAlert(true);
  }

  return (
    <div>
      <Heading
        heading={heading}
        para={para}
      />

      <Smallbutton
        handleData={handleData}
        mobileNum={mobileNum}
      />

      {showAlert && (
        <div className="alert">
          OTP is {otp}
        </div>
      )}
    </div>
  )
}

export default Otp;
