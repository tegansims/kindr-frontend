import React from 'react';
import API from '../adaptors/API'
import NamesTile from './NamesTile'

class NamesList extends React.Component {

    state = {
        names: []
    }

    componentDidMount() {
        API.names().then(names => {
            this.setState({ names })
          })
    }



    render(){
        return <div> 
            <strong>This is NamesList</strong>
            {/* {this.state.names.map(name => <NamesTile key={name.id} name={name}/>)} */}
            {/* {this.state.names.filter(name=> name.gender === 'f').map(name => <NamesTile key={name.id} name={name}/>)} */}
            {/* {this.state.names.filter(name=> name.gender === 'm').map(name => <NamesTile key={name.id} name={name}/>)}   */}
        </div>
    }

}

export default NamesList;