import React, { Component } from 'react';

export class Rubric extends Component {

    render () {
        let check = !!(this.props.id == this.props.selected);
        return(
            <tr>
                <td><input type={"radio"} onChange={(e) => this.props.handleChange(e.target.value)} checked={check} value={this.props.id} />{" " + this.props.name}</td>
                <td></td>
            </tr>
        )
    }
}