
import Styled from 'styled-components';
import { ButtonStyle, InputStyle, InputWrapper } from './components.styled';
const Button = () => {
    
  return (
    <InputWrapper>
      <InputStyle type="text" placeholder="Type something..."  className="input-field"
      />
      <ButtonStyle>
       submit
      </ButtonStyle>
    </InputWrapper>
  );
}

export default Button;
