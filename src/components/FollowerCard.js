import React from "react";

class FollowerCard extends React.Component {
    render() {
        const { avatar_url, login } = this.props.follower;
        console.log(this.props)
        return (
            <div className='user-card'>
                <div className='img-container'>
                    <img src={avatar_url} alt={`portrait of ${login}`}/>
                    <h1>{login}</h1>
                </div>
                <div className='following-info'>
                    <h2>Followers: 0</h2>
                    <h2>Following: 0</h2>
                </div>
            </div>
        )
    }
}

export default FollowerCard;