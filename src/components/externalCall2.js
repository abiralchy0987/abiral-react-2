import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ExternalCall2 = () => {
    const [state, setState] = useState(0);
    const [apiData, setApiData] = useState([]);
    const [loader, setLoader] = useState(true);

    const handleChange = (e) => {
        setState(state + 1);
    }

    useEffect(() => {
        console.log("THis useEffect runs only once when the component mounts");
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await fetch("https://api.sampleapis.com/wines/reds", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                console.log("Network response was not ok");
                setLoader(false);
                return;
            }

            const responseData = await response.json(); // Parse the JSON response body
            setApiData(responseData); // Update the state with the fetched data
            setLoader(false); // Set loader to false after data is fetched
        } catch (error) {
            console.log("Error");
        }
    }
    console.log("apiData", apiData);


    return (
        <div className="external-call">
            {loader ?
                <div>Loading...</div>
                : apiData.length > 0 ?
                    apiData.map((item, index) => (
                        <div key={index}>
                            <div className="external-call-text">
                                <div className="external-call-header">
                                    <h2>
                                        <Link to={`/wine/${item.id}`}>
                                            {item.winery}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="external-call-content">
                                    <p>{item.wine}</p>
                                </div>
                                <div className="external-call-rating">
                                    <p>Rating: {item.rating?.average}/5</p>
                                    <p>Review: {item.rating?.reviews}</p>
                                </div>
                                <div className="external-call-location">
                                    <p>{item.location}</p>
                                </div>
                            </div>
                            <div className="external-call-image">
                                <img src={item.image} alt="Placeholder" />
                            </div>
                        </div>
                    )) :
                    (<div>No data found</div>)}

            <button onClick={handleChange}>Increase</button>
        </div>
    )
}

export default ExternalCall2;