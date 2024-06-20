// import FormComponent from "./FormComponent";
import "./App.css";

const DialogModal = ({children}) =>{
  return <div>{children}</div>
}
const DeleteButton = ({children, backgroundColor}) =>{
  return <button onClick={()=>alert('Proceed')} style={{ backgroundColor }}>{children}</button>
  // return <button style={{ backgroundColor: backgroundColor }}>{children}</button>
}
function App() {
  
  return (
    <>
      {/* <FormComponent /> */}
      <DialogModal>
        <h2>Warning!</h2>
        <p>Are you sure you want to delete the item</p>
        <DeleteButton backgroundColor={'red'}> Delete</DeleteButton>
      </DialogModal>
    </>
  );
}

export default App;
