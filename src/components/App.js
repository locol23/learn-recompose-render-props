import React from 'react'
import { withStateHandlers, withHandlers, compose } from 'recompose'
import Layout from './Layout'

const Title = props => <div>{props.renderProps(props)}</div>

const Component = props => (
  <Layout>
    <Title {...props} />
  </Layout>
)

export default compose(
  withStateHandlers(
    {
      text: 'Render Props',
    },
    {}
  ),
  withHandlers({
    renderProps: ({ text }) =>
      function f() {
        return <h1>{text}</h1>
      },
  })
)(Component)
