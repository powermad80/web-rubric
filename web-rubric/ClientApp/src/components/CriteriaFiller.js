import React, { Component } from 'react';

export class CriteriaFiller extends Component {
    constructor(props) {
        super(props);
    }

    isHighlighted = (val) => {
        var res = null;
            for (var i = 0; i < this.props.selRubricGrades.length; i++)
            {
                if (this.props.selRubricGrades[i].critID == this.props.criteria.id) {
                    if (this.props.selRubricGrades[i].detID == val) {
                        return {backgroundColor: 'greenYellow'};
                    }
                    else {
                        return res;
                    }
                }
            }
    }

    render () {
        return(
            <tr>
                <td>{this.props.criteria.description}</td>
                {this.props.criteria.details.map( det => (
                    <td onClick={() => this.props.cellClick(this.props.criteria.id, det.id)} style={this.isHighlighted(det.id)} id={det.id} key={det.id}>{det.text}</td>
                ))}
            </tr>
        )
    }
}