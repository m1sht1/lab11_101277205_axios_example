import axios from 'axios'
import React from 'react'
const getUserDetailsByID = (id)=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response =>{
        console.log(response.data)
    
    })
    .catch(err=>console.log(err))
}
const deleteUserDetailsByID = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response =>{
        console.log(response.data)
    
    })
    .catch(err=>console.log(err))
}
export default function UserDetail(props) {
    return (
        <div>
            <h4 key = {props.user.id}>{props.user.name}-{props.user.username}</h4>
            <button onclick={(event)=>getUserDetailsByID(props.user.id)}>User Details</button>
            <button onclick={(event)=>deleteUserDetailsByID(props.user.id)}>Delete</button>
        </div>
    )
}
