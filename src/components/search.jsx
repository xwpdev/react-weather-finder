import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    // W6B90bDjUcWCwUj6zReAeXxaLEJ22n5h
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const apiKey = 'W6B90bDjUcWCwUj6zReAeXxaLEJ22n5h';
        const locationUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=+' + apiKey + '&q=' + this.state.value;
        axios.get(locationUrl)
            .then(locationData => {
                // show data
                const currentCity = locationData.data[0];
                console.log(currentCity);

                // get weather info
                const forcastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + currentCity.Key + '?apikey=' + apiKey;
                axios.get(forcastUrl)
                    .then(forecastData => {
                        console.log(forecastData);
                        alert(forecastData.data.Headline.Text);
                    });
            });
    }

    render() {
        return (
            <div className="">
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <input type="text" className="form-control" id="searchInput" name="searchInput" placeholder="Enter your city" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        );
    }
}

export default Search;