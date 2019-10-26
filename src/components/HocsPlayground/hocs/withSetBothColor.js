import { withProps } from 'recompose'

export default withProps(props => {
  return {
    ...props,
    setBothColor: color => {
      props.setInnerColor(color)
      props.setOuterColor(color)
    }
  }
})
