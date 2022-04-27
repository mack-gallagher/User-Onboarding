import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form.js';
import schema from './validation/schema.js';
import * as yup from 'yup';
import axios from 'axios';

function App() {

  const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    tos: false,
  }

  const initialFormErrors = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    tos: '',
  }

  const [disabled, setDisabled] = useState(true);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [responses, setResponses] = useState([]);

  const validate = (name,value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: "" });
          console.log(formErrors);
          }
        )
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const sendPost = newMember => {
    axios.post(' URL GOES HERE ')
      .then(res => {
        console.log(res) })
      .catch(err => console.error(err))
  }
 
  const onChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h4>Current Users:</h4>
        <pre>
          { responses.map(response => {
              return JSON.stringify(response) 
                }) }
        </pre>
        <Form
          initialFormValues={initialFormValues}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          disabled={disabled}
          setDisabled={setDisabled}
          setFormValues={setFormValues}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </header>
    </div>
  );
}

export default App;
