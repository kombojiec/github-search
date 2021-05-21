import {GET_USER, GET_REPOS, SET_LOADING, CLEAR_USERS, SEARCH_USERS } from '../types';

const handlers = {
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
  [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
  [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
  [CLEAR_USERS]: (state, {payload}) => ({...state, users: [], loading: false}),
  [SET_LOADING]: (state, {payload}) => ({...state, loading: true}),
  DEFAULT: state => state,
}

const githubReduser = (state, action) => {
  console.log('action = ', action)
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}

export default githubReduser