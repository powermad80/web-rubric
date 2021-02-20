import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import { Criteria } from './Criteria';

export class RubricEditor extends Component {

    constructor(props) {
        super(props);
        this.state = 
            {
                id: -1,
                maxPoints: 2,
                criteria: 
                [{
                    id: 0,
                    description: 'Describe this goal',
                    details: [{id: 0, text: "test 1"}, {id: 1, text: "test 2"}]
                }]
            };
    };

    increaseMaxGrade = () => {
        var newState = this.state;
        newState.maxPoints++;

        for (var i = 0; i < newState.criteria.length; i++)
        {
            newState.criteria[i].details.push({id: Date.now(), text: "Placeholder"});
        }
        this.setState(newState);
    }

    decreaseMaxGrade = () => {
        var newState = this.state;
        newState.maxPoints--;

        for (var i = 0; i < newState.criteria.length; i++)
        {
            newState.criteria[i].details.splice(newState.criteria[i].details.length - 1, 1);
        }
        this.setState(newState);
    }

    addCriteria = () => {
        var newState = this.state;
        var newdetails = [];
        for (var i = 0; i < this.state.maxPoints; i++)
        {
            newdetails.push({id: Date.now(), text: "Placeholder"});
        }

        newState.criteria.push({
            id: Date.now(),
            description: 'Describe this goal',
            details: newdetails
        });

        this.setState(newState);
    }

    updateValue = () => {
        
    }

    render () {
        return (<div>
            <span>Max Points: {this.state.maxPoints} <button onClick={this.increaseMaxGrade}>+</button><button onClick={this.decreaseMaxGrade} >-</button></span>
            <input placeholder={"Rubric name"}></input>
            {this.state.criteria.map( crit => (
                <Criteria key={crit.id} details={crit}></Criteria>
            ))}
            <button onClick={this.addCriteria}>Add grading criteria</button>
        </div>)
    }
}