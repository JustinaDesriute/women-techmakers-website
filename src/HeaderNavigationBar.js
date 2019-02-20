import React, { Component } from 'react';
import firebase from './Firebase.js' ;
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Events from './pages/Events';
import Team from './pages/Team';
import Mentoring from './pages/Mentoring';
import Podcasts from './pages/Podcasts';
import JobBoard from './pages/JobBoard';
import Blog from './pages/Blog';

class HeaderNavigationBar extends Component {

    componentDidMount(){
        // firebase.database().ref().child("X").on('value' , {...});
    }

  render() {

    return (
      <div>
          <div className="nav-container">
            <Link
                to='/events'
                className='nav-link'>Events
            </Link>
            <Link
                to='/podcasts'
                className='nav-link'>Podcasts
            </Link>
            <Link
                to='/mentoring'
                className='nav-link'>Mentoring
            </Link>
            <Link
                to='/jobboard'
                className='nav-link'>Job Board
            </Link>
            <Link
                to='/blog'
                className='nav-link'>Blog
            </Link>

            <Route exact path='/' render={() => (
                <Team/>
            )} />
            <Route exact path='/team' render={() => (
                <Team/>
            )} />
            <Route exact path='/events' render={() => (
                <Events/>
            )} />
            <Route exact path='/podcasts' render={() => (
                <Podcasts/>
            )} />
            <Route exact path='/mentoring' render={() => (
                <Mentoring/>
            )} />
            <Route exact path='/jobboard' render={() => (
                <JobBoard/>
            )} />
            <Route exact path='/blog' render={() => (
                <Blog/>
            )} />
          </div>
      </div>
    )
  }
}

export default HeaderNavigationBar