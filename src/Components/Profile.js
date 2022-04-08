import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';

const captureUserDetails = () => {
  let name = document.getElementById('userName').value;
  let surname = document.getElementById('userSurname').value;
  let email = document.getElementById('userEmail').value;
  let errorMessage = document.getElementById('displayError');

  if (name == '' || surname == '' || email == '') {
    errorMessage.innerHTML = 'Please enter in all information';
    errorMessage.classList.add('displayError');
  } else {
    errorMessage.innerHTML = 'User details Updated';
    errorMessage.classList.add('displaySuccess');
    console.log(name + surname + email);
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.user.userName,
      userSurname: props.user.userSurname,
      userEmail: props.user.userEmail
    };
    this.handleSubmit = props.handleSubmit;
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('success');
  }

  render() {
    return (
      <div className="userProfile">
        <form onSubmit={this.handleSubmit} className="userProfileForm">
          <input
            name="userName"
            className="userProfileInputs"
            placeholder="Enter Your Name..."
            value={this.state.userName}
            onChange={this.onChange}
          ></input>
          <br></br>
          <input
            name="userSurname"
            className="userProfileInputs"
            placeholder="Enter Your Surname..."
            value={this.state.userSurname}
            onChange={this.onChange}
          ></input>
          <br></br>
          <input
            name="userEmail"
            className="userProfileInputs"
            placeholder="Enter Your Email..."
            value={this.state.userEmail}
            onChange={this.onChange}
          ></input>
          <br></br>
          <div id="displayError"></div>
          <br></br>
          <Button type="submit" variant="success" className="userProfileButton">
            Submit your changes
          </Button>
        </form>
      </div>
    );
  }
}

export default Profile;
