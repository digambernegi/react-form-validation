import React,{useState} from 'react'
import './App.css';
import Form from "./Form";

function App() {
  const [fields,setFields] = useState({
  name:"",
  email:"",
  phone:"",
  message:"",
});

const inputs=[{
  id:1,
  name:"username",
  type:"text",
  errormsg:"Name must be > than 2 alphabet.",
  label:"Name",
  placeholder:"name",
  pattern:'^[A-Za-z0-9]{2,15}$',
  required:true,
},

{
  id:2,
  name:"email",
  type:"email",
  errormsg:"Enter valid E-mail.",
  label:"Email",
  placeholder:"Email",
  required:true,
},

{
  id:3,
  name:"phone",
  type:"text",
  errormsg:"Phone number must br 10 digits.",
  label:"Phone",
  placeholder:"Phone number",
  pattern:'^\\d{10}$',
  required:true,
},

{
  id:4,
  name:"message",
  type:"text",
  errormsg:"Enter valid Input",
  label:"Message",
  placeholder:"Message",
}
];

  const handleSubmit = (e) => {
    e.target.reset();
    e.target.preventDefault();
  };

  const onChange = (e) => {
    setFields({...fields,[e.target.name]: e.target.value});
  }

     return (
    <div className="app">
    <h1>Contact form</h1>
    <form onSubmit={handleSubmit}>
    {inputs.map((input) =>(
      <Form key={input.id} {...input} value={fields[input.name]} onChange={onChange}/>
    ))}
       <button>Send</button>

    </form>
    </div>
  );
}

export default App;
