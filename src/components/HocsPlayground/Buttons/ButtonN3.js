/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose, withHandlers, mapProps } from 'recompose'
import BaseButton from './BaseButton'
import withSmallSize from '../hocs/withSmallSize'
import withPrimaryColor from '../hocs/withPrimaryColor'
import withCounter from '../hocs/withCounter'
import withSetBothColor from '../hocs/withSetBothColor'

export default compose(
  withSmallSize,
  withPrimaryColor,
  withCounter,
  withSetBothColor,
  withHandlers({
    onClick: ({ setBothColor, increment, counter }) => () => {
      setBothColor(counter % 2 ? 'gray' : 'green')
      increment()
    },
  }),
  mapProps(
    (obj) => {
      const children = []
      if (Array.isArray(obj.children)) {
        children.push(...obj.children)
      } else {
        children.push(obj.children)
      }
      children.push(' ')
      children.push(obj.counter)
      return { ...obj, children }
    }
  )
)(BaseButton)
