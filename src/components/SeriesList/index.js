import React from "react";
import './index.css';
import { Link } from 'react-router-dom';

// container component for listing items in a given series
const SeriesListItem = ({seriesList}) => (
    <li>
        {/* adding link or hyperlink for searched series list by using LINK react hook */}
        <Link to={`/series/${seriesList.show.id}`}>
            {seriesList.show.name}
        </Link>
    </li>
)

// function component to display the items in series
const SeriesList = (props) => {
    return (
        <div>
            {
                props.list.length !== 0 && props.message.trim() !== '' 
                &&
                <p>The total number of show list with name <i>{props.message}</i> is - {props.list.length}</p>
            }
            <ul className="series-list">
                {/* display series list items by running through array using map function */}
                {props.list.map(seriesList => (
                    // use keys to make unique ids for each items in the list. 
                    // It is mandatory for react to keep a track of it
                    <SeriesListItem key = {seriesList.show.id} seriesList = {seriesList} />
                ))}
            </ul>
        </div>
    )
};

export default SeriesList;