import React from 'react';
import { render } from 'react-dom';
import styles from './styles';
import { withState, withHandlers, compose } from 'recompose';

/* Classic React pattern using a wrapper component and a presentational component: */

const SearchWrapper = React.createClass({
  getInitialState() {
    return {
      value: '',
      results: [],
      currentTerm: ''
    }
  },
  submit(e) {
    const term = this.state.value;
    this.setState({
      currentTerm: term
    })
  },
  handleChange(e) {
    this.setState({
      value: e.target.value,
      currentTerm: e.target.value ? this.state.currentTerm : ''
    })
  },
  render() { 
    return (
      <Search 
        value={this.state.value} 
        submit={this.submit} 
        handleChange={this.handleChange} 
        currentTerm={this.state.currentTerm}
      /> 
    )
  }
});

const Search = ({ value, currentTerm, handleChange, submit }) => {
  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchBox}>
        <input 
          value={value}
          style={styles.searchInput}
          placeholder="Search"
          onChange={handleChange}
        />
        <button type="button" style={styles.searchButton} onClick={submit} />
      </div>
      { currentTerm ? 
          <div>
          <p>You searched for <strong>{currentTerm}</strong></p> 
          </div> : null 
      }
    </div>
  )
};

/* Adding state to a stateless functional component with an HOC that we don't really need to think about: */

const SearchWithState = withState('state', 'setState', {value: '', currentTerm: ''})(({state, setState}) => (
  <div style={styles.searchContainer}>
    <div style={styles.searchBox}>
      <input 
        value={state.value}
        style={styles.searchInput}
        placeholder="Search"
        onChange={e => setState({value: e.target.value})}
      />
      <button type="button" style={styles.searchButton} onClick={e => setState({currentTerm: state.value})} />
    </div>
    { state.currentTerm ? 
        <div>
        <p>You searched for <strong>{state.currentTerm}</strong></p> 
        </div> : null 
    }
  </div>
))

/* Combining multiple HOC with compose from the recompose library: */

const SearchWithStateAndHandlers = compose(
  withState('state', 'setState', {value: '', currentTerm:''}),
  withHandlers({
    handleChange: ({ setState }) => (e) => { setState({ value: e.target.value }) },
    submit: ({ state, setState }) => (e) => { setState({ currentTerm: state.value }) }
  })
)

const Search2 = SearchWithStateAndHandlers(
  ({ state, handleChange, submit }) => (
    <div style={styles.searchContainer}>
      <div style={styles.searchBox}>
        <input 
          value={state.value}
          style={styles.searchInput}
          placeholder="Search"
          onChange={handleChange}
        />
        <button type="button" style={styles.searchButton} onClick={submit} />
      </div>
      { state.currentTerm ? 
          <div>
          <p>You searched for <strong>{state.currentTerm}</strong></p> 
          </div> : null 
      }
    </div>
  )
)

/* Boring, unimportant render stuff: */

const App = () => (
  <div style={styles.container}>
    <Search2 />
  </div>
);

render(<App />, document.getElementById('root'));