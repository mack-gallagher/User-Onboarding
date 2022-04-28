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

  const [users, setUsers] = useState([]);

  const validate = (name,value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: "" });
          }
        )
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const sendPost = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
        console.log(res);
        setUsers([ ...users, res]); 
      })
      .catch(err => console.error(err))
  }
 
  const onChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    console.log(value);
    const name = evt.target.name;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault();
    sendPost(formValues);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Current Users:</h3>
        <div className="users-display">
          { users.map((user, idx) => {
              return (
                <div className="user" key={idx}>
                  <h4>{ 'Name: '+user.data.first_name+' '+user.data.last_name }</h4>
                  <p>{ 'email: '+user.data.email }</p>
                  <p>{ 'Password: '+user.data.password }</p>
                </div>
                )
                    
                }) }
        </div>
        <Form
          initialFormValues={initialFormValues}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          disabled={disabled}
          setDisabled={setDisabled}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </header>
    </div>
  );
}

export default App;
