import React, { Component } from 'react';
import logo from '../wmt.png';
import DonutChart from '../DonutChart';
import firebase from '../FirebaseConfig';
import './Team.css';

class Team extends Component {

  constructor() {
    super();
    this.state = {
      firebasedata: "",
      memberphoto: "",
    };
  }

    getFirebaseInfo = e => {
      const db = firebase.firestore();

      db.collection('team').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let fetcheddata = Object.values(doc.data());
          let result = fetcheddata[0];
          let photo = fetcheddata[2];
          this.setState({
            firebasedata: result,
            memberphoto: photo
          });
        })
      });
    }

  render() {
      return (
        <div className="main-content">
          <div>
            <p>navigated to TEAM</p>
            <button onClick={this.getFirebaseInfo}>
              fetch team member from firebase
            </button>
            <p>the team member fetched from firebase: {this.state.firebasedata}</p>
            <img className="team-member-photo" src={this.state.memberphoto}/>
          </div>
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
          {/* just a demo chart to show that d3.js renders */}
          <DonutChart></DonutChart>
        </div>
      )
      }
    }

export default Team