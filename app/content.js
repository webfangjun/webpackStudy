import React, { Component } from 'react';
import Styles from './css/style.css';
export default class App extends Component {
  render() {
    return (
        <div>
        <h1 className={Styles.fontColor}>Hello World!</h1>
      </div>
    );
  }
}

