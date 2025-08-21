
const Heading = (props) => {
    const {title, type} = props
    
    return (
        <>
        {type === 'h1' && <h1 className="heading-1">{title}</h1>}
        {type === 'h2' && <h2 className="heading-2">{title}</h2>}
        {type === 'h3' && <h3 className="heading-3">{title}</h3>}
        {type === 'h4' && <h4 className="heading-4">{title}</h4>}
        {type === 'h5' && <h5 className="heading-5">{title}</h5>}
        {type === 'h6' && <h6 className="heading-6">{title}</h6>}
        </>
    );
};  

export default Heading;