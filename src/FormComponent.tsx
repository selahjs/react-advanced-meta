import React from "react";
import "./App.css";

const formData = {
  name: "",
  email: "",
  age: "",
};
const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return formData;
    default:
      return "0";
  }
};

function FormComponent() {
  // const [money, setMoney] = React.useState(100)
  const [state, dispatch] = React.useReducer(formReducer, formData);
  const nameInputRef = React.useRef(null);

  const handleRef = () => {
    console.log(nameInputRef);
    nameInputRef?.current?.focus();
  };

  const handleChange = (e: any) => {
    dispatch({ type: "SET_FIELD", name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", state);
    // Handle form submission logic here
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const inputStyle = { width: 250, height: 30, padding: 2 };
  const flexStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  // using useRef to track state between renders
  const count = React.useRef(0);

  React.useEffect(() => {
    count.current = count.current + 1;
  }, []);
  return (
    <>
      <h1>Render Count: {count.current}</h1>
      <button onClick={handleRef}>Focus</button>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={flexStyle}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              ref={nameInputRef}
              style={inputStyle}
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div style={flexStyle}>
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              // ref={(el) => (inputRefs.current[i] = el)}
              style={inputStyle}
              name="age"
              value={state.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
          <div style={flexStyle}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              style={inputStyle}
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormComponent;
