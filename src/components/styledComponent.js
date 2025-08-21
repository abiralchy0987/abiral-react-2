import {InputWrapper, InputStyle, ButtonStyle} from "./components.styled";

const Button = () => {
    return (
        <InputWrapper>
            <InputStyle type="text" placeholder="Type here..." />
            <ButtonStyle>Submit</ButtonStyle>
        </InputWrapper>
    );
}

export default Button;