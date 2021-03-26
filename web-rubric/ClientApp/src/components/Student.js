import React, { Component } from 'react';

export class Student extends Component {
    constructor(props)
    {
        super(props);
        this.name = this.props.name;
        this.class = this.props.class;
        this.id = this.props.id;
    }


    render () {
        return(
        <tr>
            <td><input type={"checkbox"}/></td>
            <td>{this.name}</td>
            <td>{this.class}</td>
        </tr>)
    }
}