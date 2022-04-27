import './App.css';
import { useState } from 'react';
import Form from './Form.js';
import formSchema from './validation/formSchema.js';
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

  const [formValues, setFormValues] = useState(initialFormValues);
  const [responses, setResponses] = useState([]);

  const [users, setUsers] = useState([]);

  const validate = () => {
    return;
  }

  const sendPost = () => {
    return;
  }
 
  const onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    setFormValues({ ...formValues, [name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    setFormValues(initialFormValues);
  }

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
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </header>
    </div>
  );
}

export default App;
