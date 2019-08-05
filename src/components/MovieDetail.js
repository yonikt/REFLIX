import React, { Component } from 'react';


class MovieDetail extends Component {
  render() {
    return (
      <div>
       <h4>{this.props.data[this.props.match.params.id].title} - {this.props.data[this.props.match.params.id].year} </h4> 
       <div>{this.props.data[this.props.match.params.id].descrShort}</div>
      </div>
    )
  }
}


export default MovieDetail;