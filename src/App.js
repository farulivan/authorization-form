import React from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input 
          type="password"
          placeholder="Password"
        />
        <input 
          type="submit" 
        />
      </form>
    );
    const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
    );
    return (
      <div id="authorization">
        {this.state.authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;
