import React, { Component } from 'react';


class MovieDetail extends Component {
  render() {
    return (
      <div>
       <h4>{this.props.data[1].title} - {this.props.data[1].year} </h4> 
       <div>{this.props.data[1].descrShort}</div>
      </div>
    )
  }
}


export default MovieDetail;