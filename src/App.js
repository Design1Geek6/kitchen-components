import React, { Component } from 'react';
import Kitchen from './Kitchen'

 class App extends Component {
  constructor(){
    super()
    console.log('App.constructor()')
  }
  
  componentWillMount(){
    console.log('App.componentWillMount()')
  }

  render() {
    console.log('App.render()')
    return (
      <div>
          <Kitchen />        
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentDidMount()')
  }
}

export default App
