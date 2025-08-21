import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExternalCall = () => {
  const [state, setState] = useState(0);
  const [apiData, setApiData] = useState({});
  const { id } = useParams();

  const handleChange = (e) => {
    setState(state + 1);
  };

  useEffect(() => {
    console.log("THis useEffect runs only once when the component mounts");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.sampleapis.com/wines/reds/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json(); // Parse the JSON response body
    setApiData(responseData); // Update the state with the fetched data
  };
  console.log("apiData", apiData);

  return (
    <div className="external-call">
      <div className="external-call-text">
        <div className="external-call-header">
          <h2>{apiData.winery}</h2>
        </div>
        <div className="external-call-content">
          <p>{apiData.wine}</p>
        </div>
        <div className="external-call-rating">
          <p>Rating: {apiData.rating?.average}/5</p>
          <p>Review: {apiData.rating?.reviews}</p>
        </div>
        <div className="external-call-location">
          <p>{apiData.location}</p>
        </div>
      </div>
      <div className="external-call-image">
        <img src={apiData.image} alt="Placeholder" />
      </div>
      <button onClick={handleChange}>Increase</button>
    </div>
  );
};

export default ExternalCall;
