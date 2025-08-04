
import Styled from 'styled-components';

const Button = () => {
    const ButtonStyle = Styled.button`
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    `;
    const InputStyle = Styled.input`
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
    `;
    const InputWrapper = Styled.div`
        display: flex;
      justify-content: center;
        align-items: center;
    `;

  return (
    <InputWrapper>
      <InputStyle type="text" placeholder="Type something..."  className="input-field"
      />
      <ButtonStyle>
        Click Me
      </ButtonStyle>
    </InputWrapper>
  );
}

export default Button;
