import React from 'react';
import API from '../adaptors/API'
import Button from '@material-ui/core/Button';


class RandomName extends React.Component {

state = {
    name: ''
}

handleRandomClick=()=> API.randomName().then(name => this.setState({ name }))

handleClick=(YorN) => YorN === 'Y' ? console.log(`you like the name ${this.state.name.name}`) : console.log(`you do not like the name ${this.state.name.name}`)


handleKey=(e)=>{
    e.keyCode === 13 && this.handleRandomClick()
    e.keyCode === 39 && this.handleClick('Y')
    e.keyCode === 37 && this.handleClick('N')
}


render(){
    document.addEventListener('keydown', this.handleKey)
        return <div>
            <strong>This is RandomName</strong><br></br>
            
            <Button variant="contained" color="primary" onClick={this.handleRandomClick}>Click for random name</Button> <br></br>
            <h1>{this.state.name.name}</h1>
            <button onClick={() => this.handleClick('N')}>No</button>
            <button onClick={() => this.handleClick('Y')}>Yes</button>
            
        </div>
    }

}

export default RandomName;