import React, { Component } from 'react'

class Fryer extends Component {
    constructor(){
        super()
        console.log('Fryer.constructor()')
    }
    componentWillMount(){
        console.log('Fryer.componentWillMount()')
    }
    
    render () {
        console.log('Fryer.render()')
        return (
            <div>
            Fryer Cooks Food
        </div>
        )
    }
    
        componentDidMount(){
            console.log('Fryer.componentDidMount()')
        }
}

export default Fryer