import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

export class Criteria extends Component {

    constructor(props){
        super(props);
        this.maxPoints = this.props.maxPoints;
        this.details = this.props.details;
    }

    render () {
        return (<tr>
                <button>[X]</button>
                <td><input type={"text"} value={this.details.description}></input></td>
            {this.details.details.map( det => (
                <td>{det.text}</td>
            ))}
        </tr>)
    }
}