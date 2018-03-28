import React, { Component } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './GuestBook.css';
//import './App.css';
import './semantic/dist/semantic.min.css';

class GuestBook extends Component {
  constructor(props) {
    super(props);

    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);

    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
    }
  }

  handleSignatureOfGuest = event => {
    this.setState({
      SignatureOfGuest: event.target.value
    });
  }

  handleMessageofGuest = event => {
    this.setState({
      MessageofGuest: event.target.value
    });
  }

  addToGuestBook = event => {
    event.preventDefault();

    this.setState({
      SignatureOfGuest: event.target.value,
      MessageofGuest: event.target.value,
    });

    axios.post('/api/signatures', {
      SignatureOfGuest: this.state.SignatureOfGuest,
      MessageofGuest: this.state.MessageofGuest,
    })
      .then(response => {
        console.log(response, 'Signature added!');
      })
      .catch(err => {
        console.log(err, 'Signature not added, try again');
      });

    this.setState({
      SignatureOfGuest: "",
      MessageofGuest: "",
    });
  }

  render() {
    return (
      <div className="ui centered grid">
        <div className="four wide column centered row">
          <h1 className="ui header">Welcome to Gestbook</h1>
          <form className="ui form">
            <div className="field">
              <input 
              type="text" 
              onChange={ this.handleSignatureOfGuest } 
              name="SignatureOfGuest" 
              value={ this.state.SignatureOfGuest } 
              placeholder="Enter your name..." 
              />
            </div>
            <div className="field">
              <textarea 
              onChange={ this.handleMessageofGuest } 
              name="MessageofGuest" 
              value={ this.state.MessageofGuest } 
              placeholder="Type a message..." 
              />
            </div>
            <button 
            className="ui button" 
            type="submit" 
            onClick={ this.addToGuestBook }
            >
              Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    )
  }

}

export default GuestBook;