import React from "react";
import Calculator from "./Calculator.jsx";
import Header from "./Header.jsx";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
