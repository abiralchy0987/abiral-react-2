import "./button.css";

const Button = (props) => {
    const { label, type } = props;
    return (
        <button className={`btn 
    ${type === "secondary" ? "btn-secondary" : "btn-primary"} 
    `} >
        {props.children}
    </button>
    )
}

export default Button;