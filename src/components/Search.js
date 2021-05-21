import React, {useContext, useState} from 'react';
import AlertContext from '../context/alert/AlertContext';
import GithubContext from '../context/github/GithubContext';

const Search = props => {

  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);
  const [value, setValue] = useState('');

  const submit = event => {
    if(event.key === 'Enter'){
      if(value.trim() !== ''){
        github.searchUsers(value.trim())
        alert.hide();
      }else{
        alert.show('Введите имя пользователя')
        github.clearUsers();
      }
    }
  }

  return(

    <div className="search">
      <input 
        className="search__input" 
        type="text" 
        value={value}
        placeholder="Введите имя пользователя"
        onKeyPress={submit}
        onChange={event => setValue(event.target.value)}
      />
    </div>

  )
}

export default Search;