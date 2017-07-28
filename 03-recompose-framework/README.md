# Recompose

Recompose is a library with utilities that deal specifically with HOC. We're starting to use these in the client_app so I thought it would be a good idea to take a closer look and discuss the pros and cons.

Basically you start with a stateless functional component like this:
```javascript
const Search = ({value, onChange, submit}) => (
  <div>
    <input value={value} placeholder="Search" onChange={onChange} />
    <button type="button" onClick={submit} />
  </div>
)
```
and Recompose has a several different utilities to help manage local state for the component like withState, which only adds state to the component:
```javascript
const SearchWithState = withState({'state', 'setState', {value: '', savedValue: ''}})(
  ({ state }) => (
    <div>
      <input value={state.value} placeholder="Search" onChange={e => setState({value: e.target.value})} />
      <button type="button" onClick={e => setState({savedValue: state.value})} />
    </div>
  )
)
```

# HOCs seem a little like classes...

When I first saw these I was struggling to explain to myself how they're different from classes. And if they're solving the same problem, why not just use classes? I think the main difference is you're starting from the most basic building block which is a functional stateless component. Then you're incrementally adding functionality to the component with HOCs. This feels different from classes where there's a hierarchy imposed. There's more flexibility in composing components.

It also forces us to think about what the minimal representation of our component should look like. A container component may only need local state so it doesn't need to extend React.Component. Andy saw a huge decrease in code when he started implementing this in client_app.



