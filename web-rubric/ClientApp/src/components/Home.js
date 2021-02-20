import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>You are not logged in</h1>
        <p>To access your student/professor resources, please log in.</p>
        <p>When logged in, you will be able to access:</p>
        <ul>
          <li>Professors: all your saved rubrics, or create new ones</li>
          <li>Students: Your submission details for any assigned professors</li>
        </ul>
      </div>
    );
  }
}
