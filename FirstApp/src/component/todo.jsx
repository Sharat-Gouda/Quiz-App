import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <h1>Thissssssssss is {this.props.name}</h1>
                <h1>age is {this.props.age}</h1>
            </div>
        )
    }
}

