import React from 'react';
import '../App.css';

function SignIn(props) {
  return (
    <>
      <h1 className="headerHeading">Welcome to Ollivanders Wand Shop</h1>
      <img
        className="signInPageLogo"
        src="https://i.pinimg.com/originals/e9/bd/3a/e9bd3ad4b5d25c6533ac19a671af8c19.jpg"
        alt="Image of Ollivanders Wand Shop log"
      />

      <h3 className="LogInHeading">Please log in</h3>
      <form className="userSignIn" onSubmit={props.handleSubmit}>
        <input type="text" name="userName" placeholder="Enter your name..." />
        <input
          type="text"
          name="userSurname"
          placeholder="Enter your Surname..."
        />
        <input type="text" name="userEmail" placeholder="Enter your Email..." />
        <button className="logInButton">Login</button>
      </form>
    </>
  );
}

export default SignIn;

// This page will display if the user is not logged in
