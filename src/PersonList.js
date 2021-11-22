import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class PersonList extends Component {

//Define state default values

    state = {
        person: []
    }

//Component Lifecycle Callback
    componentDidMount =()=> {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const person = res.data.results;
            this.setState({ person });
        })
    }

    render() {
        return (
            <div class="bg-primary clearfix">
                {
                    this.state.person.map(pl=>(
                        <div class="clearfix">
                            <div>{pl.name.title} {pl.name.first} {pl.name.last} - {pl.login.uuid}</div>
                            <div class="pull-left">
                                <img class="rounded-circle" src={pl.picture.large}/>
                            </div>
                            <div>User Name: {pl.login.username}</div>
                            <div class="pull-right">Gender: {pl.gender}</div>
                            <div>Time Zone Description: {pl.location.timezone.description}</div>
                            <div>Email: {pl.email}</div>
                            <div>Birth Date and Age: {pl.dob.date} ({pl.dob.age})</div>
                            <div>Register Date: {pl.registered.date}</div>
                            <div>Phone#: {pl.phone}</div>
                            <div>Cell#: {pl.cell}</div>
                            <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
