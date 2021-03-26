import React, { Component } from 'react';
import './ViewAddStudents.css';

export class ViewAddStudents extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            students: [ { id: 0, name: "Smith, Dan", class: "Senior Design" }, { id: 1, name: "Rick, Pickle", class: "Senior Design" }, { id: 2, name: "Dempsey, Tank", class: "Senior Design" }, { id: 3, name: "Kageyoshi, Nagato", class: "Advanced Architecture"},
                        { id: 4, name: "Bush, Jeb", class: "Advanced Applause Theory"}, {id: 5, name: "Cornelius, Yukon", class: "Lumberjacking"},
                        { id: 6, name: "Hange, Zoe", class: "Organic Chemistry"}, {id: 7, name: "Qiu Tong", class: "Engineering Principles I"}],
            selStudent: 0,
            grades: [{id: 1, rubricName: "CS6031 Project 1", score: 16, max: 20, date: '1/12/2021'},
                     {id: 2, rubricName: "CS6031 Group Presentation", score: 28, max: 30, date: '2/2/2021'},
                     {id: 3, rubricName: "CS6031 Final Project", score: 8, max: 24, date: '2/15/2021'},
                     {id: 4, rubricName: "Extra Credit Presentation", score: 16, max: 16, date: '3/12/2021'}],
            namefilter: "",
            classfilter: "",
            newStudentName: "",
            newStudentClass: "",
            addStudentActive: 0
        }
    }

    selectStudent = (student) => {
        this.setState({selStudent: student});
    }

    getSelStudentName = () => {
        for (var i = 0; i < this.state.students.length; i++)
        {
            if (this.state.students[i].id == this.state.selStudent)
            {
                return this.state.students[i].name;
            }
        }
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

    addStudentFields = () => {
        var container = (
            <div>
                <input type="text" value={this.state.newStudentName} onChange={(e) => this.setState({newStudentName: e.target.value})} placeholder={"Student name..."} />
                <input type="text" value={this.state.newStudentClass} onChange={(e) => this.setState({newStudentClass: e.target.value})} placeholder={"Class..."} />
                <button className={"studentlistbutton"} onClick={() => this.addStudent()}>Submit</button>
            </div>
        );

        return container;
    }

    addStudent = () => {
        var newStudent = {
            id: this.state.students.length + 1,
            name: this.state.newStudentName,
            class: this.state.newStudentClass
        };

        var newStudents = this.state.students;
        newStudents.push(newStudent);
        this.setState({students: newStudents, addStudentActive: 0});
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
        var studentlist = this.getSortedStudentList().map( student => (
            <tr key={student.id} onClick={() => this.selectStudent(student.id)}>
                <td>{student.name}</td>
                <td>{student.class}</td>    
            </tr>
        ));

        var studentAdd = null;
        if (this.state.addStudentActive){
            studentAdd = this.addStudentFields();
        }
        
        var gradelist;
        if (this.state.selStudent > 0)
        {
            if (this.state.grades.length > 0)
            {
                var graderows = this.state.grades.map( grade => (
                    <tr key={grade.id}>
                        <td>{grade.rubricName}</td>
                        <td>{grade.score}</td>
                        <td>{(Math.trunc((grade.score / grade.max) * 100)).toString() + '%'}</td>
                        <td>{grade.date}</td>
                    </tr>
                ));

                gradelist = (
                    <table>
                        <th>Rubric</th>
                        <th>Score</th>
                        <th></th>
                        <th>Date</th>
                        <tbody>
                            {graderows}
                        </tbody>
                    </table>
                );
            }
            else
            {
                gradelist = (<span>Selected student has no grades in the system</span>);
            }
        }
        else
        {
            gradelist = (<span>Select a student to view any assigned rubric grades</span>)
        }

        return(
            <div>
                <div className={"row"}>
                    <div className={"column"}>
                        <input type="text" value={this.state.namefilter} onChange={ (e) => this.setState({namefilter: e.target.value})} placeholder={"Search by name..."} />
                        <select onChange={(e) => this.setState({classfilter: e.target.value})}>
                            <option value={""}>All Classes</option>
                            {this.getClassList()}
                        </select>
                        <table>
                            <th>Student Name</th>
                            <th>Class/Section</th>
                            <tbody>
                                {studentlist}
                            </tbody>
                        </table>
                    </div>
                    <div className={"column"}>
                        <h5>Grades recorded for {this.getSelStudentName()}:</h5>
                        {gradelist}
                    </div>
                </div>
                <button onClick={() => this.setState({addStudentActive: 1})} className={"studentlistbutton"}>Add Student Manually</button>
                {studentAdd}
                <br />
                <div className={"studentlistbutton"}>Upload Student Info (.xls)</div><input type={"file"} className={"studentlistbutton"} />
            </div>
        )
    }
}