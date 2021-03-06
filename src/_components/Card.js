// Componente de clase
import React from "react"
import circlesImage from "../_images/circles.png"
import './_styles/Card.css'

class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            image: 'https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20171003191443/Trofeo_de_Charizard_SSB4_%283DS%29.png',

        } 
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                image: 'https://raw.githubusercontent.com/RpL02/FitnessApp/styles/src/images/exercise.png'
            })
        }, 5000)
    }

    render(){
        const { title, description, img, leftColor, rightColor } = this.props

        return (
            <div className="card mx-auto Fitness-Card"
                style={{ backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`}}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card