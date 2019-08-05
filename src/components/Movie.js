import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Movie extends Component {
  

  rentingStatus=()=>{
    let i=this.props.movie
   this.props.rentingStatus(i.id)
  }


  true=()=>{
    // let id=this.props.match.params.id
    let i=this.props.movie
    return <div> <Link to={'/movies/' + i.id}> <img src={i.img} alt="not found" border="2" width="70" height="70"></img> </Link>
    <button className="button-r" onClick={this.rentingStatus}> - </button>  </div> 
  }

  false=()=>{
    // let id=this.props.match.params.id
    let i=this.props.movie
    return <div> <Link to={'/movies/' + i.id}> <img src={i.img} alt="not found" border="2" width="70" height="70"></img></Link> 
    <button className="button-g" onClick={this.rentingStatus}> + </button>  </div> 
  }

  render() {
    let i=this.props.movie
    return (
     
      <div key={i.id} className="box1"> 

      {i.isRented? this.true() : this.false()}

         </div>
    )
  }
}


export default Movie;