import React from "react";
import './index.css';

// container component for listing items in a given series
const SeriesListItem = ({seriesList}) => (
    
    <li>{seriesList.show.name}</li>
)

// function component to display the items in series
const SeriesList = (props) => {
    return (
        <div>
            {
                props.list.length !== 0 && props.message.trim() !== '' 
                &&
                <p>The {props.message} show list - {props.list.length}</p>
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