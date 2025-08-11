
import Button from "./Button";
// PricingBlock component
const PricingBlock = ({ title, price, period, features, buttonText, highlight }) => {
  return (
    <div className={`pricing-block ${highlight ? "highlighted" : ""}`}>
      <div className="block-header">
        <h2 className="block-title">
          {title} <span className="price">{price}</span>
        </h2>
        <p className="period">{period}</p>
      </div>
      
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="checkmark">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Button variant={highlight ? "primary" : "secondary"}>{buttonText}</Button>
    </div>
  );
}; 
export default PricingBlock;