import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {

    rentingStatus=(id)=>{
     let tempData = [...this.props.data]
     tempData.find(i=>i.id=== id).isRented = true
     this.setState({data: tempData})
    }

  render() {
    return (
      <div>
          <input placeholder="Search" />

          <h5>Catalog:</h5>
        {this.props.data.filter(i=>!i.isRented).map(i => <Movie key={i.id} movie={i} rentingStatus={this.rentingStatus} />)}
        <h5>Rented:</h5>
        {this.props.data.filter(i=>i.isRented).map(i => <Movie key={i.id} movie={i} rentingStatus={this.rentingStatus} />)}
      
      </div>
    )
  } 
}

export default Catalog;