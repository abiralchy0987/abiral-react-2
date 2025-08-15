import "./App.css";
import Header from "./component/header";
import Button from "./component/button";
import Footer from "./component/footer";
import InputField from "./component/inputField";
import Card from "./component/card";
import Buttons from "./component/buttons";
import Heading from "./component/heading";
import React from "react";
import "./component/assignment1/pricing.css";
import Title from "./component/assignment1/Title";
import Subtitle from "./component/assignment1/Subtitle";
import Price from "./component/assignment1/Price";
import Counter from "./component/counterounter";
function App() {
  return (
    <>
    {/* <Price/> */}
      
      <Header />
      {/* {/* <InputField
        type="text"
        placeholder="enter your  username "
        name="username"
      />
      <InputField
        type="password"
        placeholder="enter your password"
        name="password"
      />
      <InputField type="text" placeholder="enter your email" name="email" /> */} 
      {/* <Card
        title="Card Title 1"
        content="This is a reusable card component."
        image="../image/card-image.jpg"
        button="Click Me"
      />
      <Card
        title="Card Title 2"
        content="This is another reusable card component."
        image="../image/card-image2.jpg"
        button="Learn More"
      />
      <Card
        title="Card Title 3"
        content="This is a third reusable card component."
        image="../image/card-king.jpg"
        button="Read More"
      /> */}
       {/* <Heading type="h1" title="Welcome to My App" />
      <Heading type="h2" title="This is a subheading" />
      <Heading type="h3" title="This is a smaller heading" />
      <Heading type="h4" title="This is an even smaller heading" />
      <Heading type="h5" title="This is a fifth-level heading" /> */}
      <Buttons />
      <Buttons type="secondary" />
      <Button /> 
      <Footer /> 
    </>
  );
}

export default App;
