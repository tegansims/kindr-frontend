import React from 'react';

class NamesTile extends React.Component {

    render(){
        return <div>
            {this.props.name.name} ({this.props.name.gender})
        </div>
    }

}

export default NamesTile;