import React from 'react'
import './App.css'

const formData = {
  name: '',
  email: '',
  age: ''
}
const formReducer = (state: any, action: any) => {
  switch(action.type){
    case 'SET_FIELD':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET':
      return formData;
    default: return '0'
  }
} 

function App() {
  // const [money, setMoney] = React.useState(100)
  const [state, dispatch] = React.useReducer(formReducer, formData);

  const handleChange = (e: any) => {
    dispatch({ type: 'SET_FIELD', name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', state);
    // Handle form submission logic here
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="age"
        value={state.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
    <p>{state.name}</p>
    <p>{state.email}</p>
    <p>{state.age}</p>
    {/* //  <h1>Current Balance = {money}</h1>
    //  <button onClick={()=> setMoney(prev => prev - 10)}>buy vegies</button>
    //  <button onClick={()=> setMoney(prev => prev + 10)}>serve a meal</button>
    //  <button onClick={()=> setMoney(prev => prev + 500)}>slebrity visit</button> */}
    </>
  )
}

export default App
