import React, { Component } from 'react';
import { Rubric } from './Rubric';

export class RubricList extends Component {

    render () {
        return(
            <tbody> 
                {this.props.rubrics.map(rubric => (
                    <Rubric selected={this.props.selected} handleChange={this.props.handleChange} key={rubric.id} id={rubric.id} name={rubric.name} />
                ))}
            </tbody>
        )
    }
}