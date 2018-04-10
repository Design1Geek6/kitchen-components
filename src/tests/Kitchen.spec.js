import React from 'react'
import Kitchen from '../Kitchen'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import BunWarmer from '../BunWarmer'
import Fryer from '../Fryer'


it('renders correctly', () => {
    const tree = Renderer
    .create(<Kitchen />)
    .toJSON()
    expect(tree).toMatchSnapshot()
})

it('shallow render kitchen correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Kitchen />)
    const result = renderer.getRenderOutput()

    //console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        'Kitchen is here and let get cooking',
        <BunWarmer />, <Fryer />
        ])
})