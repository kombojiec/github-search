import React, {useReducer} from 'react';
import GithubContext from './GithubContext';
import githubReduser from './githubReduser';
import {GET_REPOS, GET_USER, SEARCH_USERS, CLEAR_USERS, SET_LOADING} from '../types';
import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GithubState = ({children}) => {

  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReduser, initialState)
  

  const withCreds = url => {
    return `${url}&client_id=${CLIENT_ID}client_secren=${CLIENT_SECRET}`
  }

  const searchUsers = async value => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`))
    console.log(response)
    dispatch({type: SEARCH_USERS, payload: response.data.items})
  }

  const getUser = async name => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${name}`))
    dispatch({type: GET_USER, payload: response.data})
  }

  const getRepos = async name => {
    setLoading();
    const response = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=20`))
    dispatch({type: GET_REPOS, payload: response.data})
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS})
  const setLoading = () => dispatch({type: SET_LOADING})
  const {user, users, repos, loading} = state;
  return (
    <GithubContext.Provider value={{
      searchUsers, getUser, getRepos, clearUsers, setLoading, 
      user, users, repos, loading
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubState;