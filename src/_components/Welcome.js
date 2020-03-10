import React from "react"
import './_styles/Welcome.css'
//componentes funcionales (Porque son funciones de javascript)
//No trabaja con el estado ni con el ciclo de vida

function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Let's workout to get someone gains!!</p>
            </div>
        </div>
    )
}

export default Welcome