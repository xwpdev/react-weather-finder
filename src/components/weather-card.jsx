import React, { Component } from "react";

class WeatherCard extends Component {
  renderSubtitle() {
    if (this.props.cityName) {
      return (<div className="col">
        <span>Forecast for city of {this.props.cityName}</span>
      </div>);
    }
    return <br />;
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.renderSubtitle()}
          <div className="w-100" />
          {this.props.forecast.map((data, index) =>
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{data.Temperature.Minimum.Value}{data.Temperature.Minimum.Unit}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{data.Day.IconPhrase}</h6>
                  <span>{data.Date.split('T')[0]}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </React.Fragment>
    );
  }
}

export default WeatherCard;
