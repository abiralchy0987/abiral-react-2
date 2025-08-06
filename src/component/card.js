import "./card.css";

const Card = (props) => {
    const { title, content, image, button} = props;

    return (
        <div className="card">
            <h2 className='card-title'> {title}</h2>
            <img src={image} alt={title} className='card-image'/>
            <p className='card-content'>{content}</p>
            <button className='card-button'>{button}</button>
        </div>
    );
};

export default Card;
