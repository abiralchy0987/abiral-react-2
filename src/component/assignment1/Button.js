// Button component
const Button = ({ children, variant = "primary" }) => {
  const buttonClass = `pricing-button ${
    variant === "primary" ? "primary" : "secondary"
  }`;
  return <button className={buttonClass}>{children}</button>;
};export default Button;