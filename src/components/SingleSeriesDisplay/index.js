import React from "react";
import './index.css';

const SingleSeriesDisplay = (props) => {
    return (
        <div>
            <h2>Loaded the series <i>{props.list.name}</i></h2>
            <div id="container">
                <div>Premiered - {props.list.premiered}</div>
                <div>Rating - {props.list.rating.average}</div>
                <div>Episodes - {props.list._embedded.episodes.length}</div>
            </div>

            <p>
                <img alt="Show" src={props.list.image.original} />
            </p>
        </div>
    )
}

export default SingleSeriesDisplay;
