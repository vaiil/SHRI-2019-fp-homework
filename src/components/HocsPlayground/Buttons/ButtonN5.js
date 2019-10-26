/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose, withHandlers, withProps } from 'recompose'
import BaseButton from './BaseButton'
import withCounter from '../hocs/withCounter'

export default compose(
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
    console.log(props)
    return {
      ...props,
      style: {
        transform: `rotate(${props.counter * -30}deg)`
      }
    }
  })
)(BaseButton)
