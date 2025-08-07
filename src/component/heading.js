import "./heading.css";
const heading =(props) => {
    const{title , type}= props;
    return(
        <>
        {type === "h1" && <h1 className="heading1" >{title}</h1>}
        {type === "h2" && <h2 className="heading2" >{title}</h2>}
        {type === "h3" && <h3 className="heading3" >{title}</h3>}
        {type === "h4" && <h4 className="heading4" >{title}</h4>}
        {type === "h5" && <h5 className="heading5" >{title}</h5>}
        {type === "h6" && <h6 className="heading6" >{title}</h6>}
        </>
    );
};
export default heading;
