/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose, withHandlers, withProps } from 'recompose'
import BaseButton from './BaseButton'
import withCounter from '../hocs/withCounter'
import React from 'react'
import withLargeSize from '../hocs/withLargeSize'
import withPrimaryColor from '../hocs/withPrimaryColor'

function withStyleWrapper (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
    }

    render () {
      return <div style={this.props.style}><WrappedComponent {...this.props} /></div>
    }
  }
}

export default compose(
  withLargeSize,
  withPrimaryColor,
  withCounter,
  withHandlers({
    onClick: ({ setOuterColor, setInnerColor, increment, counter, reset }) => () => {
      const colors = ['red', 'black', 'orange', 'yellow', 'blue', 'gray']
      if (counter === 11) {
        setInnerColor(colors[Math.floor(Math.random() * colors.length)])
        setOuterColor(colors[Math.floor(Math.random() * colors.length)])
        reset()
      } else {
        increment()
      }
    },
  }),
  withProps((props) => {
    return {
      ...props,
      style: {
        display: 'inline-block',
        transform: `rotate(${props.counter * -30}deg)`
      }
    }
  }),
  withStyleWrapper
)(BaseButton)
