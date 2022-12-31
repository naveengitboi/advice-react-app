import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{
    
    state = {advice: ''}

    componentDidMount(){
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const {advice} = response.data.slip
                
                this.setState({advice:advice})
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    render(){
        return(
            <div className='container'>
                <div className="card">
                    <h1>{this.state.advice}</h1>
                    <button onClick={this.fetchAdvice}>Load Advice</button>
                </div>
            </div>
        )
    }

}

export default App;