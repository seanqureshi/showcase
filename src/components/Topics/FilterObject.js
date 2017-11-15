import React, { Component } from 'react'



class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }
        this.filterObj=this.filterObj.bind(this);
    }

    updateInput(e) {
        var value = e.target.value;
        this.setState({
            userInput: value
        })
    }

    filterObj (){
        let tempFilteredArr = this.state.employees.filter(employee => employee.hasOwnProperty(this.state.userInput))

    this.setState({
        filteredArray: tempFilteredArr
    })

    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.filteredArray)}</span>
                <input className='inputLine' placeholder="Enter Employee" onChange={e=>this.updateInput(e)}></input>
                <button className='confirmationButton' onClick={this.filterObj}>Filter</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.employees)}</span>
            </div>
        )
    }
}

export default FilterObject