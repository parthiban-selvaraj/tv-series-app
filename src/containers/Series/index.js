import React, { Component } from "react";

class Series extends Component {
    // State - Javascript objects which react understands and renders by using their property
    state = {
        seriesName: [],
        seriesList: []
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
    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
            .then(response => response.json())
            //  assign API response ie show list to state object for rendering using SETSTATE
            .then(showList => this.setState({ seriesName: ['Vikings'], seriesList: showList }))
    }
    render() {
        return (
            <div> 
                <p>The No of series in the List - {this.state.seriesName.length}</p>
                <p>The {this.state.seriesName[0]} show list - {this.state.seriesList.length}</p>
            </div>
        )
    }
}

export default Series;
