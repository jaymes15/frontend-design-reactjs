import React, {Component} from 'react';
import Header from './component/header.js';
import About from './component/about.js';
import Task from './component/task.js';





class App extends Component {

  render() {
    return (
          <div>
            < Header />
            < About />
            < Task />
          </div>
      )
  }
}
export default App;
