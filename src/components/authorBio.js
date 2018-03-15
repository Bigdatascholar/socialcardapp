import React, { Component} from 'react'


class AuthorName extends Component{

    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    render(){

        return(
            <div>
            <input onChange = {event =>  this.setState({term: event.target.value})} />;
            The Name of the Author is: {this.state.term}
            </div>
    );
    }
}

export default AuthorName;