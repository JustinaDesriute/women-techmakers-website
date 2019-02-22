import React, { Component } from 'react';
import firebase from '../FirebaseConfig';

class Blog extends Component {

  constructor() {
    super();
    this.state = {
      blogpost: "",
      blogimage: "",
    };
  }

    getBlogPosts = e => {
      const db = firebase.firestore();

      db.collection('blogposts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let fetcheddata = Object.values(doc.data());
          let result = fetcheddata[1];
          let img = fetcheddata[0];
          this.setState({
            blogpost: result,
            blogimage: img,
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
          <img src={this.state.blogimage}/>
          <p>Blog post fetched from firebase: {this.state.blogpost}</p>
        </div>
    )
  }
}

export default Blog