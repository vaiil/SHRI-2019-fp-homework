/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'
import BaseButton from './BaseButton'
import withCounter from '../hocs/withCounter'
import withSetBothColor from '../hocs/withSetBothColor'

function withCounterBefore (WrappedComponent) {
  return class extends React.Component {
    constructor (props) {
      super(props)
    }

    render () {
      return <>{this.props.counter}<WrappedComponent {...this.props} /></>
    }
  }
}

export default compose(
  withProps({ initialCounter: 5 }),
  withCounter,
  withSetBothColor,
  withHandlers({
    onClick: ({ decrement, counter, reset, setBothColor }) => () => {
      if (counter === 1) {
        setBothColor('orange')
        reset(5)
      } else {
        decrement()
      }
    },
  }),
  withCounterBefore
)(BaseButton)
