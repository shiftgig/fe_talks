import React from 'react'
import renderer from 'react-test-renderer'

import Todos from '../Todos'

it('should render an empty component', () => {
  const tree = renderer.create(
    <Todos />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('should render a list of todos', () => {
  const todos = [
    {
      text: 'some todo',
      done: false
    },
    {
      text: 'other todo',
      done: true
    }
  ]

  const tree = renderer.create(
    <Todos todos={todos} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('should add a todo to a list of todos', () => {
  const component = renderer.create(
    <Todos />
  )

  // First snapshot
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Select components
  const todoContainer = tree.children.filter(child => child.type === 'div')[0]
  const todoInput = todoContainer.children.filter(child => child.type === 'input')[0]
  const todoButton = todoContainer.children.filter(child => child.type === 'button')[0]

  // Add todo to list
  todoInput.props.onChange({ target: { name: 'input', value: 'some content' } })
  todoButton.props.onClick()

  // Create second snapshot
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
