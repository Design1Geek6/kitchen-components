import React, { Component } from 'react'
import BunWarmer from './BunWarmer'
import Fryer from './Fryer'

class Kitchen extends Component {
    constructor(){
        super()
        console.log('Kitchen.constructor()')
    }
    componentWillMount(){
        console.log('Kitchen.componentWillMount()')
    }
    
    render () {
        console.log('Kitchen.render()')
        return (
            <div>
            Kitchen is here and let get cooking
            <BunWarmer />
            <Fryer />
        </div>
        )
    }
    
        componentDidMount(){
            console.log('Kitchen.componentDidMount()')
        }
}

export default Kitchen
