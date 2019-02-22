import React, { Component } from 'react';
import firebase from '../FirebaseConfig';

class Blog extends Component {

  constructor() {
    super();
    this.state = {
      blogpost: "",
    };
  }

    getBlogPosts = e => {
      const db = firebase.firestore();

      db.collection('blogposts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let fetcheddata = Object.values(doc.data());
          let result = fetcheddata[0];
          this.setState({
            blogpost: result,
          });
        })
      });
    }
  render() {

    return (
        <div className="main-content">
          <p>navigated to: BLOG</p>
          <button onClick={this.getBlogPosts}>
            fetch team member from firebase
          </button>
          <p>Blog post fetched from firebase: {this.state.blogpost}</p>
        </div>
    )
  }
}

export default Blog