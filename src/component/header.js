
import { InputStyle, InputWrapper } from "./components.styled";
// import"./header.css"; 
import './header.modeule.css';

const Header = () => {
  return (
    <header  className="header">
      <nav>
       <InputWrapper>
        <ul className="styled-list">
          <li className="{styled['list-item']}">
            <a href="#">Home</a>
          </li>
          <li className="{styled['list-item']}">
            <a href="#">About</a>
          </li>
          <li className="{styled['list-item']}">
            <a href="#">Contact</a>
          </li>
        </ul>
        <InputStyle type="text" placeholder="Search..." />
       </InputWrapper>
      </nav>
    </header>
  );
};

export default Header;
