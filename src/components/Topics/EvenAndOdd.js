import React, { Component } from 'react'

class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.calculate.bind(this);

    }

    updateInput(e) {
        var value = e.target.value;
        this.setState({
            userInput: value
        })
    }

    calculate() {
        let tempEven = [];
        let tempOdd = [];
        let splitInput = this.state.userInput.split(',');
        for (let i = 0; i < splitInput.length; i++) {
            if (splitInput[i] % 2 === 0) {
                tempEven.push(splitInput[i]);
            } else {
                tempOdd.push(splitInput[i])
            }

        }
        this.setState({
            evenArray: tempEven,
            oddArray: tempOdd
        })
    }

    makeString(arr){
        return arr.join(', ')
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" placeholder="Enter Numbers" onChange={(e) => this.updateInput(e)}></input>
                <button className="confirmationButton" onClick={this.calculate}>Calculate</button>
                <span className="resultsBox" >Evens: {this.makeString(this.state.evenArray)} </span>
                <span className="resultsBox" >Odds: {this.makeString(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenAndOdd