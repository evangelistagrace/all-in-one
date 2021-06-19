// CSS //
.tweet {
 display: flex;
 justify-content: space-around;
}

.tweet div {
  border: 1px solid black;
  background: white;
  border-radius: 10px;
  width: 200px;
}

.red {
  color: red;
}

// Tweet.js //
import React from 'react'


// passing props
function Tweet(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h5>This is a random tweet</h5>
            <h4>Number of Like</h4>
        </div>
    )
}


export default Tweet;

// App.js //

import React, {useState} from 'react'
import Tweet from './Tweet'
import './App.css'

function App() {

  // state
  const [counter, setCounter] = useState(0);
  const [isRed, setRed] = useState(false);

  const increment = () => {
    setCounter(counter + 1)
    setRed(!isRed)
  }

  let users = [
    {name: 'Grace'},
    {name: 'Bubs'},
    {name: 'Sharon'}
  ]
  return (
    <div>
      <h2>Tweets</h2>
      <h3 className={isRed ? "red" : ""}>Count: {counter}</h3>
      <button onClick={increment}>Click me</button>   
      <div className="tweet">
        {
          users.map(user => (
            <Tweet name={user.name}/>
          ))
        }
      </div>
    </div>
  )
}


export default App;


// index.js //

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

