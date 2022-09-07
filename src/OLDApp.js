import React, { Component } from "react";

class App extends Component {
// class App extend React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
        <h1>Counter example</h1>
        <p></p>
        <button>+</button>
        <button>-</button>
      </>
    )
  }
}

export default App;
8:53
src/App.js
8:54

const App = () => {
  
  return (
    <>
      <h1>Counter example</h1>
      <p></p>
      <button>+</button>
      <button>-</button>
    </>
  )
}

export default App;