import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Shopping from './Components/Shopping';
import SignIn from './Components/SignIn';
import Menu from './Components/Menu';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

let components = ['Home', 'Shopping', 'Profile'];

function UserIsLoggedIn(props) {
  let user = props.user;
  let handleSubmit = props.handleSubmit;

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Menu components={components} />

          {/*  */}
          <div>
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/Home" component={Landing} />
            <Route path="/Shopping" component={Shopping} />
            <Route
              path="/Profile"
              render={(props) => (
                <Profile {...props} user={user} handleSubmit={handleSubmit} />
              )}
            />
            {/* <Shopping products={products} /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };

    // The binding
    this.logInOrOut = this.logInOrOut.bind(this);
  }

  login = (values) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        user: values
      };
    });
  };

  logout = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        user: null
      };
    });
  };

  getValues = (event) => Object.fromEntries(new FormData(event.target));

  handleSubmit = (event) => {
    event.preventDefault();
    const values = this.getValues(event);
    this.login(values);
    console.log('success');
  };

  logInOrOut() {
    this.setState((prevState) => ({
      isUserSignedIn: !prevState.isUserSignedIn
    }));
  }

  render() {
    // getting use to using this statement instead of an if statement
    return this.state.user ? (
      <>
        {/* Added a log out button for fun */}
        <button className="logOutButton" onClick={this.logout}>
          Log out
        </button>
        <div>
          Welcome to Olivanders wand shop {this.state.user.userName}{' '}
          {this.state.user.userSurname}
        </div>
        <UserIsLoggedIn
          user={this.state.user}
          a
          handleSubmit={this.handleSubmit}
        />
      </>
    ) : (
      <div className="signInPage">
        <SignIn handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;

// I know that the instruction was to make the website look attractive using CSS, so I've add css styling. However, I am comfortable writing css and would prefer to focus on React as I am finding it really really challenging
