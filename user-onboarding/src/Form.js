import { useState } from 'react';

export default function Form(props) {

  const {
          initialFormValues,
          formValues,
          setFormValues,
          formErrors,
          setFormErrors,
          disabled,
          setDisabled,
          onChange,
          onSubmit,
        } = props;

  return (
    <div className="form">
      <div className="errors">
        <p>{ formErrors.first_name }</p>
        <p>{ formErrors.last_name }</p>
        <p>{ formErrors.email }</p>
        <p>{ formErrors.password }</p>
        <p>{ formErrors.tos }</p>
      </div>
      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input 
            name="first_name" 
            type="text"
            value={formValues.first_name}
            onChange={onChange} 
          /> 
        </label>
        <label>
          Last Name:
          <input 
            name="last_name" 
            type="text"
            value={formValues.last_name}
            onChange={onChange} 
          />
        </label>
        <label>
          Email:
          <input 
            name="email" 
            type="text"
            value={formValues.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input 
            name="password" 
            type="text"
            value={formValues.password}
            onChange={onChange}
          />
        </label>
        <label>
          I agree to the Terms of Service
          <input 
            name="tos"
            type="checkbox"
            value="tos"
            checked={!!formValues.tos}
            onChange={onChange}
          />
        </label>
        <button 
          type="submit" 
          disabled={disabled}
        >
          Submit
        </button>
      </form>
    </div>
        )
}
