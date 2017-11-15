import React, { Component } from 'react'

class Sum extends Component {

    constructor(){
        super();

        this.setState = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateInput(e) {
        var value = e.target.value;
        this.setState({
            property: value
        })
    }

    render (){
        return(
            <div className="puzzleBox sumPB">
                <h4>SUM</h4>
                <input className="inputLine" placeholder="Enter Number" onChange={e=>this.state.number1}></input>
                <input className="inputLine" placeholder="Enter Number" onChange={e=>this.state.number2}></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox"></span>
            </div>
        )
    }
}

export default Sum