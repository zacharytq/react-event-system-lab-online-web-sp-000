// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    constructor() {
        super()
    }

    popUp = () => {
        console.log('Entering password...')
    }

    render() {
        return(
        <input onKeyUp={this.popUp} type='password'/>
        )
    }
}