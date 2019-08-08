import React, { Component } from 'react';

class Search extends Component {
    state = {}
    render() {
        return (
            <div className="form-inline">
                <div className="form-group mb-2">
                    <label htmlFor="searchInput" className="sr-only">Enter your city</label>
                    <input type="text" className="form-control" id="searchInput" placeholder="City" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Update</button>
            </div>
        );
    }
}

export default Search;