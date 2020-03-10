import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: "Yerry",
    lastName: "Aguirre",
    avatar: "https://lh3.googleusercontent.com/proxy/ph7Z-fhagB_zZJAhQLZB8Fzg4cYDOhPI0t1Bwet40b1b-cqA2aEe4-41XkeCPgKqS6luAWlSxqPlLqgOMVexar0ase8WjFqgiuMu8LB4lSTtDpoDQmPtq8CzkzgEGmU"
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>HEllo {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}

const element = (
    <div>
        {getGreeting()}
        <img src={user.avatar}/>
    </div>
)
const container = document.getElementById("root")

ReactDOM.render(element, container)