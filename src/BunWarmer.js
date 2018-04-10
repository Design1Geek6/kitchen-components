import React, { Component } from 'react'

class BunWarmer extends Component {
    constructor(){
        super()
        console.log('BunWarmer.constructor()')
    }
    componentWillMount(){
        console.log('BunWarmer.componentWillMount()')
    }
    
    render () {
        console.log('BunWarmer.render()')
        return (
            <div>
            Keeps My buns warm
        </div>
        )
    }
    
        componentDidMount(){
            console.log('BunWarmer.componentDidMount()')
        }
    
}

export default BunWarmer