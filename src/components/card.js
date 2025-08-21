import "./card.css";
const Card = (props) => {
    const {title, image, content, buttonText} = props;
    return(
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <img className="card-image" height="150" width="200px" src={image} alt="Placeholder" />
            <p className="card-content">{content}</p>
            <button className="card-button">{buttonText}</button>
        </div>
    )
}

export default Card;