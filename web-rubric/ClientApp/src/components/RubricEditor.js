import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import { Criteria } from './Criteria';
import './RubricEditor.css';

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
                    details: [{id: 1, text: "test 1"}, {id: 2, text: "test 2"}]
                }]
            };
    };

    increaseMaxGrade = () => {
        var newState = this.state;
        newState.maxPoints++;

        for (var i = 0; i < newState.criteria.length; i++)
        {
            newState.criteria[i].details.push({id: newState.criteria[i].details.length + 1, text: "Placeholder"});
        }
        this.setState(newState);
    }

    decreaseMaxGrade = () => {
        if (this.state.maxPoints == 0){
            return;
        }
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
            newdetails.push({id: i + 1, text: "Placeholder"});
        }

        newState.criteria.push({
            id: Date.now(),
            description: 'Describe this goal',
            details: newdetails
        });

        this.setState(newState);
    }

    delCriteria = (id) => {
        var newstate = this.state;
        for (var i = 0; i < newstate.criteria.length; i++)
        {
            if (newstate.criteria[i].id == id){
                newstate.criteria.splice(i, 1);
                break;
            }
        }
        this.setState(newstate);
    }

    updateDescValue = (id, value) => {
        var newstate = this.state;
        for (var i = 0; i < newstate.criteria.length; i++)
        {
            if (newstate.criteria[i].id == id){
                newstate.criteria[i].description = value;
                break;
            }
        }
        this.setState(newstate);
    }

    updateDetailValue = (detId, critId, value) => {
        var newstate = this.state;
        for (var i = 0; i < newstate.criteria.length; i++)
        {
            if (newstate.criteria[i].id == critId)
            {
                newstate.criteria[i].details[detId - 1] = value;
                break;
            }
        }
        this.setState(newstate);
    }

    render () {
        return (<div className={"rubricEditor"}>
            <div className={"pointButtons"}>Max Points: {this.state.maxPoints} <button onClick={this.increaseMaxGrade}>+</button><button onClick={this.decreaseMaxGrade} >-</button></div>
            <input placeholder={"Rubric name"}></input> 
            {this.state.criteria.map( crit => (
                <Criteria delCrit={this.delCriteria} detChange={this.updateDetailValue} descChange={this.updateDescValue} key={crit.id} id={crit.id} details={crit}></Criteria>
            ))}
            <button className={"critButton"} onClick={this.addCriteria}>Add grading criteria</button>
            <button className={"saveButton"}>Save</button>
            <div>Upload pre-made rubric file</div>
            <input type={"file"}/>
        </div>)
    }
}