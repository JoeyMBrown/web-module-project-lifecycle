import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {

    state = {
      user: {},
      followers: [],
      showFollowers: false
    }

  componentDidMount() {
    axios.get('https://api.github.com/users/JoeyMBrown')
      .then((res) => this.setState({user: res.data}))
      .catch((err) => console.log(err));
  }
  setFollowers = (followers) => {
    this.setState({followers: followers.data});
  }
  toggleFollowers = () => {
    this.setState({showFollowers: !this.state.showFollowers})
  }
  render () {
    return (
      <div className="App">
        <UserCard user={this.state.user} setFollowers={this.setFollowers}/>
        <button className='followers-button' onClick={this.toggleFollowers}>See Followers!</button>
        {
          this.state.showFollowers ? this.state.followers.map((follower, index) => {
            return <FollowerCard key={index} follower={follower}/>
          }) : null
        }
      </div>
    );     
  }
}

export default App;
