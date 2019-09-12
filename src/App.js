import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import History from "./History.js";


const API = 'http://taskmaster-env.3nz9fretef.us-west-2.elasticbeanstalk.com/api/v1/tasks';

// resources: https://github.com/codefellows/seattle-java-401d5/tree/master/class-28/demo/api-frontend

function App() {

  const [tasks, setTasks] = useState([]);

  function _getTasks() {
    fetch(API)
      .then( data => data.json() )
      .then( fetchedTasks => setTasks(fetchedTasks) );
  }

  function _deleteTask(id) {
    fetch()
     .method()
     .then()
  }

  useEffect( _getTasks, [] );

  return (
    <div className="app">
      <ul>
        {tasks.map( (task,idx) => {
          return (
            <li key={task.id}>
              <details>
                <summary>
                  <span onClick={_deleteTask}>{task.title}</span>
                </summary>
                <History history={task.history} />
              </details>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


export default App;
