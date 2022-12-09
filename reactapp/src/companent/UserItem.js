import React, { Component } from 'react'

class UserItem extends Component {
    render(props) {
        const { id, name } = this.props;
        return (
            <div>
                <ul>
                    <li>Id={id}</li>
                    <li>Username={name}</li>
                </ul>
            </div>
        )
    }
}

export default UserItem