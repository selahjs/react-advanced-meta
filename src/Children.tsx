import React from "react";
import "./App.css";
//  I used "extends React.ButtonHTMLAttributes<HTMLButtonElement>" so that any available button attributes can be passed
// without type issue
interface IParams extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  overlayOn?: any;
  props?: any;
  backgroundColor?: string;
}
const DialogModal = ({ children, overlayOn }: IParams) => {
  return (
    <div className="overlay" style={{ display: overlayOn }}>
      {children}
    </div>
  );
};

// This is a generic reusable button component that follows react's composition technique called containement
const Button = ({ children, backgroundColor, ...props }: IParams) => {
  return (
    <button
      onClick={() => alert("Proceed")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
// This is a specialized button component that follows composition technique called specialization
const DeleteButton = () => {
  return <Button backgroundColor={"red"}>Delete</Button>;
};

function App() {
  const [overlayOn, setOverlay] = React.useState("none");
  function handleOn() {
    setOverlay("block");
  }
  function handleOff() {
    setOverlay("none");
  }
  return (
    <>
      {/* <FormComponent /> */}
      <button onClick={handleOn}>on</button>
      <DialogModal overlayOn={overlayOn}>
        <h2>Warning!</h2>
        <p>Are you sure you want to delete the item</p>
        <DeleteButton />
        <Button backgroundColor="orange" onClick={handleOff}> Off </Button>
      </DialogModal>
    </>
  );
}

export default App;
