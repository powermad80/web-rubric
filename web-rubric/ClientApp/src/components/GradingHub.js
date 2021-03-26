import React, { Component } from 'react';
import { StudentList } from './StudentList';
import { RubricList } from './RubricList';
import { RubricFiller } from './RubricFiller';
import './GradingHub.css'

export class GradingHub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rubrics: [{id: 1, name: "Project 1"}, {id: 2, name: "Project 2"}, {id: 3, name: "Exam 1"}, {id: 4, name: "Student Research"}],
            students: [ { id: 0, name: "Smith, Dan", class: "Senior Design" }, { id: 1, name: "Rick, Pickle", class: "Senior Design" }, { id: 2, name: "Dempsey, Tank", class: "Senior Design" }, { id: 3, name: "Kageyoshi, Nagato", class: "Advanced Architecture"},
                        { id: 4, name: "Bush, Jeb", class: "Advanced Applause Theory"}, {id: 5, name: "Cornelius, Yukon", class: "Lumberjacking"},
                        { id: 6, name: "Hange, Zoe", class: "Organic Chemistry"}, {id: 7, name: "Qiu Tong", class: "Engineering Principles I"}],
            selectedRubric: 0,
            gradingActive: 0,
            namefilter: "",
            classfilter: "",
            selectedStudents: [1],
            selRubricGrades: [{critID: 1, detID: 2}],
            selRubricCriteria: [{
                id: 0,
                description: 'Student paper understands something about what they wrote',
                details: [{id: 1, text: "Student demonstrated little understanding"}, {id: 2, text: "Student demonstrated some understanding"}, {id: 3, text: "Student demonstrated full understanding"}]
            },
            { id: 1, description: 'Second goal description', details: [{id: 1, text: "test 2-1"}, {id: 2, text: "test 2-2"}, {id: 3, text: "test 3-3"}]},
            { id: 2, description: 'Third goal description', details: [{id: 1, text: "test 3-1"}, {id: 2, text: "test 3-2"}, {id: 3, text: "test 3-3"}]}]
        }
    }

    onRubricCellClick = (critID, detID) => {
        var newState = this.state;
        for (var i = 0; i < newState.selRubricGrades.length; i++)
        {
            if (newState.selRubricGrades[i].critID == critID) {
                if (newState.selRubricGrades[i].detID == detID) {
                    newState.selRubricGrades[i].detID = null;
                }
                else {
                    newState.selRubricGrades[i].detID = detID;
                }
                this.setState(newState);
                return;
            }
        }
        newState.selRubricGrades.push({critID: critID, detID: detID});
        this.setState(newState);
        return;

    }

    onRadioChange = (value) => {
        var newState = this.state;
        newState.selectedRubric = value;
        newState.gradingActive = 0;
        this.setState(newState);
    }

    beginGrading = () => {
        this.setState({gradingActive: 1});
    }

    getCopy = (x) => {
        return JSON.parse(JSON.stringify(x));
    }

    getClassList = () => {
        var classlist = [];
        var classobjlist = [];
        for (var i = 0; i < this.state.students.length; i++)
        {
            classlist.push(this.state.students[i].class);
        }
        classlist = classlist.filter((item, j, ar) => ar.indexOf(item) === j);

        for (var j = 0; j < classlist.length; j++)
        {
            classobjlist.push({id: j, val: classlist[j]});
        }

        var classoptions = classobjlist.map( clss => (
            <option key={clss.id} value={clss.val}>{clss.val}</option>
        ));
        return classoptions;
    }

    getSortedStudentList = () => {
        var students = [];
        
        for (var i = 0; i < this.state.students.length; i++)
        {
            if (this.state.students[i].name.toLowerCase().includes(this.state.namefilter.toLowerCase()) && this.state.students[i].class.includes(this.state.classfilter))
            {
                students.push(this.state.students[i]);
            }
        }

        students.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
        return students;
    }

    render () {
        var bothFilled = Boolean(this.state.selectedStudents && this.state.selectedRubric);
        var button = (bothFilled) ? (<button onClick={() => this.beginGrading()}>Begin Grading</button>) : null;
        var fillRubric = (this.state.gradingActive) ? (<RubricFiller cellClick={this.onRubricCellClick} className={"fillerRubric"} selGrades={this.state.selRubricGrades} criteria={this.state.selRubricCriteria}></RubricFiller>) : null;
        var submitButton = (this.state.gradingActive) ? (<button className={"studentlistButton"} onClick={() => {alert("Success"); this.setState({gradingActive: 0})}}>Submit</button>) : null;
        return(
        <div>
        <div className={"row"}>
            <div className={"column"}>
            <h2>Select students:</h2>
            <input type="text" value={this.state.namefilter} onChange={ (e) => this.setState({namefilter: e.target.value})} placeholder={"Search by name..."} />
            <select onChange={(e) => this.setState({classfilter: e.target.value})}>
                <option value={""}>All Classes</option>
                {this.getClassList()}
            </select>
            <table className={"studentlist"}>
                <th></th>
                <th>Name</th>
                <th>Class</th><StudentList students={this.getSortedStudentList()} />
            </table>
            </div>
            <br></br>
            <div className={"column"}>
            <h2>Select rubric:</h2>
            <table className={"rubriclist"}>
                <RubricList handleChange={this.onRadioChange} selected={this.state.selectedRubric} rubrics={this.state.rubrics} />
            </table>
            </div>
            {button}
            
        </div>
        {fillRubric}
        {submitButton}
        </div>)
    }
}