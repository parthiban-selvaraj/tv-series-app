import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loader from "../../components/Loader";
import SingleSeriesDisplay from "../../components/SingleSeriesDisplay";

const SingleSeries = () =>  {
    // react hook for getting id from url
    const { id } = useParams();

    // react hook for setting state variable
    const [show, setShow] = useState(null);

    // react hook to execute something after DOM update as a componentDidMount()
    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            //  assign API response ie show list to state object for rendering using SETSTATE
            .then(shows => setShow(shows))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //empty [] object is mandatory for not loading this API call after each update in the DOM
    // console.log("show name", show)
    return (
        <div>
            {/* validation for empty show */}
            { show === null && <Loader />}
            {
                show != null 
                &&
                <SingleSeriesDisplay list={show}/>
            }
        </div>
    )
}

export default SingleSeries;
