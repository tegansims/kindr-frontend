import React from 'react';
import API from '../adaptors/API'

class RandomName extends React.Component {

state = {
    name: ''
}

handleClick=()=> console.log('clicking')


    render(){
        return <div>
            <strong>This is RandomName</strong><br></br>
            <button onClick={this.handleClick}>Click for random name</button> <br></br>
            Swipe right for yes, and left for no
        </div>
    }

}

export default RandomName;