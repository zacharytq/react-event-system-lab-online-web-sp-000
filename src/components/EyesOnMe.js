// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    constructor() {
        super()
    }

    fireGood = () => {
        console.log('Good!')
    }

    fireFocus = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return(
            <button onBlur={this.fireFocus} onFocus={this.fireGood} />
        )
    }
}