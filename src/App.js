import React, { Component } from 'react';

const ErwinKent = (props) => {

  console.log(props.nameLast);

  return (
    <h1>{ props.nameLast }</h1>
  )
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: "Erwin",
        last: "Jay",

        showReset: false
    }
  }

  buttonClick = () => {
    this.setState({ 
      name: "Kent",
      showReset: true
    });
  }

  buttonReset = () => {
    this.setState({ 
      name: "Erwin",
      showReset: false
    });
  }

  goToLogin = () => {
    this.props.history.push('/login-screen');
  }

  render() {

    return (
      <div>

        { `${this.state.name} ${this.state.last}` }

        <br/>
        <br/>

        {
          !this.state.showReset
            ?
            <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.buttonClick}
              >
                Click me!
            </button>
            :
            <button 
              type="button" 
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.buttonReset}
              >
                Reset!
            </button>
        }

        <br/>
        <br/>

        <ErwinKent nameLast={`${this.state.name} ${this.state.last}`} />

        <br/> <br/>

        <button
          type="button"
          className={`bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded`}
          onClick={this.goToLogin}
        >
          Go To Login
        </button>

      </div>
    )
  }
}

export default App;
