import { withStateHandlers } from 'recompose'

export default withStateHandlers(
  ({ initialCounter = 0 }) => ({
    counter: initialCounter,
  }),
  {
    increment: ({ counter }) => () => ({
      counter: counter + 1,
    }),
    decrement: ({ counter }) => () => ({
      counter: counter - 1,
    }),
    reset: ({ counter }) => (newValue = 0) => ({
      counter: newValue
    })
  }
)

