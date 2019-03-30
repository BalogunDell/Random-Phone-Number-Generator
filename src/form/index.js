import React from 'react';
import './form.css';

/**
 * Reusable form
 */
const Form = ({
  label, 
  buttonText, 
  inputLength, 
  inputType, 
  inPutRequired, 
  disabledButton,
  name,
  sizeOfPhoneNumersToGenerate,
  handleChange,
  handleSubmit,
  isInputValid
}) => {
  return(
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>{label}</label>
        <input
          type={inputType}
          maxLength={inputLength}
          required={inPutRequired}
          name={name}
          value={sizeOfPhoneNumersToGenerate}
          onChange={handleChange}
          autoComplete="false"
          />
          { !isInputValid && <p style={{ color: 'red', fontSize: '13px'}}>Invalid input</p>}
        <button disabled={disabledButton}>{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;