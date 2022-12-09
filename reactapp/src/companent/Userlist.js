import React, { Component } from 'react'
import users from '../users.json'
import UserItem from './UserItem'

class Userlist extends Component {
    render() {
        return (
            <div>
                {
                    user.results.map(user => {
                        return (
                            <UserItem
                                key={user.id}
                                id={user.id}
                                name={user.name}
                            />
                        )
                    })}
            </div>
        )
    }
}

export default Userlist