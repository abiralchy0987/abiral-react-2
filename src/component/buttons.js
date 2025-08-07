import "./buttons.css";

const Buttons = (props) => {
  const { label, type } = props;
  return (
    <button
      className={`btn 
        ${type == "secondary" ? "btn-secondary" : "btn-primary"}`}
    >
      {type == "secondary" ? "cancel" : "Submit"}
    </button>
  );
};
export default Buttons;
