import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
    // State - Javascript objects which react understands and renders by using their property
    state = {
        seriesName: '',
        seriesList: [],
        isFetching : false
    }
    // const [value] = useState(1);
    // setState - assigns a value which need to be rendered for the given component 
    // componentDidMount = () => {
    //   const series = ["Money Heist", "Squid Game"];

    //   setTimeout(() => {
    //     // this.setState({ series : series });
    //     // can use stae object name if state object and object name are same
    //     this.setState({ series });
    //   }, 2000);
    // }

    // Example to use Async API call through FETCH while mounting a component
    // componentDidMount() {
    //     fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    //         .then(response => response.json())
    //         //  assign API response ie show list to state object for rendering using SETSTATE
    //         .then(showList => this.setState({ seriesName: ['Vikings'], seriesList: showList }))
    // }

    // on change javascript event whichfetched from form field and fetches data from API
    onSeriesInputChange = event => {
        // template string literal used for passing dynamic series name
        // console.log(event.target.value);
        this.setState({ seriesName : event.target.value, isFetching : true });
        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
            .then(response => response.json())
            //  assign API response ie show list to state object for rendering using SETSTATE
            .then(showList => this.setState({ seriesList: showList, isFetching : false }))
    }
    render() {
        // destructure it from state object
        const { seriesName, seriesList, isFetching } = this.state;
        return (    
            <div>
                <div>
                    <input
                        value={ seriesName } 
                        type="text" 
                        onChange={this.onSeriesInputChange} />
                </div>
                {/* validation for empty series name  */}
                {
                    seriesList.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Please enter series name into the input field</p>
                }
                {/* validation for empty search result */}
                {
                    seriesList.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No results found with the {seriesName} name</p>
                }
                {
                    isFetching && <p>Loading....</p>
                }
                {
                    !isFetching && <SeriesList message={seriesName} list={seriesList} /> 
                }
                {/* <p>The {this.state.seriesName[0]} show list - {this.state.seriesList.length}</p> */}
                
            </div>
        )
    }
}

export default Series;
