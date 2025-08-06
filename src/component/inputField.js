import "./inputField.css";

const InputField = (props) => {
  const { type, placeholder, name , label } = props;
  return (
    <div>
      <label className="input-label">{label}</label>
      <input
        className="reuseable-input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
