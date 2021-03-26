import React, { Component } from 'react';
import { CriteriaFiller } from './CriteriaFiller';
import './RubricFiller.css'

export class RubricFiller extends Component {

    genTableHeaders = () => {
        var pointArray = [];
        for (var i = 1; i <= this.props.criteria[0].details.length; i++)
        {
            pointArray.push( { id: i } );
        }

        var headers = pointArray.map( point => (
            <th key={point.id}>{point.id.toString() + " pts"}</th>
        ));

        return headers;
    }

    totalGrade = () => {
        var earned = 0;
        for (var i = 0; i < this.props.selGrades.length; i++)
        {
            earned = earned + this.props.selGrades[i].detID;
        }
        return earned;
    }

    genCriteriaRows = () => {
        var CriteriaRows = this.props.criteria.map( crit => (
            <CriteriaFiller cellClick={this.props.cellClick} selRubricGrades={this.props.selGrades} key={crit.id} criteria={crit} />
        ));

        return CriteriaRows;
    }

    render () {
        return(
            <div className={"fillerRubricDiv"}>
                <table className={"fillerRubric"}>
                    <th>Goal</th>
                    {this.genTableHeaders()}
                    <tbody>
                        {this.genCriteriaRows()}
                    </tbody>
                </table>
                <h3>Total grade: {this.totalGrade()}</h3>
            </div>
        )
    }
}