import React, { Component } from 'react';


class Landing extends Component {

    constructor() {
        super()
        this.state = {
            data: [ { name: "Yoni", background: "blue" },
                    { name: "Mony", background: "yellow" }
            ]
        }
    }

    handleClick = () => {
        console.log(this.props)
        this.props.history.push('/catalog');
    }

    render() {
        return (
            <div>
                <h1>  Who's watching? </h1>
              <div onClick={this.handleClick} className="box1"> {this.state.data[0].name}   </div>
              <div onClick={this.handleClick} className="box2"> {this.state.data[1].name}   </div>
          
            </div>
        )
    }
}


export default Landing;