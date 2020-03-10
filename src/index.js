import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import Card from "./_components/Card"
import Welcome from './_components/Welcome'
/*
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
*/
const container = document.getElementById("root")
const element = (
    <div>
        <Welcome username="Yerry"/>
        <Card 
            title="Technique fitness"
            description="Learn amazing stret workout and calisthnics"
            img= "https://raw.githubusercontent.com/RpL02/FitnessApp/styles/src/images/exercise.png"
            leftColor="#A74CF2" 
            rightColor="#617BFB"
        />
        <br/>
        <Card 
            title="Technique Karate"
            description="Learn amazing stret Karate"
            img= "https://raw.githubusercontent.com/RpL02/FitnessApp/styles/src/images/exercise.png"
            leftColor="#20285e" 
            rightColor="#17a2b8"
        />
    </div>
)

ReactDOM.render(element, container)