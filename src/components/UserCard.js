import axios from "axios";
import React from "react";

class UserCard extends React.Component {
    componentDidMount() {
        axios.get('https://api.github.com/users/JoeyMBrown/followers')
            .then((res) => this.props.setFollowers(res))
            .catch((err) => console.log(err))
    }
    render() {
        const { avatar_url, followers, following, name } = this.props.user;
        return (
            <div className='user-card'>
                <div className='img-container'>
                    <img src={avatar_url} alt={`portrait of ${name}`}/>
                    <h1>{name}</h1>
                </div>
                <div className='following-info'>
                    <h2>Followers: {followers}</h2>
                    <h2>Following:{following}</h2>
                </div>
            </div>
        )
    }
}

export default UserCard;