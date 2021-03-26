import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

export class Criteria extends Component {

    constructor(props){
        super(props);
        this.maxPoints = this.props.maxPoints;
        this.details = this.props.details;
        this.descChange = this.props.descChange;
        this.detChange = this.props.detChange;
        this.id = this.props.id;
        this.delCrit = this.props.delCrit;
    }

    render () {
        return (<tr>
                <td className={"rmTD"} onClick={() => this.delCrit(this.id)}>[X]</td>
                <td><textarea onChange={ (e) => this.descChange(this.id, e.target.value)} value={this.details.description}></textarea></td>
            {this.details.details.map( det => (
                <td><textarea onChange={ (e) => this.detChange(det.id, this.id, e.target.value)} value={det.text}></textarea></td>
            ))}
        </tr>)
    }
}