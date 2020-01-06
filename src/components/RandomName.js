import React from 'react';
import API from '../adaptors/API'

class RandomName extends React.Component {

state = {
    name: ''
}

handleClick=()=> {
    console.log('clicking')
    API.randomName().then(name => this.setState({ name }))
    // API.randomName().then(name => console.log(name.name) ) 
}


    render(){
        return <div>
            <strong>This is RandomName</strong><br></br>
            <button onClick={this.handleClick}>Click for random name</button> <br></br>
            {this.state.name.name}<br></br>
            Swipe right for yes, and left for no
        </div>
    }

}

export default RandomName;