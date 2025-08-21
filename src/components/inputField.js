import "./inputfield.css";

const InputField = (props) => {
    const { type, placeholder, name, label, onChange, value } = props;

    return (
        <div>
            <label className="input-label">{label}</label>
            <input
                className="resuseable-input"
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                value={value}
            />
        </div>
    )
}

export default InputField;
