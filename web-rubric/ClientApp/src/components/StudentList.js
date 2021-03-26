import React, { Component } from 'react';
import { Student } from './Student';

export class StudentList extends Component {

    render () {
        return (
            <tbody className={"student-list"}>
                {this.props.students.map( student => (
                    <Student key={student.id} id={student.id} name={student.name} class={student.class} />
                ))}
            </tbody>
        )
    }
}