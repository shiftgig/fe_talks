# React Patterns

## Decorators

This is pattern which takes advantage of the `props.children` to create composition, some authors name this render callbacks, but I'm on my early 30s.. so old school powa o.O

Example:
Given the following output:
```javascript
<div>{`hi! my name is andy`}</div>
```

Can be implemented as:
```javascript
const Greetings = (props)=> props.children(`Andy`)

<Greetings>
  {name => <div>{`hi! my name is ${name}`}</div>}
</Greetings>
```

More cool sample [here](https://codesandbox.io/s/oYOmZ2KM3)

## Higher Order Components (HO)

HO Components are functions which receive a component and returns another component, that's all.

We use this pattern in order to provide data to any number of stateless (or not not) components so we can enhance or decorate them.

It has the following signature:
```javascript
const HO => ComponentToBeComposed => React.createClass({
  getInitialState () {
    return {
      custom: 'React ??????',
    }
  },
  render () {
    return <ComponentToBeComposed {...this.props} myAddedProp={this.state.custom} />
  }
})

const ComposesComponent = HO(<AnotherComponent />)
```

Another cool sample [here](https://codesandbox.io/s/AXLVVG17)

