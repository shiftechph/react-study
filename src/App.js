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

        showReset: false,

        // button tick
        buttonTick: false,

        buttonTab: 1
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

  buttonTickAction = () => {

    this.setState({
      buttonTick: this.state.buttonTick ? false : true
    });

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

        <br/> <br/>

        <button
          type="button"
          className={`text-white font-bold py-2 px-4 rounded ${this.state.buttonTick ? `bg-green-900` : `bg-gray-500`}`}
          onClick={this.buttonTickAction}
        >
          Tick Button
        </button>

        <br/> <br/>

        <hr/>

        <br/> <br/>

        <div className="flex flex-row">
        
          <button
            type="button"
            className={`text-white font-bold py-2 px-4 rounded ${this.state.buttonTab == 1 ? `bg-green-900` : `bg-gray-500`}`}
            onClick={() => this.setState({ buttonTab: 1 })}
          >
            Button 1
          </button>

          <button
          type="button"
          className={`text-white font-bold py-2 px-4 rounded ${this.state.buttonTab == 2 ? `bg-green-900` : `bg-gray-500`}`}
          onClick={() => this.setState({ buttonTab: 2 })}
        >
          Button 2
        </button>

        <button
          type="button"
          className={`text-white font-bold py-2 px-4 rounded ${this.state.buttonTab == 3 ? `bg-green-900` : `bg-gray-500`}`}
          onClick={() => this.setState({ buttonTab: 3 })}
        >
          Button 3
        </button>

        </div>

        <br/>

        {
          this.state.buttonTab == 1 &&
            <div className={`bg-pink-400 w-64 h-64`}>
              Tab 1
            </div> 
        }

        {
          this.state.buttonTab == 2 &&
            <div className={`bg-pink-400 w-64 h-64`}>
              Tab 2
            </div> 
        }

        {
          this.state.buttonTab == 3 &&
            <div className={`bg-pink-400 w-64 h-64`}>
              Tab 3
            </div> 
        }

        <br/><br/>

      </div>
    )
  }
}

export default App;
