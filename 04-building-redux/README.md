# Building Redux
I wanted to do a little experiment to understand Redux a little better so I built this small implementation of it. It covers only the basics, that is: storing a state, handling changes to that state and subscribing to changes.

I thought it would be a good idea to show how to implement a small version of redux to understand its main features and the pattern really.

This should be the final version:

``` js
import React from 'react';
import { render } from 'react-dom';

const initialState = {
  nextNoteId: 1,
  notes: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_ADD_NOTE': {
      return {
        ...state,
        nextNoteId: state.nextNoteId + 1,
        notes: {
          ...state.notes,
          [state.nextNoteId]: {
            id: state.nextNoteId,
            content: '',
          },
        },
      };
    }

    case 'ON_UPDATE_NOTE': {
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.id]: {
            ...state.notes[action.id],
            content: action.content,
          },
        },
      };
    }

    default:
      return state;
  }
};

const createStore = reducer => {
  let state = undefined
  const subscribers = []
  return {
    dispatch: action => {
      state = reducer(state, action)
      subscribers.forEach(handler => handler())
    },
    getState: () => state,
    subscribe: handler => {
      subscribers.push(handler)
    }
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  const state = store.getState()
  render(<div>{JSON.stringify(state, null, 2)}</div>, document.getElementById('root'));
})


store.dispatch({ type: 'ON_ADD_NOTE'})
store.dispatch({ type: 'ON_ADD_NOTE'})
store.dispatch({ type: 'ON_UPDATE_NOTE', id: 1, content: 'Hello humans' })


```