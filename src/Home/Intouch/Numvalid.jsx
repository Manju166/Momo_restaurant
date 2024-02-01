import React, { useState } from 'react';
import './Touch.scss'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Numvalid = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
   <>
    <div >
        <PhoneInput className='numvalid'
          country={'ne'}
          value={phoneNumber}
          onChange={handleChange}
          inputClass='custom-input'
          containerClass='custom-container'
          inputProps={{
            required: true,
          }}
        />
      {!valid && (
        <p>Please enter a valid phone number.</p>
      )}
    </div>
   </>
   
  )
}
export default Numvalid;