import React from "react";
import "./App.css";
//  I used "extends React.ButtonHTMLAttributes<HTMLButtonElement>" so that any available button attributes can be passed
// without type issue
interface IParams extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  spacing?: any;
  props?: any;
  backgroundColor?: string;
}

// We can modify our children elements by using the react chilren and react clone apis 
// I'm now adding a style property to the paragraph cildren
const Row = ({children, spacing}:IParams) => {
  return <div style={{ display: 'flex', flexDirection: 'row', }}>{React.Children.map(children, (child, i)=>{
    return React.cloneElement(child, {
      style: {
        marginLeft: `${spacing}px`,
        color: 'blue',
        ...child.props.style, 
      },
      onClick: i==1? ()=> alert('hello'): null
    });
  })}</div>
};

function ReactAPIs() {
  
  return (
    <>
      <Row spacing={32}>
        <p>Name:</p>
        <p style={{ color: 'red', cursor: 'pointer'}}>Piza</p>
        <p>Price:</p>
        <p>32$</p>
        <p>Amount:</p>
        <p>3</p>
      </Row>
    </>
  );
}

export default ReactAPIs;
