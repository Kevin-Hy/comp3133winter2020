import React, { Component } from "react";
import axios from "axios";


class DeleteStudent extends Component {
    state = {  
        name: ""
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://jsonplaceholder.typicode.com/${this.state.id}`)
        .then(res =>{
            console.log(res);
            console.log(res.data);
        });
    };
    render() { 
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Delete</button>
                </form>
          </div>
        );
    }
}

 
export default DeleteStudent;