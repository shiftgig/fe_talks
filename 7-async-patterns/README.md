# Async patterns in React-Redux
In this fe talk we discussed a common pattern for structuring async operations in Redux. This pattern is based on the idea of handling the async data we receive by having a status of type: `init`, `pending`, `success` or `failure`. This way we can use this statuses to update the UI with spinners, data or error messages.

``` js
// List.js

const List = props => {
  const { items, status, error } = props;

  return (
    <span>
      { status === 'pending' && <div>Is loading...</div>}
      { (status === 'success' && items.length === 0) && <div>List is empty</div>}
      { (status === 'success' && items.length !== 0) && (
        <ul>
          { items.map(item => <li>{item}</li>) }
        </ul>
      )}
      { status === 'failure' && <div>There's been an error: {error}</div>}
    </span>
  );
};

const mapStateToProps = state => ({
  items: selectors.getItems(state),
  status: selectors.getStatus(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch({ type: actions.FETCH_ALL }),
  onUnmount: () => dispatch(actions.CLEAN_STATE),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));

```

``` js
// actions.js

import { NAMESPACE } from './constants';

export const FETCH_ALL = NAMESPACE + '/FETCH_ALL'
export const FETCH_ALL_START = NAMESPACE + '/FETCH_ALL_START'
export const FETCH_ALL_FAILURE = NAMESPACE + '/FETCH_ALL_FAILURE'
export const FETCH_ALL_SUCCESS = NAMESPACE + '/FETCH_ALL_SUCCESS'

export const CLEAN_STATE = NAMESPACE+ '/CLEAN_STATE'

```

``` js
// reducer.js

import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  status: 'init',
  error: '',
  items: [],
}

const reducer = handleActions({
  [actions.FETCH_ALL_START]: (state, action) => ({
    ...state,
    status: 'pending',
  }),

  [actions.FETCH_ALL_FAILURE]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  }),

  [actions.FETCH_ALL_SUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    items: action.payload.items
  }),

  [actions.CLEAN_STATE]: (state, action) =>
    initialState

}, initialState)

export default reducer

```


``` js
// selectors.js

import { NAMESPACE } from './constants';

export const getItems = state => state[NAMESPACE].items;
export const getStatus = state => state[NAMESPACE].status;
export const getError = state => state[NAMESPACE].error;

```


``` js
// sagas.js

import { call, put, takeEvery } from 'redux-saga/effects';

import { get } from '../../utils/api';

import * as actions from './actions';

export function * fetchAllWorker () {
  yield put({ type: actions.FETCH_ALL_START });

  const { res: items, error } = yield call(get, 'products');

  if (error) {
    return yield put({
      type: actions.FETCH_ALL_FAILURE,
      payload: {
        error
      }
    })
  }

  return yield put({
    type: actions.FETCH_ALL_SUCCESS,
    payload: {
      items
    }
  })
}

export function * fetchAllWatcher () {
  yield takeEvery(actions.FETCH_ALL, fetchAllWorker);
}

export default [
  fetchAllWatcher,
];

```