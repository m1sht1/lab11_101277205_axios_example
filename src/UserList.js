import axios from 'axios'
import React, { Component } from 'react'
import UserDetail from './UserDetail'

export default class UserList extends Component {
constructor(props){
    super(props)
    this.state = {
        users :[]
}
}
componentDidMount = ()=>{
    this.getUserList()
}
    
    getUserList = ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response =>{
                console.log(response)
                this.setState({ users: response.data})
            })
            .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
            <button onClick={this.getUserList}>Get User</button> {
                this.state.users.map(user=>(
                    <UserDetail key={user.id} user ={user}/>
                ))
            }
            </div>
        )
    
    }
}
