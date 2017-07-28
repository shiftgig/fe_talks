import React from 'react'

class TodosContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.todos || [],
      input: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onAddTodo = this.onAddTodo.bind(this)
    this.onMarkAsDone = this.onMarkAsDone.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAddTodo () {
    const { input } = this.state

    this.setState({
      input: '',
      todos: [
        ...this.state.todos,
        {
          done: false,
          text: input
        },
      ],
    })
  }

  onMarkAsDone (index) {
    const { todos } = this.state

    this.setState({
      todos: [
        ...todos.map((item, i) => {
          if (i === index) {
            item.done = !item.done
          }

          return item
        }),
      ]
    })
  }

  render() {
    const { onAddTodo, onMarkAsDone, onChange } = this
    const { todos, input } = this.state

    return (
      <div id="todos-container">
        <div id="todos-input">
          <input
            type="text"
            name="input"
            value={input}
            onChange={onChange}
          />
          <button
            onClick={onAddTodo}
          >Add todo!</button>
        </div>
        <div id="todos-list">
          <ul>
            { todos.map((todo, i) => (
              <li
                onClick={() => onMarkAsDone(i)}
                style={todo.done ? { textDecoration: 'line-through' } : {}}
                key={i}>
                {todo.text}</li>
            )) }
          </ul>
        </div>
      </div>
    )
  }
}

export default TodosContainer
