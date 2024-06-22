import React, { useState } from "react";
import "./App.css";
//  I used "extends React.ButtonHTMLAttributes<HTMLButtonElement>" so that any available button attributes can be passed
// without type issue
interface IParams extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  socials?: any;
}

const withSocialsHOC = (WrappedComponent, display=false) => {
  return (props) => {
    const [social, setSocial] = useState({
      facebook: "FB",
      instagram: "IG",
    });
    return (
      <>
        {/* we can pass any props or cuntionality to be used by the component the way they like */}
        <WrappedComponent socials={social} {...props} />
        {/* or we can just wrap whatever we want around the component */}
        {display && <h3><a href="https://facebook.com" target="_blank">fb</a></h3>}
      </>
    );
  };
};
const Home = ({ socials }: IParams) => {
  return (
    <>
      <h1>Home</h1>
      <p>This is a home</p>
      <p>
        {socials.facebook}, {socials.instagram}
      </p>
    </>
  );
};
const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>This is about with a link</p>
    </>
  );
};
const HomeWithSocials = withSocialsHOC(Home);
const AboutWithSocials = withSocialsHOC(About, true);
function App() {
  return (
    <>
      <header>Little Lemon</header>
      <HomeWithSocials />
      <AboutWithSocials />
    </>
  );
}

export default App;
