import React, { Component } from 'react';
import logo from '../wmt.png';
import DonutChart from '../DonutChart';
import firebase from '../FirebaseConfig';

class Team extends Component {

  constructor() {
    super();
    this.state = {
      fullname: "",
      randomuser: "",
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    }

    addUser = e => {
      e.preventDefault();
      const db = firebase.firestore();
      db.collection('team').add({
        fullname: this.state.fullname,
      });
      this.setState({
        fullname: "",
      });
    };

    getFirebaseInfo = e => {
      const db = firebase.firestore();
      db.collection('team').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let fetcheddata = doc.data();
          let finalres = Object.values(fetcheddata);
          let result = finalres[0];
          console.log(result);
          this.setState({
            randomuser: result,
          });
          console.log('randomuser', this.state.randomuser);
        })
      });
    }


  render() {

        return (
          <div className="main-content">
            <div>
              <p>navigated to TEAM</p>
              <button onClick={this.getFirebaseInfo}>
                get shit from firebase: {this.state.randomuser}
              </button>
            </div>
            <section>
              <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Welcome to WomenTechMakers Frankfurt!
                </p>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/company/women-techmakers-frankfurt/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Meet us!
                </a>
            </section>
            <section>
              <p>the name of our random user is: {this.state.randomuser}</p>
            <form onSubmit={this.addUser}>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={this.updateInput}
                value={this.state.fullname}
              />
             <button type="submit">Submit</button>
            </form>
            </section>
            <DonutChart></DonutChart>
          </div>
        )
      }
    }

export default Team