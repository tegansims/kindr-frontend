import React from 'react';
import API from '../adaptors/API'

class RandomName extends React.Component {

state = {
    name: '', 
    gender: 'f',
    usage: 'eng'
}

handleClick=()=> {
    console.log('clicking')
    API.randomName().then(name => this.setState({name: name['names'][0]}))
}


    render(){
        return <div>
            <strong>This is RandomName</strong><br></br>
            <button onClick={this.handleClick}>Click for random name</button> <br></br>
            Swipe right for yes, and left for no
        </div>
    }

}

export default RandomName;