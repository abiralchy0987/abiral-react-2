import "./App.css";
import Header from "./component/header";
import Button from "./component/button";
import Footer from "./component/footer";
import InputField from "./component/inputField";
import Card from "./component/card";
function App() {
  return (
    <>
      <Header />
      {/* <InputField
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
      <Card
        title="Card Title 1"
        content="This is a reusable card component."
        image="../image/card-image.jpg"
        button="Click Me"
      />
      .
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
      />
      <Button />
      <Footer />
    </>
  );
}

export default App;
