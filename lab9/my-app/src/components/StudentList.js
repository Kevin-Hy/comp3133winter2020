import React, { Component } from 'react'
import axios from "axios";
import DeleteStudent from './DeleteStudent';

class UserList extends Component {
    
    state = {
        users: []
    };

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>{
            const users = res.data;
            this.setState({users});
        });
    }
    
    render() {
        return (
            <div>
                 <ul>
                     {this.state.users.map(user => (
                        <li>
                        {user.name} <DeleteStudent />
                        </li>))}
                </ul>
            </div>
        )
    }
}

export default UserList
